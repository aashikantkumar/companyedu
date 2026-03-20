import { ArrowRight } from "lucide-react";
import Image from "next/image";
import admissionIcon from "../images/services/AdmissionIcons.png";
import supportIcon from "../images/services/customer-support.png";
import counsellingIcon from "../images/services/Counselling.png";
import teamIcon from "../images/services/team-leader.png";
import { container, divider, section, sectionTitle } from "@/lib/styles";

const features = [
  {
    image: admissionIcon,
    title: "Direct Admission",
    desc: "Education Care provides direct admission to your college. You just need to select the course. Let us do the rest.",
    href: "#",
  },
  {
    image: supportIcon,
    title: "Full Support",
    desc: "Education Care will provide full support from College Selection to Admissions and Shifting. We won't leave you in between.",
    href: "#",
  },
  {
    image: counsellingIcon,
    title: "Free Counselling",
    desc: "Education Care provides you with free counseling for your profile evaluation and career planning.",
    href: "#",
  },
  {
    image: teamIcon,
    title: "Excellent Team",
    desc: "The Education Care team of Experienced Counsellors will guide you and help you achieve your dream college admission.",
    href: "#",
  },
];

export default function ServicesHighlight() {
  return (
    <section className={`${section} bg-white`}>
      <div className={container}>
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className={`${sectionTitle} text-2xl md:text-3xl`}>
            The Education Care, we go over<br className="hidden md:block" /> and beyond for our students and clients alike
          </h2>
          <div className={divider} />
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              {/* Image icon — circular container */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 bg-blue-50 border-2 border-blue-100 group-hover:border-[#f28f1d] transition-colors duration-200 overflow-hidden p-2">
                <Image
                  src={f.image}
                  alt={f.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              <h4 className="text-[#1b3a5d] font-bold text-base mb-3">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{f.desc}</p>

              <div className="flex gap-4 justify-center">
                <a href={f.href} className="text-[#1b3a5d] font-semibold text-xs uppercase tracking-wider hover:text-[#f28f1d] flex items-center gap-1">
                  READ MORE <ArrowRight size={11} />
                </a>
                <a href="#consultation" className="text-[#1b3a5d] font-semibold text-xs uppercase tracking-wider hover:text-[#f28f1d] flex items-center gap-1">
                  APPLY NOW <ArrowRight size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
