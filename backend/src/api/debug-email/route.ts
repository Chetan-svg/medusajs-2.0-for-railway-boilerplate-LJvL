import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const logger = req.scope.resolve(ContainerRegistrationKeys.LOGGER)
  const diagnostics: Record<string, any> = {}

  // 1. Check env vars
  diagnostics.env = {
    RESEND_API_KEY: process.env.RESEND_API_KEY ? `SET (${process.env.RESEND_API_KEY.substring(0, 8)}...)` : "NOT SET",
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL || "NOT SET",
  }

  // 2. Check if react/react-dom are available at runtime
  diagnostics.runtime_deps = {}
  try {
    const React = await import("react")
    diagnostics.runtime_deps.react = `available (v${React.version})`
  } catch (e: any) {
    diagnostics.runtime_deps.react = `MISSING: ${e.message}`
  }
  try {
    await import("react-dom/server")
    diagnostics.runtime_deps.react_dom_server = "available"
  } catch (e: any) {
    diagnostics.runtime_deps.react_dom_server = `MISSING: ${e.message}`
  }
  try {
    await import("@react-email/render")
    diagnostics.runtime_deps.react_email_render = "available"
  } catch (e: any) {
    diagnostics.runtime_deps.react_email_render = `MISSING: ${e.message}`
  }
  try {
    await import("@react-email/components")
    diagnostics.runtime_deps.react_email_components = "available"
  } catch (e: any) {
    diagnostics.runtime_deps.react_email_components = `MISSING: ${e.message}`
  }

  // 3. Test template rendering with MOCK data (known good shape)
  try {
    const { generateEmailTemplate } = await import("../../modules/email-notifications/templates")
    const mockData = {
      order: {
        id: "test-order-id",
        display_id: "ORD-123",
        created_at: new Date().toISOString(),
        email: "test@example.com",
        currency_code: "USD",
        items: [
          { id: "item-1", title: "Item 1", product_title: "Product 1", quantity: 2, unit_price: 10 },
        ],
        summary: { raw_current_order_total: { value: 45 } },
      },
      shippingAddress: {
        first_name: "Test",
        last_name: "User",
        address_1: "123 Main St",
        city: "Anytown",
        province: "CA",
        postal_code: "12345",
        country_code: "US",
      },
      preview: "Test preview",
      emailOptions: { subject: "Test", replyTo: "test@example.com" },
    }
    const element = generateEmailTemplate("order-placed", mockData)
    diagnostics.template_mock_data = { success: true, elementType: typeof element }
  } catch (e: any) {
    diagnostics.template_mock_data = { success: false, error: e.message, stack: e.stack?.split("\n").slice(0, 5) }
  }

  // 4. Fetch a real order and test template rendering with REAL data
  try {
    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
    const { data: orders } = await query.graph({
      entity: "order",
      fields: [
        "id", "display_id", "email", "currency_code", "created_at",
        "total", "subtotal", "tax_total", "shipping_total",
        "items.*", "summary.*", "shipping_address.*",
      ],
      pagination: { take: 1, order: { created_at: "DESC" } },
    })
    const order = orders?.[0]
    if (order) {
      // Show the data shape that the template will receive
      diagnostics.real_order_data_shape = {
        has_order: !!order,
        has_email: !!order.email,
        has_display_id: !!order.display_id,
        has_items: Array.isArray(order.items),
        items_count: order.items?.length,
        has_summary: !!order.summary,
        summary_keys: order.summary ? Object.keys(order.summary) : "N/A",
        has_raw_current_order_total: !!order.summary?.raw_current_order_total,
        raw_total_type: typeof order.summary?.raw_current_order_total,
        raw_total_value: order.summary?.raw_current_order_total,
        has_shipping_address: !!order.shipping_address,
        shipping_address_type: typeof order.shipping_address,
        shipping_address_keys: order.shipping_address ? Object.keys(order.shipping_address) : "N/A",
      }

      // Now try rendering the template with real data
      try {
        const { generateEmailTemplate } = await import("../../modules/email-notifications/templates")
        const realData = {
          order,
          shippingAddress: order.shipping_address || {},
          preview: "Thank you for your order!",
          emailOptions: { subject: "Your order has been placed", replyTo: "test@example.com" },
        }
        const element = generateEmailTemplate("order-placed", realData)
        diagnostics.template_real_data = { success: true, elementType: typeof element }
      } catch (e: any) {
        diagnostics.template_real_data = { success: false, error: e.message, stack: e.stack?.split("\n").slice(0, 5) }
      }
    } else {
      diagnostics.real_order_data_shape = "no orders found"
    }
  } catch (e: any) {
    diagnostics.real_order_fetch_error = e.message
  }

  // 5. Test Resend with react prop (using mock template)
  try {
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { generateEmailTemplate } = await import("../../modules/email-notifications/templates")
    const mockData = {
      order: {
        id: "test", display_id: "ORD-TEST", created_at: new Date().toISOString(),
        email: "test@example.com", currency_code: "USD",
        items: [{ id: "i1", title: "Test", product_title: "Prod", quantity: 1, unit_price: 10 }],
        summary: { raw_current_order_total: { value: 10 } },
      },
      shippingAddress: { first_name: "Test", last_name: "User", address_1: "123 St", city: "NY", province: "NY", postal_code: "10001", country_code: "US" },
      preview: "Test", emailOptions: { subject: "Test" },
    }
    const element = generateEmailTemplate("order-placed", mockData)
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: ["chetansinghbhadauria708@gmail.com"],
      subject: "Template Test from MedusaJS",
      react: element,
    })
    if (error) {
      diagnostics.resend_react_test = { success: false, error }
    } else {
      diagnostics.resend_react_test = { success: true, id: data?.id }
    }
  } catch (e: any) {
    diagnostics.resend_react_test = { success: false, error: e.message, stack: e.stack?.split("\n").slice(0, 5) }
  }

  // 6. Direct Resend HTML test (known working baseline)
  try {
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: ["chetansinghbhadauria708@gmail.com"],
      subject: "HTML Test from MedusaJS",
      html: "<h1>Test</h1><p>Direct HTML test.</p>",
    })
    diagnostics.resend_html_test = error ? { success: false, error } : { success: true, id: data?.id }
  } catch (e: any) {
    diagnostics.resend_html_test = { success: false, error: e.message }
  }

  // 7. Check notification failure details from DB
  try {
    const pgConnection = req.scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)
    const notifications = await pgConnection.raw(
      `SELECT id, "to", channel, template, provider_id, status, data, created_at
       FROM notification WHERE template = 'order-placed' ORDER BY created_at DESC LIMIT 2`
    )
    diagnostics.recent_failed_notifications = (notifications.rows || notifications).map((n: any) => ({
      id: n.id,
      status: n.status,
      provider_id: n.provider_id,
      created_at: n.created_at,
    }))
  } catch (e: any) {
    diagnostics.recent_notifications_error = e.message
  }

  logger.info(`[debug-email] Diagnostics: ${JSON.stringify(diagnostics, null, 2)}`)
  res.json(diagnostics)
}
