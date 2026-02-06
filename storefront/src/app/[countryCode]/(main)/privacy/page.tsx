import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | ShopEnGenie",
  description:
    "ShopEnGenie's privacy policy explains how we collect, use, and protect your personal and business information.",
}

export default function PrivacyPage() {
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
            Privacy <span className="text-amber-500">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            We are committed to protecting your privacy and handling your data
            with transparency and care.
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
              1. Information We Collect
            </h2>
            <p>
              When you use ShopEnGenie, we collect information to provide and
              improve our services:
            </p>

            <h3 className="text-lg mt-6 mb-3">Account Information</h3>
            <ul>
              <li>Business name, contact person name, and job title</li>
              <li>Email address and phone number</li>
              <li>Billing and shipping addresses</li>
              <li>GST/Tax identification numbers</li>
              <li>Payment information (processed securely by payment providers)</li>
            </ul>

            <h3 className="text-lg mt-6 mb-3">Order Information</h3>
            <ul>
              <li>Products purchased and order history</li>
              <li>Shipping and delivery preferences</li>
              <li>Communication preferences</li>
              <li>Customer service interactions</li>
            </ul>

            <h3 className="text-lg mt-6 mb-3">Technical Information</h3>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on site</li>
              <li>Referring website and search terms</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              2. How We Use Your Information
            </h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate about orders, shipping, and support</li>
              <li>Provide technical support and product assistance</li>
              <li>Send relevant product updates and promotional offers (with consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Prevent fraud and ensure security</li>
              <li>Generate anonymized analytics and insights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              3. Information Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share information
              with:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Payment processors, shipping
                carriers, and IT service providers who assist in our operations
              </li>
              <li>
                <strong>Manufacturers:</strong> For warranty claims and product
                support (limited to order details)
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with mergers,
                acquisitions, or asset sales
              </li>
            </ul>
            <p className="mt-4">
              All third parties are contractually obligated to protect your
              information and use it only for specified purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              4. Data Security
            </h2>
            <p>We implement industry-standard security measures including:</p>
            <ul>
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Secure payment processing through PCI-DSS compliant providers</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and employee training</li>
              <li>Encrypted storage for sensitive information</li>
            </ul>
            <p className="mt-4">
              While we strive to protect your information, no method of
              transmission over the internet is 100% secure. We encourage you to
              use strong passwords and protect your account credentials.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              5. Cookies and Tracking
            </h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Remember your preferences and login status</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Deliver relevant content and advertisements</li>
              <li>Improve website performance and user experience</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. Disabling
              cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              6. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update inaccurate or incomplete
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and
                data (subject to legal retention requirements)
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Data Portability:</strong> Receive your data in a
                structured format
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@shopengenie.com"
                className="text-amber-600 hover:underline"
              >
                privacy@shopengenie.com
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              7. Data Retention
            </h2>
            <p>
              We retain your information for as long as necessary to provide our
              services and comply with legal obligations:
            </p>
            <ul>
              <li>Account information: Duration of account plus 3 years</li>
              <li>Order records: 7 years (tax and legal requirements)</li>
              <li>Marketing preferences: Until you opt out</li>
              <li>Technical logs: 12 months</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p>
              ShopEnGenie is a B2B service intended for business use only. We do
              not knowingly collect information from individuals under 18 years
              of age. If you believe a minor has provided us with personal
              information, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl border-b-2 border-amber-500 pb-2 inline-block mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated effective date. For
              significant changes, we will notify you via email or website
              notification.
            </p>
          </section>

          <section className="bg-slate-100 p-6 border-l-4 border-amber-500 mt-12">
            <h2 className="text-xl mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have questions about this privacy policy or your personal
              data:
            </p>
            <div className="text-sm text-slate-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:privacy@shopengenie.com"
                  className="text-amber-600"
                >
                  privacy@shopengenie.com
                </a>
              </p>
              <p className="mt-2">
                <strong>Address:</strong>
                <br />
                ShopEnGenie Industrial Supplies
                <br />
                Data Protection Officer
                <br />
                123 Industrial Area, Phase 2<br />
                Bengaluru, Karnataka 560058, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
