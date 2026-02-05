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
    <div className="group relative w-36 h-24 sm:w-44 sm:h-28 bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-amber-500 hover:shadow-lg cursor-default">
      {/* Corner accents on hover */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-transparent group-hover:border-amber-500 transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-transparent group-hover:border-amber-500 transition-all duration-300" />

      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl sm:text-3xl font-black text-gray-200 group-hover:text-slate-800 transition-colors duration-300 tracking-tight">
          {initials}
        </span>
        <span className="text-[8px] sm:text-[9px] text-gray-400 group-hover:text-amber-600 transition-colors duration-300 font-bold uppercase tracking-[0.15em]">
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
      className="w-full py-10 sm:py-14 bg-white overflow-hidden border-b border-gray-100"
      role="region"
      aria-label="Trusted brand partners"
    >
      <div className="content-container mb-8">
        <div className="flex items-center gap-3 justify-center">
          <div className="w-8 h-[2px] bg-amber-500" />
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
            Trusted by Industry Leaders
          </p>
          <div className="w-8 h-[2px] bg-amber-500" />
        </div>
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
