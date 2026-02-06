import { Metadata } from "next"
import { Suspense } from "react"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import BrandMarquee from "@modules/home/components/brand-marquee"
import CollectionBanner from "@modules/home/components/collection-banner"
import CategoryGrid from "@modules/home/components/category-grid"
import Testimonials from "@modules/home/components/testimonials"
import TrustBadges from "@modules/home/components/trust-badges"
import CTABanner from "@modules/home/components/cta-banner"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getCollectionsList } from "@lib/data/collections"
import { listCategories } from "@lib/data/categories"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "ShopEnGenie - Industrial Parts & Automation Components",
  description:
    "Your trusted B2B marketplace for industrial automation parts, PLCs, drives, motors, and sensors. Quality products, competitive prices, fast shipping across the USA.",
}

function FeaturedProductsSkeleton() {
  return (
    <div className="w-full py-12 sm:py-16 animate-pulse">
      <div className="content-container">
        <div className="h-3 bg-gray-200 rounded w-20 mb-3" />
        <div className="h-8 bg-gray-200 rounded w-48 mb-10" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100" />
          ))}
        </div>
      </div>
    </div>
  )
}

function CategoryGridSkeleton() {
  return (
    <div className="w-full py-16 sm:py-20 bg-white animate-pulse">
      <div className="content-container">
        <div className="h-3 bg-gray-200 rounded w-28 mb-3" />
        <div className="h-8 bg-gray-200 rounded w-56 mb-12" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-100 border border-gray-200" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function Home({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await params

  // Parallelize all data fetching
  const [region, collections, { collections: allCollections }, categories] =
    await Promise.all([
      getRegion(countryCode),
      getCollectionsWithProducts(countryCode),
      getCollectionsList(0, 100),
      listCategories().catch(() => []),
    ])

  if (!region) {
    return null
  }

  return (
    <>
      {/* Hero Section - Dark industrial brutalist */}
      <Hero />

      {/* Brand Marquee - Infinite scroll of trusted brands */}
      <BrandMarquee />

      {/* Category Grid - Browse by product category */}
      {categories && categories.length > 0 && (
        <Suspense fallback={<CategoryGridSkeleton />}>
          <CategoryGrid categories={categories} />
        </Suspense>
      )}

      {/* Collection Banner - Shop by collection with feature bullets */}
      <CollectionBanner collections={allCollections} />

      {/* Featured Products by Collection - streamed in */}
      {collections && collections.length > 0 && (
        <div className="bg-white">
          <ul className="flex flex-col divide-y divide-gray-100">
            <Suspense fallback={<FeaturedProductsSkeleton />}>
              <FeaturedProducts collections={collections} region={region} />
            </Suspense>
          </ul>
        </div>
      )}

      {/* Trust Badges - Why Choose Us */}
      <TrustBadges />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* B2B CTA Banner */}
      <CTABanner />
    </>
  )
}
