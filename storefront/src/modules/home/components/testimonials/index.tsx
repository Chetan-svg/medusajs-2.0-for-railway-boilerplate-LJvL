const testimonials = [
  {
    name: "Robert Miller",
    company: "Apex Manufacturing, Detroit",
    rating: 5,
    text: "ShopEnGenie has streamlined our maintenance procurement. We've cut our PLC replacement time in half and their technical support truly understands industrial automation requirements.",
    verified: true,
  },
  {
    name: "Sarah Johnson",
    company: "Midwest Industrial Solutions",
    rating: 5,
    text: "As an automation integrator, having a reliable source for Siemens, Allen-Bradley, and Schneider components is critical. ShopEnGenie's inventory and fast shipping keep our projects on schedule.",
    verified: true,
  },
  {
    name: "Michael Chen",
    company: "Pacific Coast Manufacturing, CA",
    rating: 5,
    text: "We run multiple manufacturing units across the country. ShopEnGenie's same-day dispatch has prevented costly downtime more times than I can count. Genuine parts with full warranty.",
    verified: true,
  },
  {
    name: "Jennifer Davis",
    company: "Great Lakes Automation",
    rating: 5,
    text: "From VFDs to I/O modules to HMIs - ShopEnGenie has everything we need for our industrial control systems. One vendor, consistent quality, zero procurement headaches.",
    verified: true,
  },
]

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${star <= rating ? "text-amber-500" : "text-slate-200"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const TestimonialCard = ({
  name,
  company,
  rating,
  text,
  verified,
}: (typeof testimonials)[0]) => (
  <div className="flex-shrink-0 w-[320px] sm:w-[360px] border border-gray-200 p-6 relative group hover:border-amber-500 transition-all duration-300">
    {/* Corner accent */}
    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-amber-500" />

    <div className="mb-4">
      <StarRating rating={rating} />
    </div>

    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4">
      &ldquo;{text}&rdquo;
    </p>

    <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
      <div className="w-10 h-10 bg-slate-900 flex items-center justify-center">
        <span className="text-xs font-bold text-amber-500">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-slate-900">{name}</span>
          {verified && (
            <svg
              className="w-3.5 h-3.5 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <span className="text-xs text-slate-400 uppercase tracking-wider">
          {company}
        </span>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gray-50">
      <div className="content-container mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-amber-500" />
          <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em]">
            Testimonials
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
          Trusted by Engineers
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 sm:px-12 pb-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
