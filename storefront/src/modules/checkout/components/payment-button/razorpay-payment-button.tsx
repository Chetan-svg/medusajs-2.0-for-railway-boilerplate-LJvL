"use client"

import { placeOrder } from "@lib/data/cart"
import type { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import Spinner from "@modules/common/icons/spinner"
import ErrorMessage from "../error-message"
import React, { useCallback, useEffect, useState } from "react"
import { type RazorpayOrderOptions, useRazorpay } from "react-razorpay"
import type { CurrencyCode } from "react-razorpay/dist/constants/currency"

export const RazorpayPaymentButton = ({
  session,
  notReady,
  cart,
  "data-testid": dataTestId,
}: {
  session: HttpTypes.StorePaymentSession
  notReady: boolean
  cart: HttpTypes.StoreCart
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { Razorpay } = useRazorpay()

  const [orderData, setOrderData] = useState({ razorpayOrder: { id: "" } })

  const onPaymentCompleted = async () => {
    await placeOrder().catch(() => {
      setErrorMessage("An error occurred, please try again.")
      setSubmitting(false)
    })
  }

  useEffect(() => {
    setOrderData(session.data as { razorpayOrder: { id: string } })
  }, [session.data])

  const handlePayment = useCallback(async () => {
    setSubmitting(true)

    const options: RazorpayOrderOptions = {
      key:
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ??
        process.env.NEXT_PUBLIC_RAZORPAY_TEST_KEY_ID ??
        "",
      callback_url: `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/razorpay/hooks`,
      amount: session.amount * 100 * 100,
      order_id: orderData.razorpayOrder.id,
      currency: cart.currency_code.toUpperCase() as CurrencyCode,
      name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "",
      description: `Order number ${orderData.razorpayOrder.id}`,
      remember_customer: true,
      modal: {
        backdropclose: true,
        escape: true,
        handleback: true,
        confirm_close: true,
        ondismiss: async () => {
          setSubmitting(false)
          setErrorMessage("Payment cancelled")
        },
        animation: true,
      },
      handler: async () => {
        onPaymentCompleted()
      },
      prefill: {
        name:
          cart.billing_address?.first_name +
          " " +
          cart.billing_address?.last_name,
        email: cart.email,
        contact: cart.shipping_address?.phone ?? undefined,
      },
    }

    const razorpay = new Razorpay(options)
    if (orderData.razorpayOrder.id) razorpay.open()
    razorpay.on("payment.failed", (response: any) => {
      setErrorMessage(response.error?.description ?? "Payment failed")
      setSubmitting(false)
    })
    razorpay.on("payment.authorized" as any, () => {
      placeOrder()
    })
  }, [
    Razorpay,
    cart.billing_address?.first_name,
    cart.billing_address?.last_name,
    cart.currency_code,
    cart.email,
    cart.shipping_address?.phone,
    orderData.razorpayOrder.id,
    session.amount,
  ])

  return (
    <>
      <Button
        disabled={
          submitting ||
          notReady ||
          !orderData?.razorpayOrder?.id ||
          orderData?.razorpayOrder?.id === ""
        }
        onClick={handlePayment}
        size="large"
        isLoading={submitting}
        data-testid={dataTestId}
      >
        Place order
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="razorpay-payment-error-message"
      />
    </>
  )
}
