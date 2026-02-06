import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Return Policy | ShopEnGenie",
  description:
    "ShopEnGenie's B2B-friendly return policy for industrial automation parts. Learn about our 30-day return window and RMA process.",
}

export default function ReturnsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="content-container">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
              Returns & Refunds
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 uppercase">
            Return <span className="text-amber-500">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            We stand behind every product we sell. Our B2B-friendly return
            policy is designed to give you confidence in your purchases.
          </p>
        </div>
      </div>

      <div className="content-container py-16 sm:py-20">
        <div className="max-w-4xl">
          {/* Key Points Summary */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-50 p-6 border-l-4 border-amber-500">
              <div className="text-3xl font-black text-amber-500 mb-2">30</div>
              <div className="text-sm font-bold text-slate-900 uppercase">
                Day Return Window
              </div>
              <p className="text-sm text-slate-600 mt-2">
                For unopened items in original packaging
              </p>
            </div>
            <div className="bg-slate-50 p-6 border-l-4 border-slate-300">
              <div className="text-3xl font-black text-slate-700 mb-2">90</div>
              <div className="text-sm font-bold text-slate-900 uppercase">
                Day Warranty Claims
              </div>
              <p className="text-sm text-slate-600 mt-2">
                For defective or DOA products
              </p>
            </div>
            <div className="bg-slate-50 p-6 border-l-4 border-slate-300">
              <div className="text-3xl font-black text-slate-700 mb-2">5-7</div>
              <div className="text-sm font-bold text-slate-900 uppercase">
                Business Days
              </div>
              <p className="text-sm text-slate-600 mt-2">
                Refund processing time
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {/* Eligible Returns */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                Eligible Returns
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>Products may be returned within 30 days of delivery if:</p>
                <ul className="list-none space-y-3">
                  {[
                    "Item is in original, unopened packaging with all seals intact",
                    "All accessories, documentation, and packaging materials are included",
                    "Product has not been installed, programmed, or modified",
                    "Original invoice or order confirmation is provided",
                    "Return authorization (RMA) has been obtained from our team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
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
              </div>
            </section>

            {/* Non-Returnable Items */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-slate-300 inline-block">
                Non-Returnable Items
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  The following items cannot be returned except for warranty
                  claims:
                </p>
                <ul className="list-none space-y-3">
                  {[
                    "Custom-ordered or specially configured products",
                    "Software, firmware, or digital licenses",
                    "Products with broken seals or opened packaging",
                    "Items marked as 'Final Sale' or 'Non-Returnable'",
                    "Products purchased more than 30 days ago",
                    "Items showing signs of installation, use, or modification",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Defective Products */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                Defective Products & Warranty Claims
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  If you receive a defective or Dead-on-Arrival (DOA) product:
                </p>
                <div className="bg-amber-50 border-2 border-amber-200 p-6 my-6">
                  <h3 className="font-bold text-slate-900 mb-3">
                    Within 7 Days of Delivery
                  </h3>
                  <p className="text-sm">
                    Contact us immediately for a replacement or full refund. We
                    will cover return shipping costs and expedite the
                    replacement.
                  </p>
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 p-6 my-6">
                  <h3 className="font-bold text-slate-900 mb-3">
                    8-90 Days After Delivery
                  </h3>
                  <p className="text-sm">
                    Products covered under manufacturer warranty. We will
                    facilitate the warranty claim process with the OEM on your
                    behalf. Replacement or repair based on manufacturer policy.
                  </p>
                </div>
                <p>
                  All warranty claims require proof of purchase and photos/videos
                  demonstrating the defect.
                </p>
              </div>
            </section>

            {/* Return Process */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                How to Return an Item
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Request RMA",
                    description:
                      "Contact our support team via email or phone to request a Return Merchandise Authorization (RMA) number. Please have your order number ready.",
                  },
                  {
                    step: "2",
                    title: "Pack Securely",
                    description:
                      "Pack the item in its original packaging with all accessories. Include the RMA number on the outside of the package. Use adequate padding to prevent damage.",
                  },
                  {
                    step: "3",
                    title: "Ship the Return",
                    description:
                      "Ship the package to our returns center using a trackable shipping method. Return shipping costs are the buyer's responsibility except for defective items.",
                  },
                  {
                    step: "4",
                    title: "Inspection & Refund",
                    description:
                      "We will inspect the return within 2 business days of receipt. Approved refunds are processed within 5-7 business days to the original payment method.",
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-500 text-slate-900 font-black flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-1">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Restocking Fees */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-slate-300 inline-block">
                Restocking Fees
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>A restocking fee may apply in the following cases:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left p-3 font-bold text-slate-900">
                          Condition
                        </th>
                        <th className="text-left p-3 font-bold text-slate-900">
                          Restocking Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="p-3">
                          Unopened, original packaging, within 30 days
                        </td>
                        <td className="p-3 text-green-600 font-medium">
                          No fee
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Opened packaging, item unused and complete
                        </td>
                        <td className="p-3 text-amber-600 font-medium">15%</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          Missing accessories or documentation
                        </td>
                        <td className="p-3 text-amber-600 font-medium">
                          15-25%
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Defective or DOA products</td>
                        <td className="p-3 text-green-600 font-medium">
                          No fee
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-slate-900 text-white p-8 -mx-4 sm:mx-0">
              <h2 className="text-xl font-black uppercase tracking-tight mb-4">
                Need to Start a Return?
              </h2>
              <p className="text-slate-400 mb-6">
                Contact our support team to obtain an RMA number and start the
                return process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:returns@shopengenie.com"
                  className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
                >
                  Email: returns@shopengenie.com
                </a>
                <LocalizedClientLink
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-slate-600 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:border-amber-500 transition-all"
                >
                  Contact Support
                </LocalizedClientLink>
              </div>
            </section>
          </div>

          <p className="text-sm text-slate-500 mt-12">
            Last updated: January 2025. ShopEnGenie reserves the right to modify
            this return policy at any time. Changes will be effective immediately
            upon posting to the website.
          </p>
        </div>
      </div>
    </div>
  )
}
