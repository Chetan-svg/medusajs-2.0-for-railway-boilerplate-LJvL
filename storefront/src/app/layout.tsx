import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import Script from "next/script"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        {GTAG_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GTAG_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
