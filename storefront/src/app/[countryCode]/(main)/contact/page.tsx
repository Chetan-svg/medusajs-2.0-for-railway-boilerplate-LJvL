import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | ShopEnGenie",
  description:
    "Get in touch with ShopEnGenie for industrial automation parts, bulk orders, technical support, or general inquiries.",
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="content-container">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 uppercase">
            Contact <span className="text-amber-500">Us</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Have questions about our products, need a custom quote, or require
            technical support? Our team is here to help.
          </p>
        </div>
      </div>

      <div className="content-container py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">
              How to Reach Us
            </h2>

            <div className="space-y-8">
              {/* Sales Inquiries */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-500 flex items-center justify-center flex-shrink-0">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-1">
                    Sales & Quotes
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">
                    For product inquiries, bulk orders, and custom quotes
                  </p>
                  <a
                    href="mailto:chetan@shopengenie.com"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    chetan@shopengenie.com
                  </a>
                </div>
              </div>

              {/* Technical Support */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-200 flex items-center justify-center flex-shrink-0">
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-1">
                    Technical Support
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Product compatibility, installation guidance, troubleshooting
                  </p>
                  <a
                    href="mailto:chetan@shopengenie.com"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    chetan@shopengenie.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-200 flex items-center justify-center flex-shrink-0">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-1">
                    Phone
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">
                    Monday - Friday, 9:00 AM - 6:00 PM EST
                  </p>
                  <a
                    href="tel:+18005550199"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    +1 800-555-0199
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-200 flex items-center justify-center flex-shrink-0">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-1">
                    Office Address
                  </h3>
                  <p className="text-slate-600 text-sm">
                    ShopEnGenie Industrial Supplies
                    <br />
                    1234 Industrial Parkway, Suite 100<br />
                    Houston, TX 77001
                    <br />
                    USA
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 p-6 bg-slate-100 border-l-4 border-amber-500">
              <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-slate-600">Need a bulk quote?</span>{" "}
                  <a href="/request-quote" className="text-amber-600 hover:underline">
                    Request for Quote
                  </a>
                </li>
                <li>
                  <span className="text-slate-600">Track your order?</span>{" "}
                  <a href="/account" className="text-amber-600 hover:underline">
                    My Account
                  </a>
                </li>
                <li>
                  <span className="text-slate-600">Return an item?</span>{" "}
                  <a href="/returns" className="text-amber-600 hover:underline">
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 border-2 border-gray-200">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="ABC Manufacturing Ltd."
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+1 800-555-0199"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request for Quote</option>
                  <option value="product">Product Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="order">Order Status</option>
                  <option value="return">Returns & Refunds</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Please describe your inquiry in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-slate-900 px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
              >
                Send Message
              </button>

              <p className="text-xs text-slate-500 text-center">
                We typically respond within 24 business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
