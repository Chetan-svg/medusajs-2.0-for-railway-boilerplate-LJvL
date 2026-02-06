import LocalizedClientLink from "@modules/common/components/localized-client-link"

const TrustBadges = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em]">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mb-4">
            The ShopEnGenie <span className="text-amber-500">Advantage</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Built for B2B buyers who demand reliability, quality, and efficiency
            in their industrial parts procurement.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {[
            {
              title: "100% Genuine",
              subtitle: "OEM Parts",
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
              title: "Same Day",
              subtitle: "Dispatch",
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
              title: "Pan-India",
              subtitle: "Delivery",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ),
            },
            {
              title: "Net-30",
              subtitle: "Credit Terms",
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
              title: "Full Warranty",
              subtitle: "Manufacturer Backed",
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
              title: "Expert",
              subtitle: "Tech Support",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ),
            },
          ].map((badge) => (
            <div
              key={badge.title}
              className="text-center p-4 group hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-slate-100 group-hover:bg-amber-500 transition-colors">
                <svg
                  className="w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {badge.icon}
                </svg>
              </div>
              <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                {badge.title}
              </div>
              <div className="text-xs text-slate-500">{badge.subtitle}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <LocalizedClientLink
            href="/about"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold uppercase text-sm tracking-wider"
          >
            Learn More About Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
