import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Credit Application | ShopEnGenie",
  description:
    "Apply for Net-30 credit terms for your business. Streamline your industrial parts procurement with flexible payment options.",
}

export default function CreditApplicationPage() {
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
            Credit <span className="text-amber-500">Application</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Apply for Net-30 payment terms and streamline your procurement
            process with flexible credit options.
          </p>
        </div>
      </div>

      <div className="content-container py-16 sm:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <form className="space-y-8">
              {/* Business Information */}
              <div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                  Business Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Legal Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="ABC Manufacturing Pvt. Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Trade Name (if different)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="DBA name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Business Type *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select type</option>
                      <option value="private-limited">Private Limited</option>
                      <option value="public-limited">Public Limited</option>
                      <option value="partnership">Partnership</option>
                      <option value="llp">LLP</option>
                      <option value="proprietorship">Proprietorship</option>
                      <option value="government">Government Entity</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      GST Number *
                    </label>
                    <input
                      type="text"
                      required
                      pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}"
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="29XXXXX1234X1ZX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      PAN Number *
                    </label>
                    <input
                      type="text"
                      required
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="XXXXX1234X"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Years in Business *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Number of Employees
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors bg-white">
                      <option value="">Select</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Business Address *
                    </label>
                    <textarea
                      required
                      rows={2}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      placeholder="Complete business address"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Bengaluru"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      pattern="[0-9]{6}"
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="560058"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                  Primary Contact
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Contact Name *
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
                      Designation *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Procurement Manager"
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

              {/* Credit Request */}
              <div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                  Credit Request
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Requested Credit Limit *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select limit</option>
                      <option value="50000">Up to ₹50,000</option>
                      <option value="100000">₹50,001 - ₹1,00,000</option>
                      <option value="250000">₹1,00,001 - ₹2,50,000</option>
                      <option value="500000">₹2,50,001 - ₹5,00,000</option>
                      <option value="1000000">₹5,00,001 - ₹10,00,000</option>
                      <option value="1000000+">Above ₹10,00,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Expected Monthly Purchases
                    </label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors bg-white">
                      <option value="">Select range</option>
                      <option value="25000">Up to ₹25,000</option>
                      <option value="50000">₹25,001 - ₹50,000</option>
                      <option value="100000">₹50,001 - ₹1,00,000</option>
                      <option value="250000">₹1,00,001 - ₹2,50,000</option>
                      <option value="250000+">Above ₹2,50,000</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Trade References */}
              <div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                  Trade References
                </h2>
                <p className="text-sm text-slate-600 mb-4">
                  Please provide at least 2 trade references from existing
                  suppliers.
                </p>

                <div className="space-y-6">
                  {/* Reference 1 */}
                  <div className="p-4 bg-slate-50 border border-gray-200">
                    <h3 className="text-sm font-bold text-slate-700 mb-3">
                      Reference 1
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                          placeholder="Supplier Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                          placeholder="Contact Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                          placeholder="email@supplier.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reference 2 */}
                  <div className="p-4 bg-slate-50 border border-gray-200">
                    <h3 className="text-sm font-bold text-slate-700 mb-3">
                      Reference 2
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                          placeholder="Supplier Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                          placeholder="Contact Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                          placeholder="email@supplier.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 border-2 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm text-slate-600">
                    I certify that all information provided is accurate and
                    authorize ShopEnGenie to verify the information and check
                    credit references. *
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 border-2 border-gray-300 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm text-slate-600">
                    I agree to the{" "}
                    <a href="/terms" className="text-amber-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and understand that credit approval is at ShopEnGenie&apos;s
                    discretion. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-slate-900 px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
              >
                Submit Credit Application
              </button>

              <p className="text-xs text-slate-500 text-center">
                Applications are typically processed within 3-5 business days.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Credit Terms Info */}
              <div className="bg-slate-900 text-white p-6">
                <h3 className="font-bold uppercase tracking-wide mb-4">
                  Net-30 Credit Terms
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
                    <span>30 days to pay from invoice date</span>
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
                    <span>No interest if paid on time</span>
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
                    <span>Monthly consolidated invoicing</span>
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
                    <span>Credit limit reviews every 6 months</span>
                  </li>
                </ul>
              </div>

              {/* Eligibility */}
              <div className="bg-amber-50 border-2 border-amber-200 p-6">
                <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Registered business entity</li>
                  <li>• Valid GST registration</li>
                  <li>• Minimum 1 year in operation</li>
                  <li>• 2 verifiable trade references</li>
                  <li>• Good credit history</li>
                </ul>
              </div>

              {/* Questions */}
              <div className="bg-slate-100 p-6 border-l-4 border-amber-500">
                <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-4">
                  Have Questions?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Our credit team can help with your application.
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong>
                    <br />
                    <a
                      href="mailto:credit@shopengenie.com"
                      className="text-amber-600 hover:underline"
                    >
                      credit@shopengenie.com
                    </a>
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
