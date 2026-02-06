import LocalizedClientLink from "@modules/common/components/localized-client-link"

const CTABanner = () => {
  return (
    <section className="w-full bg-slate-900 text-white relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="content-container relative py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-amber-500" />
              <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
                For B2B Buyers
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[0.95] uppercase mb-6">
              Ready to Streamline
              <br />
              Your <span className="text-amber-500">Procurement</span>?
            </h2>

            <div className="w-12 h-1 bg-amber-500 mb-6" />

            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
              Join thousands of manufacturing facilities across the USA who trust
              ShopEnGenie for their industrial automation needs. Get volume
              discounts, credit terms, and dedicated support.
            </p>

            <div className="flex flex-wrap gap-4">
              <LocalizedClientLink
                href="/request-quote"
                className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all duration-300"
              >
                Request a Quote
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/credit-application"
                className="inline-flex items-center justify-center border-2 border-slate-600 text-white px-8 py-4 font-medium text-sm uppercase tracking-wider hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                Apply for Credit
              </LocalizedClientLink>
            </div>
          </div>

          {/* Right - Features List */}
          <div className="bg-slate-800/50 border border-slate-700 p-8">
            <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-6">
              B2B Account Benefits
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Volume Discounts",
                  description: "Save 5-20% on bulk orders",
                },
                {
                  title: "Net-30 Credit Terms",
                  description: "Flexible payment for qualified buyers",
                },
                {
                  title: "Dedicated Account Manager",
                  description: "Single point of contact for all orders",
                },
                {
                  title: "Priority Shipping",
                  description: "Same-day dispatch on in-stock items",
                },
                {
                  title: "Technical Support",
                  description: "Access to automation engineers",
                },
                {
                  title: "Custom Sourcing",
                  description: "We find hard-to-get parts for you",
                },
              ].map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-3">
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
                  <div>
                    <div className="text-sm font-bold text-white">
                      {benefit.title}
                    </div>
                    <div className="text-xs text-slate-400">
                      {benefit.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            background:
              "repeating-linear-gradient(45deg, #f59e0b 0px, #f59e0b 10px, #1e293b 10px, #1e293b 20px)",
          }}
        />
      </div>
    </section>
  )
}

export default CTABanner
