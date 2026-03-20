import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { container, divider, section, sectionLabel, sectionSubtitle, sectionTitle } from "@/lib/styles";

const newsItems = [
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    title: "IIT-JEE 2024",
    date: "January 2024",
    desc: "The Joint Entrance Examination, JEE (Main) comprises two papers. JEE (Main) is also an eligibility test for JEE (Advanced), which is conducted for admission to IITs.",
    href: "#",
    color: "#17416c",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    title: "NEET - 2024",
    date: "May 2024",
    desc: "The National Eligibility cum Entrance Test (NEET) 2024 answer key will be issued soon. NTA will also release the NEET UG 2024 response sheet.",
    href: "#",
    color: "#e74c3c",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    title: "CAT - 2024",
    date: "November 2024",
    desc: "The CAT 2024 test will be offered in 3 slots in November 2024. The official notification includes information on the CAT 2024 exam date and pattern.",
    href: "#",
    color: "#f6830e",
  },
];

export default function LatestNews() {
  return (
    <section className={`${section} bg-white`}>
      <div className={container}>
        {/* Header */}
        <div className="text-center mb-14">
          <p className={sectionLabel}>STAY UPDATED</p>
          <h2 className={sectionTitle}>Latest Exam News</h2>
          <div className={divider}></div>
          <p className={`${sectionSubtitle} mt-4`}>
            Stay updated with the latest information about entrance exams and college admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="400px"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-white text-xs font-bold rounded-full uppercase tracking-wider"
                  style={{ background: item.color }}
                >
                  {item.date}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3
                  className="text-xl font-black mb-3 transition-colors"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>

                <div className="h-px bg-gray-100 mb-4" />

                <div className="flex items-center gap-3">
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase transition-colors group-hover:underline"
                    style={{ color: item.color }}
                  >
                    Read More <ArrowRight size={12} />
                  </a>
                  <a href="tel:06207013805" className="ml-auto w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-[#17416c] border border-gray-200 hover:border-[#17416c] transition-all duration-200">
                    <Phone size={12} />
                  </a>
                  <a href="mailto:theeducationcare6@gmail.com" className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-[#f6830e] border border-gray-200 hover:border-[#f6830e] transition-all duration-200">
                    <Mail size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
