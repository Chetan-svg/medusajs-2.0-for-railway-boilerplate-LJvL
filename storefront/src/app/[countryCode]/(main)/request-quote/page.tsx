import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request for Quote | ShopEnGenie",
  description:
    "Get custom pricing for bulk orders and large projects. Submit your requirements and receive a quote within 24 hours.",
}

export default function RequestQuotePage() {
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
            Request for <span className="text-amber-500">Quote</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Need custom pricing for bulk orders or large projects? Submit your
            requirements and our team will respond within 24 business hours.
          </p>
        </div>
      </div>

      <div className="content-container py-16 sm:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                  Contact Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="ABC Manufacturing Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Product Requirements */}
              <div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                  Product Requirements
                </h2>

                {/* Dynamic product rows - simplified for static implementation */}
                <div className="space-y-4 mb-6">
                  <div className="grid sm:grid-cols-4 gap-4 p-4 bg-slate-50 border border-gray-200">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Product / Part Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="e.g., 6ES7214-1HG40-0XB0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Brand
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="e.g., Siemens"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Quantity
                      </label>
                      <input
                        type="number"
                        min="1"
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="10"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-4 gap-4 p-4 bg-slate-50 border border-gray-200">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Product / Part Number
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="e.g., 1746-OB16"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Brand
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="e.g., Allen-Bradley"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Quantity
                      </label>
                      <input
                        type="number"
                        min="1"
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="5"
                      />
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-500 mb-6">
                  For longer lists, you can attach a file below or describe your
                  requirements in the message.
                </p>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Attach Product List (optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 p-6 text-center hover:border-amber-500 transition-colors">
                    <input
                      type="file"
                      accept=".csv,.xlsx,.xls,.pdf"
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-slate-600"
                    >
                      <svg
                        className="w-10 h-10 text-slate-400 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span className="text-sm">
                        Drop file here or{" "}
                        <span className="text-amber-600 font-medium">
                          browse
                        </span>
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        CSV, Excel, or PDF (max 10MB)
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                  Additional Details
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors bg-white">
                      <option value="">Select project type</option>
                      <option value="new-installation">New Installation</option>
                      <option value="expansion">System Expansion</option>
                      <option value="replacement">Replacement/Spare</option>
                      <option value="upgrade">System Upgrade</option>
                      <option value="maintenance">Regular Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Required By
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Additional Notes / Requirements
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Any specific requirements, delivery preferences, or questions..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-slate-900 px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
              >
                Submit Quote Request
              </button>

              <p className="text-xs text-slate-500 text-center">
                We typically respond to quote requests within 24 business hours.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Why RFQ */}
              <div className="bg-slate-900 text-white p-6">
                <h3 className="font-bold uppercase tracking-wide mb-4">
                  Why Request a Quote?
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
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
                    <span>Volume discounts on bulk orders</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>Custom sourcing for hard-to-find parts</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>Consolidated shipping for multiple items</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                    <span>Net-30 credit terms for qualified buyers</span>
                  </li>
                </ul>
              </div>

              {/* Direct Contact */}
              <div className="bg-slate-100 p-6 border-l-4 border-amber-500">
                <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Prefer to Talk?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Our sales team is available for direct consultation.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Phone:</strong>
                    <br />
                    <a
                      href="tel:+919876543210"
                      className="text-amber-600 hover:underline"
                    >
                      +91 98765 43210
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>
                    <br />
                    <a
                      href="mailto:sales@shopengenie.com"
                      className="text-amber-600 hover:underline"
                    >
                      sales@shopengenie.com
                    </a>
                  </p>
                  <p className="text-slate-500 text-xs mt-3">
                    Mon - Sat, 9 AM - 6 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
