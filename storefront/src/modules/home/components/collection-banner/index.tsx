import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function CollectionBanner({
  collections,
}: {
  collections?: HttpTypes.StoreCollection[]
}) {
  // Filter to only show collections that have valid handles
  const validCollections = collections?.filter(c => c.handle && c.title) || []

  return (
    <section className="w-full bg-slate-900 text-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left - Collection Links */}
          <div className="py-16 lg:py-24 lg:pr-16 border-b lg:border-b-0 lg:border-r border-slate-800">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                Shop by Collection
              </h2>
            </div>

            {/* Collection links */}
            <div className="space-y-3">
              {validCollections.length > 0 ? (
                validCollections.slice(0, 6).map((collection) => (
                  <LocalizedClientLink
                    key={collection.id}
                    href={`/collections/${collection.handle}`}
                    className="group flex items-center gap-4 py-3 border-b border-slate-800 hover:border-slate-600 transition-colors duration-300"
                  >
                    <span className="text-lg font-medium text-slate-400 group-hover:text-white transition-colors">
                      {collection.title}
                    </span>
                    <svg
                      className="w-4 h-4 text-slate-600 group-hover:text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </LocalizedClientLink>
                ))
              ) : (
                // Fallback when no collections - all link to store page
                <>
                  {["PLCs & Controllers", "Drives & Motors", "Sensors & Safety", "HMI & Displays", "Power Supplies"].map((name) => (
                    <LocalizedClientLink
                      key={name}
                      href="/store"
                      className="group flex items-center gap-4 py-3 border-b border-slate-800 hover:border-slate-600 transition-colors duration-300"
                    >
                      <span className="text-lg font-medium text-slate-400 group-hover:text-white transition-colors">
                        {name}
                      </span>
                      <svg
                        className="w-4 h-4 text-slate-600 group-hover:text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
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
                href="/store"
                className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-6 py-3 font-semibold text-sm hover:bg-amber-400 transition-colors duration-300"
              >
                Browse All Products
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </LocalizedClientLink>
            </div>
          </div>

          {/* Right - Value Props */}
          <div className="py-16 lg:py-24 lg:pl-16 flex flex-col justify-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Powering Industry with Quality Parts
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                Discover our extensive range of industrial automation components.
                From PLCs to sensors, we have everything you need to keep your
                operations running at peak efficiency.
              </p>

              {/* Feature bullets */}
              <div className="space-y-3">
                {[
                  "Same-day dispatch on in-stock items",
                  "Genuine OEM parts with full warranty",
                  "Technical support from automation experts",
                  "Competitive pricing with bulk discounts",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
