import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "FAQ | ShopEnGenie",
  description:
    "Frequently asked questions about ShopEnGenie's industrial automation parts, ordering, shipping, returns, and B2B services.",
}

const faqs = [
  {
    category: "Ordering & Payment",
    questions: [
      {
        q: "Do you offer credit terms for businesses?",
        a: "Yes, we offer Net-30 payment terms for qualified businesses. To apply, submit a credit application with your company details and trade references. Approval typically takes 3-5 business days.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, Amex), debit cards, UPI, net banking, and bank transfers (NEFT/RTGS/IMPS). For approved accounts, we also offer credit terms.",
      },
      {
        q: "Can I get a GST invoice?",
        a: "Absolutely. All orders receive GST-compliant invoices. Please ensure your GST number is correctly entered in your account settings for proper invoicing and input tax credit.",
      },
      {
        q: "Is there a minimum order value?",
        a: "There is no minimum order value for standard orders. However, some bulk pricing tiers may require minimum quantities to qualify for volume discounts.",
      },
      {
        q: "How do I request a quote for large orders?",
        a: "Visit our Request for Quote page and submit your requirements. Our sales team will respond with a custom quote within 24 business hours. Bulk orders typically qualify for additional discounts.",
      },
    ],
  },
  {
    category: "Products & Authenticity",
    questions: [
      {
        q: "Are all products genuine OEM parts?",
        a: "Yes, every product we sell is 100% genuine and sourced from authorized distributors or directly from manufacturers. We do not deal in grey market, refurbished, or counterfeit products.",
      },
      {
        q: "Do products come with manufacturer warranty?",
        a: "Yes, all products carry the full manufacturer warranty as specified by the OEM. Warranty periods vary by product and manufacturer. Warranty details are listed on each product page.",
      },
      {
        q: "What if I receive a defective product?",
        a: "Contact us within 7 days of delivery for an immediate replacement or refund. For defects discovered later, we facilitate warranty claims with the manufacturer. See our Return Policy for details.",
      },
      {
        q: "Can you source products not listed on your website?",
        a: "Yes, we can source most industrial automation products from leading brands. Contact our sales team with your requirements and part numbers, and we will provide availability and pricing.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "What are your shipping options?",
        a: "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and same-day dispatch for in-stock items ordered before 2 PM. Shipping costs vary by location and order value.",
      },
      {
        q: "Do you ship pan-India?",
        a: "Yes, we deliver to all serviceable pin codes across India. Remote locations may have slightly longer delivery times. Enter your pin code at checkout for estimated delivery dates.",
      },
      {
        q: "How can I track my order?",
        a: "Once your order ships, you will receive a tracking number via email. You can also track orders from your account dashboard. Our team monitors shipments and will proactively notify you of any delays.",
      },
      {
        q: "What if my shipment arrives damaged?",
        a: "Inspect packages upon delivery. If you notice external damage, photograph it and note it on the delivery receipt. Report any damage to us within 48 hours with photos for a prompt resolution.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns of unopened items in original packaging within 30 days of delivery. An RMA number is required for all returns. Some items like custom orders and software are non-returnable.",
      },
      {
        q: "How long do refunds take?",
        a: "Once we receive and inspect your return (2 business days), refunds are processed within 5-7 business days. The refund is credited to your original payment method.",
      },
      {
        q: "Are there restocking fees?",
        a: "No restocking fee for unopened items returned within 30 days. A 15% restocking fee may apply for opened packaging or items returned without complete accessories.",
      },
      {
        q: "Can I exchange a product instead of returning?",
        a: "Yes, we offer exchanges for products of equal or greater value. Contact our support team to arrange an exchange. Price differences will be invoiced or refunded accordingly.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "Do you provide technical support?",
        a: "Yes, our team includes automation engineers who can assist with product selection, compatibility questions, and basic troubleshooting. For complex integration support, we can connect you with manufacturer resources.",
      },
      {
        q: "How can I verify product compatibility?",
        a: "Check product specifications on the product page or contact our technical team with your existing equipment model numbers. We will verify compatibility before you order.",
      },
      {
        q: "Do you offer installation services?",
        a: "We focus on parts supply, not installation services. However, we can recommend authorized system integrators in your area if you need professional installation support.",
      },
    ],
  },
  {
    category: "Account & Security",
    questions: [
      {
        q: "Is my payment information secure?",
        a: "Absolutely. We use SSL encryption and process payments through PCI-DSS compliant payment gateways. We never store your complete card details on our servers.",
      },
      {
        q: "Can I create multiple users for my company account?",
        a: "Yes, business accounts can have multiple authorized users with different permission levels. Contact our support team to set up additional users for your organization.",
      },
      {
        q: "How do I update my company information?",
        a: "Log into your account and navigate to Account Settings. You can update contact information, shipping addresses, and GST details. For changes to company name or GST number, please contact support.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="content-container">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
              Help Center
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 uppercase">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Find answers to common questions about ordering, shipping, returns,
            and more. Can&apos;t find what you need? Contact our support team.
          </p>
        </div>
      </div>

      <div className="content-container py-16 sm:py-20">
        {/* Quick Links */}
        <div className="mb-12 pb-12 border-b border-gray-200">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
            Jump to Section
          </h2>
          <div className="flex flex-wrap gap-2">
            {faqs.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium hover:bg-amber-500 hover:text-slate-900 transition-colors"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {faqs.map((category) => (
            <section
              key={category.category}
              id={category.category.toLowerCase().replace(/\s+/g, "-")}
            >
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8 pb-2 border-b-2 border-amber-500 inline-block">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-100 p-6 hover:border-gray-200 transition-colors"
                  >
                    <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                      <span className="w-6 h-6 bg-amber-500 text-slate-900 flex items-center justify-center flex-shrink-0 text-sm font-black">
                        Q
                      </span>
                      {faq.q}
                    </h3>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        A
                      </span>
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-slate-900 text-white p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-400 mb-6">
              Our support team is available Monday through Saturday, 9 AM to 6 PM
              IST. We typically respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink
                href="/contact"
                className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all"
              >
                Contact Support
              </LocalizedClientLink>
              <a
                href="mailto:support@shopengenie.com"
                className="inline-flex items-center justify-center border-2 border-slate-600 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:border-amber-500 transition-all"
              >
                support@shopengenie.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
