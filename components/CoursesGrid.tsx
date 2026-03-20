import { container, section } from "@/lib/styles";

const courses = [
  { icon: "⚙️", title: "B.Tech / B.E", href: "/b-tech", color: "#1b3a5d" },
  { icon: "📐", title: "Diploma", href: "/diploma", color: "#1b3a5d" },
  { icon: "🔬", title: "M.Tech", href: "/m-tech", color: "#1b3a5d" },
  { icon: "🏗️", title: "Polytechnic", href: "/polytechnic", color: "#1b3a5d" },
  { icon: "🩺", title: "Study MBBS", href: "/mbbs", color: "#c0392b" },
  { icon: "🦷", title: "BDS", href: "/bds", color: "#1b3a5d" },
  { icon: "💊", title: "Bsc Nursing", href: "/nursing", color: "#f28f1d" },
  { icon: "🌿", title: "BAMS", href: "/bams", color: "#1b3a5d" },
  { icon: "⚗️", title: "B.Pharma", href: "/b-pharma", color: "#1b3a5d" },
  { icon: "🏃", title: "BPT", href: "/bpt", color: "#1b3a5d" },
  { icon: "⚖️", title: "BALLB", href: "/law", color: "#1b3a5d" },
  { icon: "📊", title: "MBA", href: "/mba", color: "#f28f1d" },
];

export default function CoursesGrid() {
  return (
    <section className={`${section} relative overflow-hidden`} style={{ background: "#f8f9fa" }}>
      {/* Watermark city silhouette — like original */}
      <div className="absolute inset-0 opacity-4" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 400'%3E%3Cpath fill='%231b3a5d' d='M0,400 L0,300 L60,300 L60,200 L100,200 L100,150 L140,150 L140,200 L180,200 L180,100 L220,100 L220,80 L260,80 L260,100 L300,100 L300,200 L340,200 L340,160 L380,160 L380,120 L420,120 L420,160 L460,160 L460,200 L500,200 L500,250 L540,250 L540,180 L580,180 L580,140 L620,140 L620,180 L660,180 L660,250 L700,250 L700,200 L740,200 L740,160 L780,160 L780,200 L820,200 L820,250 L860,250 L860,180 L900,180 L900,140 L940,140 L940,180 L980,180 L980,250 L1020,250 L1020,200 L1060,200 L1060,150 L1100,150 L1100,200 L1140,200 L1140,250 L1180,250 L1180,200 L1220,200 L1220,160 L1260,160 L1260,200 L1300,200 L1300,250 L1340,250 L1340,300 L1380,300 L1380,350 L1440,350 L1440,400 Z'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
      }} />

      <div className={`${container} relative z-10`}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#1b3a5d] font-black text-2xl md:text-3xl mb-3">
            We are the leading Admission<br/>Consultancy in Bihar !
          </h2>
          <div className="mx-auto w-16 h-1 bg-[#f28f1d] rounded-full" />
        </div>

        {/* Grid — 6 per row like original, with icon + label style */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-5">
          {courses.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon bubble */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-gray-50 border-2 border-gray-100 group-hover:border-[#f28f1d] transition-colors duration-200">
                {c.icon}
              </div>
              <h5 className="text-xs font-bold text-center leading-tight" style={{ color: c.color }}>
                {c.title}
              </h5>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
