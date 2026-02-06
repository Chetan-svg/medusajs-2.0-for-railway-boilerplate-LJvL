import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Bulk Orders | ShopEnGenie",
  description:
    "Volume pricing and bulk ordering for industrial automation parts. Save more when you order more.",
}

export default function BulkOrdersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="content-container">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
              B2B Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 uppercase">
            Bulk <span className="text-amber-500">Orders</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Volume pricing, dedicated support, and flexible payment terms for
            your large-scale industrial projects.
          </p>
        </div>
      </div>

      <div className="content-container py-16 sm:py-20">
        {/* Volume Pricing Tiers */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
            Volume Pricing Tiers
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="border-2 border-gray-200 p-6 text-center">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                Standard
              </div>
              <div className="text-3xl font-black text-slate-900 mb-2">
                1-9
              </div>
              <div className="text-sm text-slate-600 mb-4">units per SKU</div>
              <div className="text-lg font-bold text-slate-700">List Price</div>
            </div>

            <div className="border-2 border-gray-200 p-6 text-center">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                Small Bulk
              </div>
              <div className="text-3xl font-black text-slate-900 mb-2">
                10-49
              </div>
              <div className="text-sm text-slate-600 mb-4">units per SKU</div>
              <div className="text-lg font-bold text-amber-600">5-10% Off</div>
            </div>

            <div className="border-2 border-amber-500 p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 uppercase">
                Popular
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                Medium Bulk
              </div>
              <div className="text-3xl font-black text-slate-900 mb-2">
                50-99
              </div>
              <div className="text-sm text-slate-600 mb-4">units per SKU</div>
              <div className="text-lg font-bold text-amber-600">10-15% Off</div>
            </div>

            <div className="border-2 border-gray-200 p-6 text-center bg-slate-900 text-white">
              <div className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-2">
                Enterprise
              </div>
              <div className="text-3xl font-black mb-2">100+</div>
              <div className="text-sm text-slate-400 mb-4">units per SKU</div>
              <div className="text-lg font-bold text-amber-500">
                Custom Quote
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-6">
            * Discounts vary by product category. Contact sales for exact
            pricing.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
            Bulk Order Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Volume Discounts",
                description:
                  "Save 5-20% or more on large orders. The more you buy, the more you save.",
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
                title: "Dedicated Account Manager",
                description:
                  "Get a single point of contact for all your orders, inquiries, and support needs.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                ),
              },
              {
                title: "Priority Shipping",
                description:
                  "Bulk orders receive priority processing and expedited shipping at no extra cost.",
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
                title: "Net-30 Payment Terms",
                description:
                  "Qualified bulk buyers can access credit terms to manage cash flow better.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                ),
              },
              {
                title: "Scheduled Deliveries",
                description:
                  "Set up recurring orders and scheduled deliveries to maintain inventory levels.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                ),
              },
              {
                title: "Consolidated Invoicing",
                description:
                  "Receive monthly consolidated invoices for easier accounting and reconciliation.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                ),
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="border-2 border-gray-200 p-6 hover:border-amber-500 transition-colors"
              >
                <svg
                  className="w-10 h-10 text-amber-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {benefit.icon}
                </svg>
                <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
            How to Place a Bulk Order
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Submit Requirements",
                description:
                  "Fill out our RFQ form with product details, quantities, and timeline.",
              },
              {
                step: "2",
                title: "Receive Quote",
                description:
                  "Our team prepares a custom quote within 24 hours with volume pricing.",
              },
              {
                step: "3",
                title: "Confirm Order",
                description:
                  "Review, approve, and confirm your order. Apply for credit if needed.",
              },
              {
                step: "4",
                title: "Track & Receive",
                description:
                  "Track your shipment in real-time and receive with priority delivery.",
              },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="w-12 h-12 bg-amber-500 text-slate-900 font-black text-xl flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-20 bg-slate-50 -mx-4 sm:mx-0 px-4 sm:px-8 py-12">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Manufacturing Plants",
              "Automotive",
              "Pharmaceuticals",
              "Food & Beverage",
              "Oil & Gas",
              "Power & Energy",
              "Water Treatment",
              "OEM Integrators",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white border border-gray-200 p-4 text-center hover:border-amber-500 transition-colors"
              >
                <span className="text-sm font-medium text-slate-700">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            Ready to Place a Bulk Order?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Contact our sales team for custom pricing, credit terms, and
            dedicated support for your bulk requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LocalizedClientLink
              href="/request-quote"
              className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
            >
              Request a Quote
            </LocalizedClientLink>
            <a
              href="tel:+18005550199"
              className="inline-flex items-center justify-center border-2 border-slate-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wider hover:border-amber-500 transition-all"
            >
              Call Sales: +1 800-555-0199
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
