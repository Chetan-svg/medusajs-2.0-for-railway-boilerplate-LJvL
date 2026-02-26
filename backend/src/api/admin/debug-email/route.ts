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

  // 2. Check if notification module is loaded
  try {
    const notificationService = req.scope.resolve(Modules.NOTIFICATION)
    diagnostics.notification_module = {
      loaded: true,
      type: typeof notificationService,
      methods: Object.getOwnPropertyNames(Object.getPrototypeOf(notificationService)).filter(m => m !== 'constructor'),
    }
  } catch (error: any) {
    diagnostics.notification_module = {
      loaded: false,
      error: error.message,
    }
  }

  // 3. Try to list notification providers
  try {
    const pgConnection = req.scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)
    const providers = await pgConnection.raw(
      `SELECT * FROM notification_provider`
    )
    diagnostics.notification_providers = providers.rows || providers
  } catch (error: any) {
    diagnostics.notification_providers_error = error.message
  }

  // 4. Check recent notifications
  try {
    const pgConnection = req.scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)
    const notifications = await pgConnection.raw(
      `SELECT id, to_address, channel, template, provider_id, created_at
       FROM notification ORDER BY created_at DESC LIMIT 5`
    )
    diagnostics.recent_notifications = notifications.rows || notifications
  } catch (error: any) {
    diagnostics.recent_notifications_error = error.message
  }

  // 5. Check recent orders
  try {
    const pgConnection = req.scope.resolve(ContainerRegistrationKeys.PG_CONNECTION)
    const orders = await pgConnection.raw(
      `SELECT id, display_id, email, created_at
       FROM "order" ORDER BY created_at DESC LIMIT 3`
    )
    diagnostics.recent_orders = orders.rows || orders
  } catch (error: any) {
    diagnostics.recent_orders_error = error.message
  }

  logger.info(`[debug-email] Diagnostics: ${JSON.stringify(diagnostics, null, 2)}`)

  res.json(diagnostics)
}
