const policies = [
  {
    title: "Return Policy",
    icon: "return",
    highlights: [
      "30-day hassle-free returns on all products",
      "Full refund for unopened items in original packaging",
      "Free return shipping on defective products",
      "Opened items eligible for store credit",
      "No restocking fees for standard returns",
    ],
  },
  {
    title: "Warranty Coverage",
    icon: "warranty",
    highlights: [
      "Full manufacturer warranty on all products",
      "Extended warranty options available",
      "Free replacement for DOA (Dead on Arrival) items",
      "Warranty claims processed within 48 hours",
      "Direct manufacturer RMA support",
    ],
  },
  {
    title: "Shipping & Delivery",
    icon: "shipping",
    highlights: [
      "Same-day dispatch for orders before 2 PM",
      "Free shipping on orders above ₹5,000",
      "Express delivery to 18,000+ pin codes",
      "Secure packaging for sensitive electronics",
      "Real-time tracking on all shipments",
    ],
  },
]

const IconComponent = ({ icon }: { icon: string }) => {
  const icons: Record<string, JSX.Element> = {
    return: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    warranty: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    shipping: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  }
  return icons[icon] || icons.return
}

export default function PoliciesSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white">
      <div className="content-container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-amber-500" />
            <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em]">
              Our Commitment
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Buyer-Friendly Policies
            </h2>
            <p className="text-slate-600 max-w-md text-sm leading-relaxed">
              Designed with industrial procurement in mind. Flexible policies that work
              for your MRO operations.
            </p>
          </div>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="relative border border-gray-200 p-8 hover:border-amber-500 transition-all duration-300 group"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-amber-500" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-transparent group-hover:border-amber-500 transition-all duration-300" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center text-amber-500">
                  <IconComponent icon={policy.icon} />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-wide">
                  {policy.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {policy.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 bg-slate-900 p-8 sm:p-12 relative">
          <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-amber-500" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-amber-500" />

          <div className="text-center relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
              Your Satisfaction, Guaranteed
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
              We stand behind every product we sell. If you&apos;re not completely satisfied,
              our customer success team will make it right. That&apos;s the ShopEngenie promise.
            </p>
            <div className="inline-flex items-center gap-2 text-amber-500 text-sm font-bold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="uppercase tracking-wider">ISO 9001:2015 Certified Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
