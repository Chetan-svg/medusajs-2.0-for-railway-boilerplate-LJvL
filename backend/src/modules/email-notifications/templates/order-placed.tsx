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
// instead of plain numbers. This safely extracts the numeric value.
function toNumber(val: any): number {
  if (val == null) return 0
  if (typeof val === 'number') return val
  if (typeof val === 'string') return parseFloat(val) || 0
  if (typeof val === 'object' && val.value != null) return toNumber(val.value)
  return 0
}

function formatCurrency(cents: any, currencyCode: string): string {
  const amount = toNumber(cents)
  return `${(amount / 100).toFixed(2)} ${(currencyCode || 'USD').toUpperCase()}`
}

function formatTotal(order: OrderPlacedTemplateProps['order']): string {
  const rawValue = order.summary?.raw_current_order_total?.value
  if (rawValue == null) return 'N/A'
  return formatCurrency(rawValue, order.currency_code)
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

        {(order.items || []).map((item) => (
          <div key={item.id} style={{
            padding: '8px 0',
            borderBottom: '1px solid #eaeaea',
          }}>
            <Text style={{ margin: '0 0 2px', fontWeight: '500' }}>
              {item.product_title} — {item.title}
            </Text>
            <Text style={{ margin: '0', color: '#666', fontSize: '14px' }}>
              Qty: {toNumber(item.quantity)} × {formatCurrency(item.unit_price, order.currency_code)}
            </Text>
          </div>
        ))}
      </Section>
    </Base>
  )
}

export default OrderPlacedTemplate
