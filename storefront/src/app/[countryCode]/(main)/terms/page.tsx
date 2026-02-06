import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | ShopEnGenie",
  description:
    "Terms and conditions for using ShopEnGenie's B2B industrial automation parts marketplace.",
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="content-container">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-500 uppercase tracking-[0.15em]">
              Legal
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 uppercase">
            Terms of <span className="text-amber-500">Service</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Please read these terms carefully before using our platform. By
            placing an order, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      <div className="content-container py-16 sm:py-20">
        <div className="max-w-4xl prose prose-slate prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight">
          <p className="text-sm text-slate-500 mb-8">
            Effective Date: January 1, 2025
          </p>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using ShopEnGenie (&quot;we,&quot; &quot;us,&quot; or the &quot;Platform&quot;),
              you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you
              are using the Platform on behalf of a business, you represent that
              you have the authority to bind that business to these Terms.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Continued
              use of the Platform after changes constitutes acceptance of the
              modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              2. B2B Platform
            </h2>
            <p>
              ShopEnGenie is a business-to-business (B2B) platform designed for
              commercial purchases. By using this Platform, you confirm that:
            </p>
            <ul>
              <li>You are purchasing for business/commercial purposes</li>
              <li>You are at least 18 years of age</li>
              <li>
                You have the legal capacity to enter into binding contracts
              </li>
              <li>
                Information provided during registration is accurate and complete
              </li>
            </ul>
            <p className="mt-4">
              Consumer protection laws applicable to retail purchases may not
              apply to B2B transactions on this Platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              3. Account Registration
            </h2>
            <p>To place orders, you must create an account. You agree to:</p>
            <ul>
              <li>Provide accurate business and contact information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
            <p className="mt-4">
              We reserve the right to refuse registration, suspend, or terminate
              accounts at our discretion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              4. Products and Pricing
            </h2>

            <h3 className="text-lg mt-6 mb-3">Product Information</h3>
            <p>
              We strive to provide accurate product descriptions, specifications,
              and images. However, we do not warrant that product information is
              complete, current, or error-free. Colors and appearances may vary
              from images shown.
            </p>

            <h3 className="text-lg mt-6 mb-3">Pricing</h3>
            <ul>
              <li>
                All prices are in US Dollars (USD) unless otherwise specified
              </li>
              <li>Prices are exclusive of applicable sales tax</li>
              <li>Shipping and handling charges are additional</li>
              <li>
                We reserve the right to modify prices without prior notice
              </li>
              <li>
                In case of pricing errors, we may cancel orders at the incorrect
                price
              </li>
            </ul>

            <h3 className="text-lg mt-6 mb-3">Availability</h3>
            <p>
              Product availability is subject to change. We reserve the right to
              limit quantities, refuse orders, or cancel orders due to stock
              limitations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              5. Orders and Payment
            </h2>

            <h3 className="text-lg mt-6 mb-3">Order Acceptance</h3>
            <p>
              Placing an order constitutes an offer to purchase. We reserve the
              right to accept or decline orders. An order is confirmed only when
              we send an order confirmation email.
            </p>

            <h3 className="text-lg mt-6 mb-3">Payment Terms</h3>
            <ul>
              <li>
                Payment is due at the time of order unless credit terms are
                approved
              </li>
              <li>
                We accept major credit cards, debit cards, ACH transfers,
                and wire transfers
              </li>
              <li>
                For approved accounts: Net-30 payment terms may be available
              </li>
              <li>
                Late payments may incur interest at 1.5% per month on outstanding
                balances
              </li>
            </ul>

            <h3 className="text-lg mt-6 mb-3">Tax and Invoicing</h3>
            <p>
              Itemized invoices will be provided for all orders. Sales tax
              will be applied based on delivery location where applicable.
              Tax-exempt customers must provide valid exemption certificates.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              6. Shipping and Delivery
            </h2>
            <ul>
              <li>
                Shipping times are estimates and not guaranteed delivery dates
              </li>
              <li>
                Risk of loss passes to the buyer upon delivery to the carrier
              </li>
              <li>
                Inspect shipments upon delivery and report damage within 48 hours
              </li>
              <li>
                We are not responsible for delays due to carriers, customs, or
                force majeure events
              </li>
            </ul>
            <p className="mt-4">
              See our{" "}
              <a href="/shipping" className="text-amber-600 hover:underline">
                Shipping Policy
              </a>{" "}
              for detailed shipping information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              7. Returns and Refunds
            </h2>
            <p>
              Returns are subject to our{" "}
              <a href="/returns" className="text-amber-600 hover:underline">
                Return Policy
              </a>
              . Key terms:
            </p>
            <ul>
              <li>30-day return window for unopened items</li>
              <li>RMA authorization required for all returns</li>
              <li>Restocking fees may apply</li>
              <li>Custom orders are non-returnable</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              8. Warranties and Disclaimers
            </h2>

            <h3 className="text-lg mt-6 mb-3">Product Warranties</h3>
            <p>
              Products carry manufacturer warranties as specified. We facilitate
              warranty claims but are not the warrantor. Warranty terms vary by
              manufacturer.
            </p>

            <h3 className="text-lg mt-6 mb-3">Platform Disclaimer</h3>
            <p>
              THE PLATFORM IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND.
              WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
            <p className="mt-4">
              We do not warrant that the Platform will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHOPENGENIE SHALL NOT BE
              LIABLE FOR:
            </p>
            <ul>
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Lost profits, revenue, data, or business opportunities</li>
              <li>Damages arising from product use or misuse</li>
              <li>Third-party claims or actions</li>
            </ul>
            <p className="mt-4">
              Our total liability shall not exceed the amount paid for the
              specific product or service giving rise to the claim.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              10. Intellectual Property
            </h2>
            <p>
              All content on the Platform, including text, graphics, logos, and
              software, is the property of ShopEnGenie or its licensors and is
              protected by intellectual property laws.
            </p>
            <p className="mt-4">
              Product names, logos, and trademarks belong to their respective
              manufacturers. Use of these marks is for identification purposes
              only.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              11. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless ShopEnGenie, its officers,
              directors, employees, and agents from any claims, damages, or
              expenses arising from:
            </p>
            <ul>
              <li>Your use of the Platform</li>
              <li>Violation of these Terms</li>
              <li>Infringement of third-party rights</li>
              <li>Products purchased through the Platform</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              12. Governing Law and Disputes
            </h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, USA.
              Any disputes shall be subject to the exclusive jurisdiction of
              courts in the State of Delaware.
            </p>
            <p className="mt-4">
              Before initiating legal proceedings, parties agree to attempt
              resolution through good-faith negotiation. If unresolved within 30
              days, disputes may be submitted to binding arbitration under the
              rules of the American Arbitration Association.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              13. Force Majeure
            </h2>
            <p>
              We shall not be liable for delays or failures in performance
              resulting from circumstances beyond our reasonable control,
              including natural disasters, war, government actions, pandemics,
              labor disputes, or supply chain disruptions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              14. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the
              remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="bg-slate-100 p-6 border-l-4 border-amber-500 mt-12">
            <h2 className="text-xl mb-4">Questions About These Terms?</h2>
            <p className="text-slate-600 mb-4">
              Contact our legal team for clarification:
            </p>
            <div className="text-sm text-slate-700">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:chetan@shopengenie.com" className="text-amber-600">
                  chetan@shopengenie.com
                </a>
              </p>
              <p className="mt-2">
                <strong>Address:</strong>
                <br />
                ShopEnGenie Industrial Supplies
                <br />
                1234 Industrial Parkway, Suite 100<br />
                Houston, TX 77001, USA
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
