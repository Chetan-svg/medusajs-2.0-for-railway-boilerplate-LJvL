import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Technical Support | ShopEnGenie",
  description:
    "Get technical assistance for industrial automation products. Product compatibility, installation guidance, and troubleshooting support.",
}

export default function TechnicalSupportPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="content-container">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
              Expert Assistance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 uppercase">
            Technical <span className="text-amber-500">Support</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Our team of automation engineers is here to help with product
            selection, compatibility questions, and technical guidance.
          </p>
        </div>
      </div>

      <div className="content-container py-16 sm:py-20">
        {/* Support Options */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
            How We Can Help
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Product Selection",
                description:
                  "Not sure which product fits your application? Our engineers help you choose the right components for your system.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                ),
              },
              {
                title: "Compatibility Verification",
                description:
                  "Verify that new components will work with your existing equipment. Avoid costly mistakes before you buy.",
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
                title: "Installation Guidance",
                description:
                  "General installation guidance and best practices. We point you to the right resources and documentation.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                ),
              },
              {
                title: "Troubleshooting",
                description:
                  "Having issues with a product? Our team helps diagnose problems and identify solutions or replacements.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Documentation Access",
                description:
                  "Need datasheets, manuals, or programming guides? We help you find official manufacturer documentation.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                ),
              },
              {
                title: "Warranty Support",
                description:
                  "Facilitate warranty claims with manufacturers. We help you navigate the RMA process efficiently.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border-2 border-gray-200 p-6 hover:border-amber-500 transition-colors"
              >
                <svg
                  className="w-10 h-10 text-amber-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
                <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Options */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
            Get Technical Support
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 text-white p-8">
              <svg
                className="w-10 h-10 text-amber-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="font-bold uppercase tracking-wide mb-2">Email</h3>
              <p className="text-slate-400 text-sm mb-4">
                Send detailed questions with model numbers and specifications.
              </p>
              <a
                href="mailto:support@shopengenie.com"
                className="text-amber-500 hover:text-amber-400 font-medium"
              >
                support@shopengenie.com
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Response within 24 hours
              </p>
            </div>

            <div className="bg-slate-100 p-8">
              <svg
                className="w-10 h-10 text-slate-700 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                Phone
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Speak directly with our technical team.
              </p>
              <a
                href="tel:+919876543210"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                +91 98765 43210
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Mon-Sat, 9 AM - 6 PM IST
              </p>
            </div>

            <div className="bg-slate-100 p-8">
              <svg
                className="w-10 h-10 text-slate-700 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <h3 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                WhatsApp
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Quick questions and photo sharing.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                +91 98765 43210
              </a>
              <p className="text-xs text-slate-500 mt-2">Available 24/7</p>
            </div>
          </div>
        </section>

        {/* Support Request Form */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
            Submit a Support Request
          </h2>

          <div className="max-w-3xl">
            <form className="space-y-6">
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Support Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select type</option>
                    <option value="product-selection">Product Selection</option>
                    <option value="compatibility">Compatibility Question</option>
                    <option value="installation">Installation Guidance</option>
                    <option value="troubleshooting">Troubleshooting</option>
                    <option value="documentation">Documentation Request</option>
                    <option value="warranty">Warranty Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Product/Part Numbers (if applicable)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="e.g., 6ES7214-1HG40-0XB0, 1746-OB16"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Describe Your Question/Issue *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Please provide as much detail as possible: existing equipment model numbers, application details, error messages, etc."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Attach Files (optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 p-4 text-center hover:border-amber-500 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-slate-600 text-sm"
                  >
                    Drop files here or{" "}
                    <span className="text-amber-600 font-medium">browse</span>
                    <br />
                    <span className="text-xs text-slate-400">
                      Images, PDFs, or documents (max 10MB each)
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="bg-amber-500 text-slate-900 px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
              >
                Submit Support Request
              </button>
            </form>
          </div>
        </section>

        {/* Important Note */}
        <section className="bg-slate-100 p-8 border-l-4 border-amber-500">
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Important Note
          </h2>
          <div className="text-slate-600 space-y-3 text-sm">
            <p>
              <strong>What we provide:</strong> General technical guidance,
              product selection assistance, compatibility verification, and
              troubleshooting suggestions. We help you find the right resources
              and connect with manufacturer support when needed.
            </p>
            <p>
              <strong>What we don&apos;t provide:</strong> On-site installation,
              programming services, or detailed engineering services. For
              complex integration needs, we can recommend qualified system
              integrators in your area.
            </p>
          </div>
          <div className="mt-6">
            <LocalizedClientLink
              href="/contact"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Need engineering services? Contact us for integrator referrals
              &rarr;
            </LocalizedClientLink>
          </div>
        </section>
      </div>
    </div>
  )
}
