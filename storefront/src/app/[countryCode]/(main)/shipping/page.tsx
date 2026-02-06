import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Shipping & Delivery | ShopEnGenie",
  description:
    "ShopEnGenie shipping information - same-day dispatch, pan-India delivery, tracking, and shipping rates for industrial automation parts.",
}

export default function ShippingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="content-container">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
              Delivery Information
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 uppercase">
            Shipping & <span className="text-amber-500">Delivery</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Fast, reliable shipping across India. Same-day dispatch on in-stock
            items ordered before 2 PM.
          </p>
        </div>
      </div>

      <div className="content-container py-16 sm:py-20">
        <div className="max-w-4xl">
          {/* Shipping Options */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
              Shipping Options
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-gray-200 p-6 hover:border-amber-500 transition-colors">
                <div className="w-12 h-12 bg-amber-500 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Same-Day Dispatch
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Orders placed before 2 PM on in-stock items ship the same
                  business day.
                </p>
                <p className="text-lg font-bold text-amber-600">FREE*</p>
                <p className="text-xs text-slate-500">*On orders above ₹5,000</p>
              </div>

              <div className="border-2 border-gray-200 p-6 hover:border-amber-500 transition-colors">
                <div className="w-12 h-12 bg-slate-200 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Express Delivery
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  2-3 business days delivery to major cities and metros.
                </p>
                <p className="text-lg font-bold text-slate-700">₹199 - ₹499</p>
                <p className="text-xs text-slate-500">Based on weight/location</p>
              </div>

              <div className="border-2 border-gray-200 p-6 hover:border-amber-500 transition-colors">
                <div className="w-12 h-12 bg-slate-200 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                  Standard Shipping
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  5-7 business days delivery pan-India. Most economical option.
                </p>
                <p className="text-lg font-bold text-slate-700">₹99 - ₹299</p>
                <p className="text-xs text-slate-500">Based on weight/location</p>
              </div>
            </div>
          </section>

          {/* Free Shipping */}
          <section className="mb-16 bg-amber-50 border-2 border-amber-200 p-8">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">
              Free Shipping Eligibility
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Orders Above ₹5,000
                </h3>
                <p className="text-slate-600 text-sm">
                  All orders above ₹5,000 qualify for free standard shipping
                  across India. No code required.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Bulk Orders (₹50,000+)
                </h3>
                <p className="text-slate-600 text-sm">
                  Large orders qualify for free express shipping. Contact sales
                  for custom shipping arrangements.
                </p>
              </div>
            </div>
          </section>

          {/* Delivery Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
              Estimated Delivery Times
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-bold text-slate-900">
                      Region
                    </th>
                    <th className="text-left p-4 font-bold text-slate-900">
                      Standard
                    </th>
                    <th className="text-left p-4 font-bold text-slate-900">
                      Express
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-4">
                      <span className="font-medium">Metro Cities</span>
                      <br />
                      <span className="text-slate-500 text-xs">
                        Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad
                      </span>
                    </td>
                    <td className="p-4">3-5 days</td>
                    <td className="p-4 text-amber-600 font-medium">1-2 days</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <span className="font-medium">Tier 2 Cities</span>
                      <br />
                      <span className="text-slate-500 text-xs">
                        Pune, Ahmedabad, Jaipur, Lucknow, Chandigarh, etc.
                      </span>
                    </td>
                    <td className="p-4">4-6 days</td>
                    <td className="p-4 text-amber-600 font-medium">2-3 days</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <span className="font-medium">Other Locations</span>
                      <br />
                      <span className="text-slate-500 text-xs">
                        Tier 3 cities and rural areas
                      </span>
                    </td>
                    <td className="p-4">5-7 days</td>
                    <td className="p-4 text-amber-600 font-medium">3-4 days</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <span className="font-medium">Remote Areas</span>
                      <br />
                      <span className="text-slate-500 text-xs">
                        Northeast, J&K, Himachal, Islands
                      </span>
                    </td>
                    <td className="p-4">7-10 days</td>
                    <td className="p-4 text-amber-600 font-medium">4-5 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              * Delivery times are estimates and may vary due to carrier
              availability, weather, or other factors beyond our control.
            </p>
          </section>

          {/* Tracking */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
              Order Tracking
            </h2>
            <p className="text-slate-600 mb-6">
              Once your order ships, you will receive an email with tracking
              information. You can also:
            </p>
            <ul className="space-y-3 text-slate-600">
              {[
                "Log into your account and view order status from the dashboard",
                "Use the tracking link in your shipping confirmation email",
                "Contact support with your order number for status updates",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Handling Shipments */}
          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
              Receiving Your Shipment
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                <strong>Inspection on Delivery:</strong> Please inspect packages
                upon delivery. If you notice external damage, photograph it and
                note it on the delivery receipt before signing.
              </p>
              <p>
                <strong>Report Damage Promptly:</strong> Report any shipping
                damage or missing items within 48 hours of delivery. Include
                photos of the damage and packaging.
              </p>
              <p>
                <strong>Signature Required:</strong> All shipments require a
                signature upon delivery to ensure secure receipt of your
                industrial components.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-slate-900 text-white p-8">
            <h2 className="text-xl font-black uppercase tracking-tight mb-4">
              Shipping Questions?
            </h2>
            <p className="text-slate-400 mb-6">
              Need expedited shipping or have a delivery concern? Our logistics
              team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink
                href="/contact"
                className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
              >
                Contact Support
              </LocalizedClientLink>
              <a
                href="mailto:shipping@shopengenie.com"
                className="inline-flex items-center justify-center border-2 border-slate-600 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:border-amber-500 transition-all"
              >
                shipping@shopengenie.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
