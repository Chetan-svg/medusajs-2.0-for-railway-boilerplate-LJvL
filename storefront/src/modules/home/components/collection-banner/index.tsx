import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function CollectionBanner({
  collections,
}: {
  collections?: HttpTypes.StoreCollection[]
}) {
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

      <div className="content-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left - Collection Links */}
          <div className="py-12 lg:py-20 lg:pr-16 border-b lg:border-b-0 lg:border-r border-slate-700">
            {/* Corner accent */}
            <div className="absolute top-0 left-6 w-12 h-12 border-l-4 border-t-4 border-amber-500 hidden lg:block" />

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-amber-500" />
                <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
                  Collections
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[0.95] uppercase">
                Shop by
                <br />
                <span className="text-amber-500">Collection</span>
              </h2>
            </div>

            {/* Collection links */}
            <div className="space-y-4">
              {collections && collections.length > 0 ? (
                collections.slice(0, 6).map((collection) => (
                  <LocalizedClientLink
                    key={collection.id}
                    href={`/collections/${collection.handle}`}
                    className="group flex items-center gap-4 py-3 border-b border-slate-700 hover:border-amber-500 transition-all duration-300"
                  >
                    <span className="text-lg sm:text-xl font-bold text-slate-300 group-hover:text-white uppercase tracking-wide transition-colors">
                      {collection.title}
                    </span>
                    <svg
                      className="w-5 h-5 text-slate-600 group-hover:text-amber-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </LocalizedClientLink>
                ))
              ) : (
                <>
                  {["PLCs & Controllers", "Drives & Motors", "Sensors & Safety", "HMI & Displays", "Power Supplies"].map((name) => (
                    <LocalizedClientLink
                      key={name}
                      href="/store"
                      className="group flex items-center gap-4 py-3 border-b border-slate-700 hover:border-amber-500 transition-all duration-300"
                    >
                      <span className="text-lg sm:text-xl font-bold text-slate-300 group-hover:text-white uppercase tracking-wide transition-colors">
                        {name}
                      </span>
                      <svg
                        className="w-5 h-5 text-slate-600 group-hover:text-amber-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </LocalizedClientLink>
                  ))}
                </>
              )}
            </div>

            <div className="mt-10">
              <LocalizedClientLink
                href="/collections"
                className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-8 py-4 font-black text-sm uppercase tracking-wider hover:bg-amber-400 transition-all duration-300"
              >
                View All Collections
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </LocalizedClientLink>
            </div>
          </div>

          {/* Right - Visual / Promotional */}
          <div className="py-12 lg:py-20 lg:pl-16 flex flex-col justify-center">
            <div className="absolute bottom-0 right-6 w-12 h-12 border-r-4 border-b-4 border-slate-700 hidden lg:block" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-6 leading-tight uppercase">
                Powering Industry with{" "}
                <span className="text-amber-500">Quality Parts</span>
              </h3>

              <div className="w-12 h-1 bg-amber-500 mb-6" />

              <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-md font-light">
                Discover our extensive range of industrial automation components.
                From PLCs to sensors, we have everything you need to keep your
                operations running at peak efficiency.
              </p>

              {/* Feature bullets */}
              <div className="space-y-4">
                {[
                  "Same-day dispatch on in-stock items",
                  "Genuine OEM parts with full warranty",
                  "Technical support from automation experts",
                  "Competitive pricing with bulk discounts",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-500 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
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
