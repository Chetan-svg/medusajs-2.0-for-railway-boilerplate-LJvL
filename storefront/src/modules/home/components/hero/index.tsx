import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative w-full bg-slate-900 text-white overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="content-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] lg:min-h-[680px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
            {/* Corner accent */}
            <div className="absolute top-0 left-6 w-16 h-16 border-l-4 border-t-4 border-amber-500 hidden lg:block" />

            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-amber-500" />
              <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em]">
                Industrial Automation
              </span>
            </div>

            {/* Heading - Brutalist */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black tracking-tight leading-[0.95] mb-8">
              <span className="block">FIND PARTS</span>
              <span className="block">THAT POWER</span>
              <span className="block text-amber-500">YOUR BUSINESS</span>
            </h1>

            {/* Divider */}
            <div className="w-16 h-1 bg-amber-500 mb-8" />

            {/* Subtitle */}
            <p className="text-base text-slate-400 mb-10 max-w-md leading-relaxed font-light">
              Browse our diverse range of meticulously sourced industrial
              components. From PLCs to sensors, designed to power your
              operations at peak efficiency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all duration-300"
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
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center justify-center text-white px-8 py-4 font-medium text-sm border border-slate-600 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 uppercase tracking-wider"
              >
                Explore Catalog
              </LocalizedClientLink>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 sm:gap-16 border-t border-slate-700 pt-8">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  200<span className="text-amber-500">+</span>
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                  International Brands
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  2,000<span className="text-amber-500">+</span>
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                  Quality Products
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  30K<span className="text-amber-500">+</span>
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="relative hidden lg:flex items-stretch">
            {/* Geometric accent pattern */}
            <div className="absolute top-8 right-8 w-10 h-10 border-r-2 border-t-2 border-amber-500 z-10" />
            <div className="absolute bottom-8 left-0 w-10 h-10 border-l-2 border-b-2 border-amber-500 z-10" />

            <div className="relative w-full border-l border-slate-700 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center p-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-amber-500/20 rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-2 border-amber-500/30 rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/10 rotate-45" />

                <div className="relative text-center z-10">
                  <div className="text-8xl font-black text-amber-500/20 leading-none">
                    SEG
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-[0.3em] mt-4">
                    ShopEnGenie
                  </div>
                </div>

                <div className="absolute top-20 right-12 bg-slate-800/90 backdrop-blur-sm border border-slate-700 px-4 py-3">
                  <div className="text-lg font-black text-white">
                    99.9<span className="text-amber-500">%</span>
                  </div>
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                    Uptime Guarantee
                  </div>
                </div>

                <div className="absolute bottom-24 left-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 px-4 py-3">
                  <div className="text-lg font-black text-white">
                    24<span className="text-amber-500">/7</span>
                  </div>
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                    Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hazard stripe */}
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

export default Hero
