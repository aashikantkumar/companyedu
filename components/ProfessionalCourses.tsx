import { ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { container, divider, section, sectionLabel, sectionSubtitle, sectionTitle } from "@/lib/styles";

const categories = [
  {
    title: "BEST ENGINEERING",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    color: "#17416c",
    links: [
      { label: "B.Tech Courses Admission 2024", href: "/b-tech" },
      { label: "M.Tech Courses Admission 2024", href: "/m-tech" },
      { label: "B.Arch Courses Admission 2024", href: "/engineering" },
      { label: "Diploma Courses Admission", href: "/diploma" },
    ],
    exploreHref: "/engineering",
  },
  {
    title: "MEDICAL ADMISSION",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    color: "#e74c3c",
    links: [
      { label: "MBBS Course Admission 2024", href: "/mbbs" },
      { label: "BDS Course Admission 2024", href: "/bds" },
      { label: "BSC Nursing Admission 2024", href: "/nursing" },
      { label: "BAMS Course Admission", href: "/bams" },
    ],
    exploreHref: "/medical",
  },
  {
    title: "BEST MANAGEMENT",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    color: "#f6830e",
    links: [
      { label: "MBA Course Admission 2024", href: "/mba" },
      { label: "PGDM Course Admission 2024", href: "/mba" },
      { label: "PGP (Management) 2024", href: "/management" },
      { label: "MBS Course Admission", href: "/management" },
    ],
    exploreHref: "/management",
  },
  {
    title: "LAW ADMISSION",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80",
    color: "#8b5cf6",
    links: [
      { label: "LL.B.(Hons.) Admission 2024", href: "/law" },
      { label: "B.B.A.+ LL.B Admission 2024", href: "/law" },
      { label: "B.B.A. + LL.B (Hons.) 2024", href: "/law" },
      { label: "B.A. + LL.B Course Admission", href: "/law" },
    ],
    exploreHref: "/law",
  },
];

export default function ProfessionalCourses() {
  return (
    <section className={`${section} bg-[#f8fafd]`}>
      <div className={container}>
        {/* Header */}
        <div className="text-center mb-14">
          <p className={sectionLabel}>PROFESSIONAL PROGRAMS</p>
          <h2 className={sectionTitle}>Top Professional Courses</h2>
          <div className={divider}></div>
          <p className={`${sectionSubtitle} mt-4`}>
            Expert admission guidance for all top professional programs across India&apos;s best colleges and universities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="300px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, ${cat.color}33 0%, ${cat.color}cc 100%)`,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-black text-base tracking-wider">{cat.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <ul className="space-y-2 mb-4">
                  {cat.links.map((link) => (
                    <li key={link.label} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: cat.color }} />
                      <a
                        href={link.href}
                        className="text-xs text-gray-600 hover:text-[#17416c] transition-colors font-medium leading-snug"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-4" />

                {/* Actions */}
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={cat.exploreHref}
                    className="flex items-center gap-1 text-xs font-bold tracking-wider uppercase transition-colors"
                    style={{ color: cat.color }}
                  >
                    EXPLORE NOW <ArrowRight size={12} />
                  </a>
                  <a
                    href="tel:06207013805"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:text-white transition-all duration-200"
                    style={{ color: cat.color, border: `1px solid ${cat.color}` }}
                  >
                    <Phone size={12} />
                  </a>
                  <a
                    href="mailto:theeducationcare6@gmail.com"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:text-white transition-all duration-200"
                    style={{ color: cat.color, border: `1px solid ${cat.color}` }}
                  >
                    <Mail size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
