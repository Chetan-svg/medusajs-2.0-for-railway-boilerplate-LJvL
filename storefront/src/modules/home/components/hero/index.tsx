import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative w-full bg-slate-900 text-white overflow-hidden">
      <div className="content-container relative">
        <div className="min-h-[560px] lg:min-h-[600px] flex flex-col justify-center py-20 lg:py-24 max-w-2xl">
          {/* Corner accent - Hero only */}
          <div className="absolute top-0 left-6 w-12 h-12 border-l-2 border-t-2 border-amber-500 hidden lg:block" />

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Find Parts That Power Your Business
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            Industrial automation components from leading brands.
            PLCs, drives, sensors, and more—sourced directly from
            authorized distributors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-6 py-3 font-semibold text-sm hover:bg-amber-400 transition-colors duration-300"
            >
              Shop Now
              <svg
                className="w-4 h-4 ml-2"
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
            <LocalizedClientLink
              href="/store"
              className="inline-flex items-center justify-center text-white px-6 py-3 font-medium text-sm border border-slate-600 hover:border-white transition-colors duration-300"
            >
              Explore Catalog
            </LocalizedClientLink>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 sm:gap-14 border-t border-slate-800 pt-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                200+
              </div>
              <div className="text-sm text-slate-500 mt-1">
                International Brands
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                2,000+
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Quality Products
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                30K+
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
