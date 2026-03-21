"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, GraduationCap, Headphones, MessagesSquare, UsersRound } from "lucide-react";
import { container } from "@/lib/styles";
import { Button } from "@/components/ui/button";

const features = [
  {
    Icon: GraduationCap,
    title: "Direct Admission",
    desc: "Education Care provides direct admission to your college. You just need to select the course. Let us do the rest.",
    href: "#",
    colSpan: "md:col-span-2",
  },
  {
    Icon: Headphones,
    title: "Full Support",
    desc: "Education Care will provide full support from College Selection to Admissions and Shifting. We won't leave you in between.",
    href: "#",
    colSpan: "md:col-span-1",
  },
  {
    Icon: MessagesSquare,
    title: "Free Counselling",
    desc: "Education Care provides you with free counseling for your profile evaluation and career planning.",
    href: "#",
    colSpan: "md:col-span-2",
  },
  {
    Icon: UsersRound,
    title: "Excellent Team",
    desc: "The Education Care team of Experienced Counsellors will guide you and help you achieve your dream college admission.",
    href: "#",
    colSpan: "md:col-span-1",
    extraClasses: "h-full min-h-[300px]",
  },
];

export default function ServicesHighlight() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-black font-sans">

      {/* Receding wireframe floor grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 [mask-image:linear-gradient(to_top,black_20%,transparent_70%)]">
        <div className="absolute inset-[-60%] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:65px_65px] [transform:perspective(1200px)_rotateX(68deg)_translateY(18%)]" />
      </div>

      {/* Ambient mesh glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full bg-white/3 blur-[130px]"
          animate={{ x: ["0%", "20%", "0%"], y: ["0%", "15%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[10%] w-[380px] h-[380px] rounded-full bg-white/2 blur-[110px]"
          animate={{ x: ["0%", "-15%", "0%"], y: ["0%", "-10%", "0%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className={`${container} relative z-10`}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-zinc-600 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            The Education Care, we go over<br className="hidden md:block" /> and beyond for our students
          </h2>
          <div className="w-16 h-px bg-white/25 mx-auto rounded-full" />
        </motion.div>

        {/* Staggered Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(280px,auto)]">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className={`group flex flex-col justify-between p-8 rounded-3xl relative overflow-hidden
                bg-zinc-900/50 backdrop-blur-xl border border-white/8
                hover:border-white/25 hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(255,255,255,0.07)]
                transition-all duration-500
                ${f.colSpan} ${f.extraClasses ?? ""}`}
            >
              {/* Inner rim highlight */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* Hover inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Chrome Icon */}
                <div className="relative inline-flex mb-8 self-start">
                  {/* Glow halo */}
                  <div className="absolute inset-0 bg-white/10 blur-xl opacity-40 rounded-2xl group-hover:opacity-80 group-hover:blur-2xl transition-all duration-400" />

                  {/* Icon box */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="relative bg-gradient-to-tr from-zinc-800 to-zinc-700 p-4 rounded-2xl border border-white/10
                      shadow-[0_8px_20px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.08)]"
                    style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.2))" }}
                  >
                    <f.Icon
                      className="text-white w-8 h-8"
                      style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))" }}
                    />
                  </motion.div>
                </div>

                <h4 className="text-white font-extrabold text-2xl md:text-3xl mb-4 tracking-tight">
                  {f.title}
                </h4>
                <p className="text-white/40 text-base leading-relaxed mb-8 flex-grow group-hover:text-white/60 transition-colors duration-300">
                  {f.desc}
                </p>
              </div>

              {/* Actions */}
              <div className="relative z-10 flex flex-wrap items-center gap-5 mt-auto">
                <Button
                  asChild
                  className="bg-white text-black hover:bg-zinc-100 font-black rounded-full px-7 py-5 h-auto text-xs tracking-[0.15em] uppercase relative overflow-hidden group/btn shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all"
                >
                  <a href="#consultation">
                    {/* Shimmer */}
                    <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-full transition-all duration-700 translate-x-[-100%]" />
                    Apply Now
                  </a>
                </Button>

                <a
                  href={f.href}
                  className="text-white/30 font-black text-xs hover:text-white flex items-center gap-2 group/link transition-colors duration-300 tracking-[0.15em] uppercase"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
