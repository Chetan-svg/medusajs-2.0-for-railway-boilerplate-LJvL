import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "About Us | ShopEnGenie",
  description:
    "India's trusted B2B marketplace for industrial automation parts. Learn about our mission to power Indian manufacturing with quality MRO supplies.",
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="content-container">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
              About ShopEnGenie
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 uppercase">
            Powering Indian
            <br />
            <span className="text-amber-500">Manufacturing</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Your trusted partner for industrial automation parts, serving
            manufacturing facilities across India with genuine products and
            expert support.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="content-container py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-6">
              Our Mission
            </h2>
            <div className="w-12 h-1 bg-amber-500 mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At ShopEnGenie, we believe every manufacturing operation deserves
              access to genuine, high-quality automation parts without the
              hassle of traditional procurement channels.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We&apos;ve built India&apos;s most comprehensive B2B marketplace for
              industrial MRO (Maintenance, Repair, and Operations) supplies,
              connecting manufacturers directly with authorized distributors and
              OEM suppliers.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our commitment: genuine parts, competitive pricing, same-day
              dispatch, and technical support from automation experts who
              understand your challenges.
            </p>
          </div>
          <div className="bg-slate-100 p-8 border-l-4 border-amber-500">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-amber-500 mb-2">
                  200+
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">
                  Trusted Brands
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-amber-500 mb-2">
                  2,000+
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">
                  Products
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-amber-500 mb-2">
                  30K+
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-amber-500 mb-2">
                  98%
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">
                  On-Time Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-slate-50 py-16 sm:py-20">
        <div className="content-container">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-12 text-center">
            Why Choose ShopEnGenie
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Genuine OEM Parts",
                description:
                  "Every product we sell is 100% genuine with full manufacturer warranty. No grey market, no counterfeits.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: "Same-Day Dispatch",
                description:
                  "Orders placed before 2 PM on in-stock items ship the same day. Pan-India delivery with tracking.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
              {
                title: "Expert Support",
                description:
                  "Our team includes automation engineers who understand your applications. Technical guidance included.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ),
              },
              {
                title: "Bulk Pricing",
                description:
                  "Volume discounts for regular orders. Custom quotes for large projects. Net-30 terms for qualified buyers.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Easy Returns",
                description:
                  "30-day return policy on unopened items. Hassle-free RMA process for defective products.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                ),
              },
              {
                title: "Secure Payments",
                description:
                  "Multiple payment options including bank transfer, credit cards, and UPI. GST invoices provided.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 border-2 border-gray-200 hover:border-amber-500 transition-colors"
              >
                <svg
                  className="w-10 h-10 text-amber-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
                <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-16">
        <div className="content-container text-center">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Browse our catalog or contact our team for a custom quote on your
            automation requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
            >
              Browse Products
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-slate-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wider hover:border-amber-500 transition-all"
            >
              Contact Sales
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}
