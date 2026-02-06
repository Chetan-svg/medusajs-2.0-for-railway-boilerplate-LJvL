const brands = [
  { name: "SIEMENS", initials: "S" },
  { name: "Allen-Bradley", initials: "AB" },
  { name: "SCHNEIDER", initials: "SE" },
  { name: "ABB", initials: "ABB" },
  { name: "MITSUBISHI", initials: "ME" },
  { name: "OMRON", initials: "O" },
  { name: "FANUC", initials: "F" },
  { name: "BOSCH", initials: "B" },
  { name: "ROCKWELL", initials: "R" },
  { name: "HONEYWELL", initials: "H" },
  { name: "PHOENIX", initials: "PC" },
  { name: "BECKHOFF", initials: "BK" },
]

const BrandCard = ({ name, initials }: { name: string; initials: string }) => (
  <div className="flex-shrink-0 mx-3">
    <div className="group w-36 h-24 sm:w-44 sm:h-28 bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-slate-300 cursor-default">
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl sm:text-3xl font-black text-gray-200 group-hover:text-slate-800 transition-colors duration-300 tracking-tight">
          {initials}
        </span>
        <span className="text-[9px] text-gray-400 group-hover:text-slate-600 transition-colors duration-300 font-medium uppercase tracking-[0.1em]">
          {name}
        </span>
      </div>
    </div>
  </div>
)

const BrandMarquee = () => {
  const duplicatedBrands = [...brands, ...brands, ...brands]

  return (
    <section
      className="w-full py-16 sm:py-20 bg-white overflow-hidden border-b border-gray-100"
      role="region"
      aria-label="Trusted brand partners"
    >
      <div className="content-container mb-10">
        <p className="text-sm text-slate-500 text-center">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused] [will-change:transform]">
          {duplicatedBrands.map((brand, index) => (
            <BrandCard key={`${brand.name}-${index}`} {...brand} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandMarquee
