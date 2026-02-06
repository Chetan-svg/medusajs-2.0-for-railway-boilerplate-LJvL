import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const CategoryIcon = ({ name }: { name: string }) => {
  const initial = name.charAt(0).toUpperCase()
  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-100 group-hover:bg-slate-900 flex items-center justify-center transition-colors duration-300">
      <span className="text-xl sm:text-2xl font-bold text-slate-300 group-hover:text-white transition-colors duration-300">
        {initial}
      </span>
    </div>
  )
}

export default function CategoryGrid({
  categories,
}: {
  categories: HttpTypes.StoreProductCategory[]
}) {
  const topCategories = categories
    .filter((cat) => !cat.parent_category_id)
    .slice(0, 8)

  if (topCategories.length === 0) return null

  return (
    <section className="w-full py-20 sm:py-24 bg-white">
      <div className="content-container">
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Shop by Category
          </h2>
          <LocalizedClientLink
            href="/store"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </LocalizedClientLink>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {topCategories.map((category) => (
            <LocalizedClientLink
              key={category.id}
              href={`/categories/${category.handle}`}
              className="group border border-gray-200 hover:border-slate-300 p-6 transition-all duration-300"
            >
              <CategoryIcon name={category.name} />

              <h3 className="mt-4 text-sm sm:text-base font-semibold text-slate-900">
                {category.name}
              </h3>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                Explore
                <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </LocalizedClientLink>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 text-center sm:hidden">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600"
          >
            View All Categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}
