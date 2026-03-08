"use client"

import { useEffect, useRef } from "react"

type GadsConversionEventProps = {
  orderTotal: number
  currencyCode: string
  orderId: string
}

export default function GadsConversionEvent({
  orderTotal,
  currencyCode,
  orderId,
}: GadsConversionEventProps) {
  const hasFired = useRef(false)

  useEffect(() => {
    if (hasFired.current) return
    hasFired.current = true

    const gtagId = process.env.NEXT_PUBLIC_GTAG_ID
    const conversionLabel = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL

    if (!gtagId || !conversionLabel || typeof window === "undefined") return
    if (typeof (window as any).gtag !== "function") return

    ;(window as any).gtag("event", "conversion", {
      send_to: `${gtagId}/${conversionLabel}`,
      value: orderTotal,
      currency: currencyCode.toUpperCase(),
      transaction_id: orderId,
    })
  }, [orderTotal, currencyCode, orderId])

  return null
}
