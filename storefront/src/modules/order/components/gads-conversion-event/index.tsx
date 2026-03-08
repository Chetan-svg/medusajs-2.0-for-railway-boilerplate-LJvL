"use client"

import { useEffect, useRef } from "react"

type GadsConversionEventProps = {
  gtagId: string
  conversionLabel: string
  orderTotal: number
  currencyCode: string
  orderId: string
}

export default function GadsConversionEvent({
  gtagId,
  conversionLabel,
  orderTotal,
  currencyCode,
  orderId,
}: GadsConversionEventProps) {
  const hasFired = useRef(false)

  useEffect(() => {
    if (hasFired.current) return
    hasFired.current = true

    if (!gtagId || !conversionLabel) return
    if (typeof (window as any).gtag !== "function") return

    ;(window as any).gtag("event", "conversion", {
      send_to: `${gtagId}/${conversionLabel}`,
      value: orderTotal,
      currency: currencyCode.toUpperCase(),
      transaction_id: orderId,
    })
  }, [gtagId, conversionLabel, orderTotal, currencyCode, orderId])

  return null
}
