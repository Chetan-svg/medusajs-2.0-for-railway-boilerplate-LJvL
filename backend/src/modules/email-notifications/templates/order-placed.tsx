import { Text, Section, Hr } from '@react-email/components'
import * as React from 'react'
import { Base } from './base'

export const ORDER_PLACED = 'order-placed'

export interface OrderPlacedTemplateProps {
  order: {
    display_id: string
    email: string
    currency_code: string
    created_at: string
    items: Array<{ id: string; title: string; product_title: string; quantity: number; unit_price: number }>
    summary?: { raw_current_order_total?: { value: string | number } }
  }
  shippingAddress?: {
    first_name?: string
    last_name?: string
    address_1?: string
    city?: string
    province?: string
    postal_code?: string
    country_code?: string
  }
  preview?: string
}

export const isOrderPlacedTemplateData = (data: any): data is OrderPlacedTemplateProps =>
  typeof data.order === 'object'

// MedusaJS 2.0 returns BigNumber objects like { value: "4320", precision: 20 }
// or BigNumber class instances. Values are in BASE currency (dollars, not cents).
function toNumber(val: any): number {
  if (val == null) return 0
  if (typeof val === 'number') return val
  if (typeof val === 'string') return parseFloat(val) || 0
  if (typeof val === 'object') {
    if (val.value != null) return toNumber(val.value)
    if (typeof val.toNumber === 'function') return val.toNumber()
    if (typeof val.toString === 'function') {
      const str = val.toString()
      if (str !== '[object Object]') return parseFloat(str) || 0
    }
  }
  return 0
}

function formatMoney(amount: any, currencyCode: string): string {
  const num = toNumber(amount)
  const currency = (currencyCode || 'USD').toUpperCase()
  return `${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`
}

function formatTotal(order: OrderPlacedTemplateProps['order']): string {
  const rawValue = order.summary?.raw_current_order_total?.value
  if (rawValue == null) return 'N/A'
  return formatMoney(rawValue, order.currency_code)
}

export const OrderPlacedTemplate: React.FC<OrderPlacedTemplateProps> = ({
  order,
  shippingAddress,
  preview = 'Your order has been placed!',
}) => {
  const hasAddress = shippingAddress && (shippingAddress.first_name || shippingAddress.address_1)

  return (
    <Base preview={preview}>
      <Section>
        <Text style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', margin: '0 0 30px' }}>
          Order Confirmation
        </Text>

        <Text style={{ margin: '0 0 15px' }}>
          {hasAddress
            ? `Dear ${shippingAddress!.first_name || ''} ${shippingAddress!.last_name || ''},`
            : 'Dear Customer,'}
        </Text>

        <Text style={{ margin: '0 0 30px' }}>
          Thank you for your recent order! Here are your order details:
        </Text>

        <Text style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px' }}>
          Order Summary
        </Text>
        <Text style={{ margin: '0 0 5px' }}>
          Order ID: #{order.display_id}
        </Text>
        <Text style={{ margin: '0 0 5px' }}>
          Order Date: {new Date(order.created_at).toLocaleDateString()}
        </Text>
        <Text style={{ margin: '0 0 20px' }}>
          Total: {formatTotal(order)}
        </Text>

        {hasAddress && (
          <>
            <Hr style={{ margin: '20px 0' }} />
            <Text style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 10px' }}>
              Shipping Address
            </Text>
            <Text style={{ margin: '0 0 5px' }}>
              {shippingAddress!.address_1}
            </Text>
            <Text style={{ margin: '0 0 5px' }}>
              {[shippingAddress!.city, shippingAddress!.province, shippingAddress!.postal_code].filter(Boolean).join(', ')}
            </Text>
            <Text style={{ margin: '0 0 20px' }}>
              {(shippingAddress!.country_code || '').toUpperCase()}
            </Text>
          </>
        )}

        <Hr style={{ margin: '20px 0' }} />

        <Text style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 15px' }}>
          Order Items
        </Text>

        {(order.items || []).map((item: any) => {
          // MedusaJS 2.0: items may have a 'detail' sub-object with line item data
          const detail = item.detail || item
          const qty = toNumber(item.quantity || detail.quantity)
          const price = toNumber(item.unit_price || detail.unit_price || item.raw_unit_price || detail.raw_unit_price)
          const title = detail.product_title || detail.title || item.product_title || item.title || 'Item'
          const variant = detail.variant_title || detail.title || item.variant_title || item.title || ''

          return (
            <div key={item.id} style={{
              padding: '8px 0',
              borderBottom: '1px solid #eaeaea',
            }}>
              <Text style={{ margin: '0 0 2px', fontWeight: '500' }}>
                {title}{variant && variant !== title ? ` — ${variant}` : ''}
              </Text>
              <Text style={{ margin: '0', color: '#666', fontSize: '14px' }}>
                Qty: {qty || 1} × {formatMoney(price, order.currency_code)}
              </Text>
            </div>
          )
        })}
      </Section>
    </Base>
  )
}

export default OrderPlacedTemplate
