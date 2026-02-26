import { Modules, ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { INotificationModuleService } from '@medusajs/framework/types'
import { SubscriberArgs, SubscriberConfig } from '@medusajs/medusa'
import { EmailTemplates } from '../modules/email-notifications/templates'

export default async function orderPlacedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  logger.info(`[order-placed] Received order.placed event for order ${data.id}`)

  const notificationModuleService: INotificationModuleService = container.resolve(Modules.NOTIFICATION)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  // Use Query graph to fetch order with all needed relations
  const { data: [order] } = await query.graph({
    entity: 'order',
    fields: [
      'id',
      'display_id',
      'email',
      'currency_code',
      'created_at',
      'total',
      'subtotal',
      'tax_total',
      'shipping_total',
      'items.*',
      'summary.*',
      'shipping_address.*',
    ],
    filters: { id: data.id },
  })

  if (!order) {
    logger.error(`[order-placed] Order ${data.id} not found`)
    return
  }

  if (!order.email) {
    logger.warn(`[order-placed] Order ${data.id} has no email, skipping notification`)
    return
  }

  logger.info(`[order-placed] Sending confirmation email to ${order.email}`)

  try {
    await notificationModuleService.createNotifications({
      to: order.email,
      channel: 'email',
      template: EmailTemplates.ORDER_PLACED,
      data: {
        emailOptions: {
          replyTo: process.env.RESEND_FROM_EMAIL || process.env.RESEND_FROM || 'noreply@example.com',
          subject: 'Your order has been placed'
        },
        order,
        shippingAddress: order.shipping_address || {},
        preview: 'Thank you for your order!'
      }
    })
    logger.info(`[order-placed] Email sent successfully to ${order.email}`)
  } catch (error) {
    logger.error(`[order-placed] Error sending notification: ${error}`)
  }
}

export const config: SubscriberConfig = {
  event: 'order.placed'
}
