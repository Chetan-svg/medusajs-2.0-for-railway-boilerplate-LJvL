import LocalizedClientLink from "@modules/common/components/localized-client-link"

const valueProps = [
  {
    icon: "shield",
    title: "100% Genuine Parts",
    description:
      "Every component is sourced directly from authorized distributors. Full traceability and authenticity guaranteed.",
  },
  {
    icon: "clock",
    title: "Same-Day Dispatch",
    description:
      "Orders placed before 2 PM ship the same day. Emergency stock available for critical production needs.",
  },
  {
    icon: "refresh",
    title: "30-Day Easy Returns",
    description:
      "No questions asked returns within 30 days. We understand MRO procurement isn't always predictable.",
  },
  {
    icon: "headset",
    title: "Expert Technical Support",
    description:
      "Our automation engineers are available 24/7 to help with product selection and troubleshooting.",
  },
  {
    icon: "certificate",
    title: "Full Warranty Coverage",
    description:
      "All products come with manufacturer warranty. Extended warranty options available for critical equipment.",
  },
  {
    icon: "truck",
    title: "Pan-India Delivery",
    description:
      "Fast shipping to every pincode. Special logistics for sensitive electronic components.",
  },
]

const IconComponent = ({ icon }: { icon: string }) => {
  const icons: Record<string, JSX.Element> = {
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    refresh: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    headset: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    certificate: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    truck: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  }
  return icons[icon] || icons.shield
}

export default function ValuePropositions() {
  return (
    <section className="w-full py-16 sm:py-24 bg-slate-50">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-amber-500" />
            <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em]">
              Why Choose Us
            </span>
            <div className="w-8 h-[2px] bg-amber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            The ShopEngenie Advantage
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            Built for industrial procurement teams who need reliability, speed, and expert support
            for their MRO operations.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 p-8 hover:border-amber-500 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-amber-500" />

              <div className="w-12 h-12 bg-slate-100 group-hover:bg-amber-500 flex items-center justify-center mb-6 transition-all duration-300">
                <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
                  <IconComponent icon={prop.icon} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wide">
                {prop.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <LocalizedClientLink
            href="/store"
            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-amber-500 transition-all duration-300"
          >
            Start Shopping
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}
