import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="bg-slate-900 text-white w-full">
      {/* Main Footer Content */}
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-black text-white hover:text-amber-500 transition-colors uppercase tracking-tight"
            >
              ShopEngenie
            </LocalizedClientLink>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
              India&apos;s trusted B2B marketplace for industrial automation parts.
              Quality components from leading brands, backed by technical expertise
              and reliable support.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          {product_categories && product_categories?.length > 0 && (
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                Categories
              </span>
              <ul className="mt-4 space-y-3">
                {product_categories?.slice(0, 6).map((c) => {
                  if (c.parent_category) return null
                  return (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                        href={`/categories/${c.handle}`}
                      >
                        {c.name}
                      </LocalizedClientLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Customer Service */}
          <div>
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
              Customer Service
            </span>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <LocalizedClientLink href="/store" className="hover:text-white transition-colors">
                  Browse Products
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/account" className="hover:text-white transition-colors">
                  My Account
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/cart" className="hover:text-white transition-colors">
                  Shopping Cart
                </LocalizedClientLink>
              </li>
              <li>
                <span className="cursor-default">Track Order</span>
              </li>
              <li>
                <span className="cursor-default">Request Quote</span>
              </li>
            </ul>
          </div>

          {/* Policies & Info */}
          <div>
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
              Policies & Info
            </span>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <span className="cursor-default hover:text-white transition-colors">About Us</span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">Return Policy</span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">Warranty Info</span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">Shipping & Delivery</span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">Privacy Policy</span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-800 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-black text-white">30-Day</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Easy Returns</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Genuine Parts</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Technical Support</div>
            </div>
            <div>
              <div className="text-2xl font-black text-white">Fast</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Same-Day Dispatch</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Text className="text-xs text-slate-500">
              © {new Date().getFullYear()} ShopEngenie. All rights reserved.
              Industrial Automation Parts & Components.
            </Text>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <span>Secure Payments</span>
              <span>•</span>
              <span>GST Invoicing</span>
              <span>•</span>
              <span>Bulk Discounts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
