import { Button } from "@/components/ui/button";
import { container, section, sectionLabel, sectionTitle } from "@/lib/styles";
import { GlowCard } from "@/components/ui/spotlight-card";

const courses = [
  {
    num: "01",
    title: "ENGINEERING",
    bg: "#f28f1d",
    desc: "Candidates must receive at least a 50 percent passing grade in their 10+2 or equivalent exam from a reputable institution. They must have majored in maths, physics, and chemistry in high school. Students must need to appear in the NTA IIT-JEE exams.",
    buttons: [
      { label: "B.E / B.TECH STARTS FROM 4 LAKHS", href: "/b-tech" },
      { label: "M.E / M.TECH STARTS FROM 4 LAKHS", href: "/m-tech" },
    ],
  },
  {
    num: "02",
    title: "MEDICAL",
    bg: "#f28f1d",
    desc: "To secure MBBS admission in India, candidates must have passed class 12 from a recognized board. Physics, Chemistry, Biology/Biotechnology, and English are required as core subjects. Students must appear in NTA NEET Exam.",
    buttons: [
      { label: "MBBS PACKAGE START FROM 45 LAKHS", href: "/mbbs" },
      { label: "BDS STARTS FROM 8 LAKHS", href: "/bds" },
    ],
  },
  {
    num: "03",
    title: "MANAGEMENT",
    bg: "#f28f1d",
    desc: "To pursue Management Courses in India, Candidates must have passed 12th from any background for Under-Graduate and Graduation for Post-Graduation. There is no particular exam for UG Level. But, Students have to appear in exams like CAT, XAT, MAT, etc.",
    buttons: [
      { label: "BBA STARTS FROM 4 LAKHS", href: "/management" },
      { label: "MBA STARTS FROM 4 LAKHS", href: "/mba" },
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={`${section} bg-[#f8f9fa]/80 backdrop-blur-sm`}>
      <div className={container}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className={sectionLabel}>MEET OUR EXPERTS</p>
          <h2 className={`${sectionTitle} mb-3`}>Transforming Ways of Education</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            The Education Care is an Education Consultancy providing a professional platform for students seeking career assistance, guidance, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: Course Accordions (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {courses.map((c) => (
              <GlowCard 
                key={c.num} 
                customSize 
                glowColor="orange"
                className="bg-white !p-0 overflow-hidden shadow-sm border border-gray-100 block relative"
              >
                <div>
                  {/* Orange header bar — exactly like original */}
                  <div className="flex items-center gap-3 px-5 py-3" style={{ background: c.bg }}>
                    <h4 className="text-white font-black text-sm tracking-widest uppercase">
                      {c.num}. {c.title}
                    </h4>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                    {/* Fee buttons — dark navy pills like original */}
                    <div className="flex flex-wrap gap-2">
                      {c.buttons.map((btn) => (
                        <Button
                          key={btn.label}
                          asChild
                          variant="primary"
                          size="sm"
                          className="rounded-md px-4 py-2 text-[11px] shadow-none hover:shadow-md"
                        >
                          <a href={btn.href}>{btn.label}</a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          {/* Right: Promotional banner — matches original ad card (2 cols) */}
          <div className="lg:col-span-2">
            <GlowCard 
              customSize
              glowColor="red"
              className="bg-white !p-0 overflow-hidden shadow-xl border border-gray-200 block relative"
            >
              <div>
                {/* Blue top bar */}
                <div className="bg-[#1b3a5d] flex items-center gap-3 px-5 py-4">
                  <div className="w-10 h-10 rounded-full border-2 border-[#f28f1d] bg-[#f28f1d]/20 flex items-center justify-center text-lg">📖</div>
                  <div>
                    <p className="text-white font-black text-sm">THE EDUCATION CARE</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array(8).fill(0).map((_, i) => (
                        <div key={i} className="w-2 h-1 rounded-sm bg-[#f28f1d]/60" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Banner body */}
                <div className="relative">
                  <div className="bg-linear-to-br from-orange-50 to-blue-50 p-6">
                    <p className="text-[#c0392b] font-black text-2xl leading-tight mb-1">
                      STUDY ENGINEERING,<br/>MBBS &amp; MBA
                    </p>
                    <p className="text-[#1b3a5d] font-semibold text-base mb-1">
                      Get Direct Admission in<br/>Top Colleges
                    </p>
                    <p className="text-[#c0392b] font-black text-lg mb-4">India &amp; Abroad</p>

                    {/* "100% ADMISSION GUARANTEED" banner */}
                    <div className="bg-[#c0392b] text-white font-black text-center py-2.5 rounded text-sm uppercase tracking-wider mb-5">
                      100% ADMISSION GUARANTEED
                    </div>

                    {/* Counselor placeholder */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-linear-to-br from-[#1b3a5d] to-[#f28f1d] flex h-32 w-32 items-center justify-center rounded-full text-6xl shadow-lg">
                        👩‍💼
                      </div>
                    </div>

                    <p className="text-[#1b3a5d] font-black text-xl text-center">Get Confirm</p>
                    <p className="text-[#c0392b] font-black text-3xl text-center leading-tight">ADMISSION</p>
                    <p className="text-[#1b3a5d] font-semibold text-sm text-center mb-4">Through Our Guidance</p>

                    {/* Bottom info grid */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#1b3a5d] rounded-lg p-3">
                        <p className="text-[#f28f1d] text-xs font-semibold mb-1">🌐 www.theeducationcare.in</p>
                        <p className="text-white/70 text-xs">📍 G-35, Pushpanjali Complex, Boring Road, Patna-1</p>
                      </div>
                      <div className="bg-[#f28f1d] rounded-lg p-3">
                        <p className="text-white font-black text-base">📞 6207013805</p>
                        <p className="text-white/80 text-xs mt-1">✉ theeducationcare6@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>

            {/* Stats below the card */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center bg-[#1b3a5d] rounded-lg py-3">
                <div className="text-[#f28f1d] font-black text-xl">5+</div>
                <div className="text-white/70 text-xs">Years</div>
              </div>
              <div className="text-center bg-[#f28f1d] rounded-lg py-3">
                <div className="text-white font-black text-xl">1000+</div>
                <div className="text-white/80 text-xs">Students</div>
              </div>
              <div className="text-center bg-[#1b3a5d] rounded-lg py-3">
                <div className="text-[#f28f1d] font-black text-xl">10+</div>
                <div className="text-white/70 text-xs">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
