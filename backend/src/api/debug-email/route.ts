import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const logger = req.scope.resolve(ContainerRegistrationKeys.LOGGER)
  const diagnostics: Record<string, any> = {}

  // 1. Check env vars
  diagnostics.env = {
    RESEND_API_KEY: process.env.RESEND_API_KEY ? `SET (${process.env.RESEND_API_KEY.substring(0, 8)}...)` : "NOT SET",
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL || "NOT SET",
    RESEND_FROM: process.env.RESEND_FROM || "NOT SET",
  }

  // 2. Check notification providers in DB
  try {
    const pgConnection = req.scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)
    const providers = await pgConnection.raw(`SELECT * FROM notification_provider`)
    diagnostics.notification_providers = providers.rows || providers
  } catch (error: any) {
    diagnostics.notification_providers_error = error.message
  }

  // 3. Check recent notifications with status
  try {
    const pgConnection = req.scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)
    const notifications = await pgConnection.raw(
      `SELECT id, "to", channel, template, provider_id, status, created_at
       FROM notification WHERE template = 'order-placed' ORDER BY created_at DESC LIMIT 5`
    )
    diagnostics.recent_email_notifications = notifications.rows || notifications
  } catch (error: any) {
    diagnostics.recent_notifications_error = error.message
  }

  // 4. Direct Resend API test (bypasses template system entirely)
  try {
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: ["chetansinghbhadauria708@gmail.com"],
      subject: "Resend Test from MedusaJS",
      html: "<h1>Test Email</h1><p>If you see this, Resend is working correctly.</p>",
    })
    if (error) {
      diagnostics.direct_resend_test = { success: false, error }
    } else {
      diagnostics.direct_resend_test = { success: true, id: data?.id }
    }
  } catch (error: any) {
    diagnostics.direct_resend_test = {
      success: false,
      error: error.message,
      code: error.code,
      statusCode: error.statusCode,
    }
  }

  logger.info(`[debug-email] Diagnostics: ${JSON.stringify(diagnostics, null, 2)}`)
  res.json(diagnostics)
}
