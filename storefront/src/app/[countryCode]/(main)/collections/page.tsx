import { Metadata } from "next"
import { listCollections } from "@lib/data/collections"
import { listRegions } from "@lib/data/regions"
import { StoreRegion, HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Collections | ShopEnGenie",
  description:
    "Browse our curated collections of industrial automation products - PLCs, drives, servo motors, HMIs, sensors, and more.",
}

// Use ISR (Incremental Static Regeneration) - revalidate every 5 minutes
export const revalidate = 300

// Pre-generate pages for all country codes at build time
export async function generateStaticParams() {
  try {
    const regions = await listRegions()

    if (!regions) {
      return []
    }

    const countryCodes = regions
      .map((r: StoreRegion) => r.countries?.map((c) => c.iso_2))
      .flat()
      .filter((code): code is string => Boolean(code))
      .map((countryCode: string) => ({
        countryCode,
      }))

    return countryCodes || []
  } catch (error) {
    console.warn("Failed to generate collections static params:", error)
    return []
  }
}

type Props = {
  params: Promise<{ countryCode: string }>
}

// Helper function to count products in a collection
function getCollectionProductCount(
  collection: HttpTypes.StoreCollection
): number {
  return collection.products?.length || 0
}

export default async function CollectionsPage(props: Props) {
  const params = await props.params

  try {
    // Fetch all collections
    const { collections } = await listCollections()

    if (!collections || collections.length === 0) {
      return (
        <div className="content-container py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Collections
            </h1>
            <p className="text-gray-500">
              No collections available at this time.
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-white min-h-screen">
        {/* Header Section with industrial styling */}
        <div className="bg-slate-900 text-white py-12 sm:py-16">
          <div className="content-container">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-amber-500" />
              <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
                Shop by Collection
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 uppercase">
              Browse Collections
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
              Discover our curated collections of industrial automation
              products, organized to help you find exactly what you need.
            </p>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="content-container py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {collections.map((collection: HttpTypes.StoreCollection) => {
              const productCount = getCollectionProductCount(collection)
              const collectionTitle = collection.title
              const collectionDescription =
                collection.metadata?.description &&
                typeof collection.metadata.description === "string"
                  ? collection.metadata.description
                  : null

              return (
                <LocalizedClientLink
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  className="group"
                  aria-label={`View ${collectionTitle} products`}
                >
                  <div className="border-2 border-gray-200 p-6 hover:border-amber-500 hover:shadow-lg transition-all duration-300 h-full flex flex-col bg-white relative">
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-slate-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Collection Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors uppercase tracking-wide">
                      {collectionTitle}
                    </h3>

                    {/* Collection Metadata Description */}
                    {collectionDescription && (
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow">
                        {collectionDescription}
                      </p>
                    )}

                    {/* Product Count */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>
                          {productCount}{" "}
                          {productCount === 1 ? "product" : "products"}
                        </span>
                        <svg
                          className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </LocalizedClientLink>
              )
            })}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error rendering collections page:", error)

    return (
      <div className="content-container py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Collections</h1>
          <p className="text-red-600 mb-4">
            Unable to load collections at this time.
          </p>
          <p className="text-gray-500">Please try again later.</p>
        </div>
      </div>
    )
  }
}
