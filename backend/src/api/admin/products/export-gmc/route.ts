import type { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

const GMC_HEADERS = [
  "id",
  "title",
  "description",
  "availability",
  "availability date",
  "expiration date",
  "link",
  "mobile link",
  "image link",
  "price",
  "sale price",
  "sale price effective date",
  "identifier exists",
  "gtin",
  "mpn",
  "brand",
  "product highlight",
  "product detail",
  "additional image link",
  "condition",
  "adult",
  "color",
  "size",
  "size type",
  "size system",
  "gender",
  "material",
  "pattern",
  "age group",
  "multipack",
  "is bundle",
  "unit pricing measure",
  "unit pricing base measure",
  "energy efficiency class",
  "min energy efficiency class",
  "max energy efficiency class",
  "item group id",
  "sell on google quantity",
]

function escapeCsvField(value: string | null | undefined): string {
  if (value == null || value === "") return ""
  const str = String(value)
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`
  }
  return str
}

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  try {
    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
    const pgConnection = req.scope.resolve(
      ContainerRegistrationKeys.PG_CONNECTION
    )

    // Fetch all published products with variants
    const { data: products } = await query.graph({
      entity: "product",
      fields: [
        "id",
        "title",
        "subtitle",
        "handle",
        "description",
        "thumbnail",
        "status",
        "images.*",
        "variants.id",
        "variants.sku",
      ],
      filters: {
        status: "published",
      },
    })

    // Build a map of variant_id -> USD price amount using direct SQL
    // This is more reliable than traversing the link tables via query.graph
    const priceResult = await pgConnection.raw(`
      SELECT
        pvps.variant_id,
        p.amount,
        p.currency_code
      FROM product_variant_price_set pvps
      JOIN price p ON p.price_set_id = pvps.price_set_id
      WHERE p.currency_code = 'usd'
    `)

    const variantPriceMap = new Map<string, number>()
    for (const row of priceResult.rows || []) {
      if (!variantPriceMap.has(row.variant_id)) {
        variantPriceMap.set(row.variant_id, Number(row.amount))
      }
    }

    const rows: string[] = []

    // Header row
    rows.push(GMC_HEADERS.join(","))

    for (const product of products) {
      // Get price from first variant
      let priceStr = ""
      if (product.variants?.length > 0) {
        const variantId = product.variants[0].id
        const amount = variantPriceMap.get(variantId)
        if (amount != null) {
          priceStr = `${amount.toFixed(2)} USD`
        }
      }

      // Build additional image links (exclude thumbnail)
      const additionalImages = (product.images || [])
        .map((img: any) => img.url)
        .filter((url: string) => url && url !== product.thumbnail)
        .join(",")

      const row: Record<string, string> = {
        id: product.id || "",
        title: product.title ? `${product.title} - New` : "",
        description: (product.description || "").replace(/<[^>]*>/g, ""),
        availability: "in_stock",
        "availability date": "",
        "expiration date": "",
        link: product.handle
          ? `https://shopengenie.com/us/products/${product.handle}`
          : "",
        "mobile link": "",
        "image link": product.thumbnail || "",
        price: priceStr,
        "sale price": "",
        "sale price effective date": "",
        "identifier exists": "no",
        gtin: "",
        mpn: product.handle || "",
        brand: product.subtitle || "",
        "product highlight": "",
        "product detail": "",
        "additional image link": additionalImages,
        condition: "new",
        adult: "",
        color: "",
        size: "",
        "size type": "",
        "size system": "",
        gender: "",
        material: "",
        pattern: "",
        "age group": "",
        multipack: "",
        "is bundle": "",
        "unit pricing measure": "",
        "unit pricing base measure": "",
        "energy efficiency class": "",
        "min energy efficiency class": "",
        "max energy efficiency class": "",
        "item group id": "",
        "sell on google quantity": "",
      }

      const csvRow = GMC_HEADERS.map((header) =>
        escapeCsvField(row[header])
      ).join(",")
      rows.push(csvRow)
    }

    const csvContent = rows.join("\n")

    res.setHeader("Content-Type", "text/csv; charset=utf-8")
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="google-merchant-center-export.csv"'
    )
    res.send(csvContent)
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to export products for Google Merchant Center",
      error: error.message,
    })
  }
}
