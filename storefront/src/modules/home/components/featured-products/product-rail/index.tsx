import { HttpTypes } from "@medusajs/types"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12 sm:py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em]">
              Collection
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
            {collection.title}
          </h2>
        </div>
        <LocalizedClientLink
          href={`/collections/${collection.handle}`}
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-amber-600 transition-colors uppercase tracking-wider"
        >
          View All
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </LocalizedClientLink>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
        {products.map((product) => (
          <li key={product.id}>
            {/* @ts-ignore */}
            <ProductPreview product={product} region={region} isFeatured />
          </li>
        ))}
      </ul>
    </div>
  )
}
