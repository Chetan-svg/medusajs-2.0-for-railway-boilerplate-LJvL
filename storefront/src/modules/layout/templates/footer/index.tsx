import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="bg-slate-900 text-white w-full">
      {/* Top Section - Value Props Banner */}
      <div className="border-b border-slate-700">
        <div className="content-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-white">Same-Day Dispatch</span>
              <span className="text-xs text-slate-400">On in-stock items</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold text-white">Genuine OEM Parts</span>
              <span className="text-xs text-slate-400">Full manufacturer warranty</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-semibold text-white">Expert Support</span>
              <span className="text-xs text-slate-400">Technical assistance</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-white">Bulk Discounts</span>
              <span className="text-xs text-slate-400">Volume pricing available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="content-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-black text-white hover:text-amber-500 uppercase tracking-wide transition-colors"
            >
              ShopEngenie
            </LocalizedClientLink>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted B2B marketplace for industrial automation parts.
              We supply genuine PLCs, drives, motors, sensors, and more to
              manufacturing facilities across the USA.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:chetan@shopengenie.com" className="text-slate-400 hover:text-amber-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          {product_categories && product_categories?.length > 0 && (
            <div className="flex flex-col gap-y-3">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Categories
              </span>
              <ul className="flex flex-col gap-2" data-testid="footer-categories">
                {product_categories?.slice(0, 6).map((c) => {
                  if (c.parent_category) {
                    return null
                  }
                  return (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-sm text-slate-400 hover:text-amber-500 transition-colors"
                        href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Collections */}
          {collections && collections.length > 0 && (
            <div className="flex flex-col gap-y-3">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Collections
              </span>
              <ul className="flex flex-col gap-2">
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="text-sm text-slate-400 hover:text-amber-500 transition-colors"
                      href={`/collections/${c.handle}`}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Company & Policies */}
          <div className="flex flex-col gap-y-3">
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Company
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <LocalizedClientLink href="/about" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  About Us
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/contact" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  Contact Us
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/faq" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  FAQ
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/returns" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  Return Policy
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/privacy" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  Privacy Policy
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/terms" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  Terms of Service
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="content-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Text className="text-sm text-slate-400">
              © {new Date().getFullYear()} ShopEngenie. All rights reserved.
            </Text>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>Trusted Industrial MRO Supplier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hazard stripe */}
      <div className="h-1 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            background:
              "repeating-linear-gradient(45deg, #f59e0b 0px, #f59e0b 10px, #1e293b 10px, #1e293b 20px)",
          }}
        />
      </div>
    </footer>
  )
}
