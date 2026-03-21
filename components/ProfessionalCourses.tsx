"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Settings, Stethoscope, BarChart3, Scale, ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// ─── Data ───────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "engineering",
    title: "BEST ENGINEERING",
    Icon: Settings,
    links: [
      { label: "B.Tech / B.E Admission 2024", href: "/b-tech" },
      { label: "M.Tech Courses Admission 2024", href: "/m-tech" },
      { label: "B.Arch Courses Admission 2024", href: "/engineering" },
      { label: "Diploma Courses Admission", href: "/diploma" },
    ],
    exploreHref: "/engineering",
  },
  {
    id: "medical",
    title: "MEDICAL ADMISSION",
    Icon: Stethoscope,
    links: [
      { label: "MBBS Course Admission 2024", href: "/mbbs" },
      { label: "BDS Course Admission 2024", href: "/bds" },
      { label: "BSC Nursing Admission 2024", href: "/nursing" },
      { label: "BAMS Course Admission", href: "/bams" },
    ],
    exploreHref: "/medical",
  },
  {
    id: "management",
    title: "BEST MANAGEMENT",
    Icon: BarChart3,
    links: [
      { label: "MBA Course Admission 2024", href: "/mba" },
      { label: "PGDM Course Admission 2024", href: "/mba" },
      { label: "PGP (Management) 2024", href: "/management" },
      { label: "MBS Course Admission", href: "/management" },
    ],
    exploreHref: "/management",
  },
  {
    id: "law",
    title: "LAW ADMISSION",
    Icon: Scale,
    links: [
      { label: "LL.B.(Hons.) Admission 2024", href: "/law" },
      { label: "B.B.A.+ LL.B Admission 2024", href: "/law" },
      { label: "B.B.A. + LL.B (Hons.) 2024", href: "/law" },
      { label: "B.A. + LL.B Course Admission", href: "/law" },
    ],
    exploreHref: "/law",
  },
];

// Layout config for the stacked 3D fan
// relative offset from active: -1, 0, +1, +2
const getFanLayout = (relOffset: number) => {
  switch (relOffset) {
    case -1: return { x: -340, scale: 0.82, rotateY: 22,  zIndex: 5,  opacity: 0.55, blur: true  };
    case  0: return { x:    0, scale: 1.08, rotateY:  0,  zIndex: 20, opacity: 1,    blur: false };
    case  1: return { x:  310, scale: 0.82, rotateY: -22, zIndex: 5,  opacity: 0.55, blur: true  };
    case  2: return { x:  550, scale: 0.68, rotateY: -32, zIndex: 3,  opacity: 0.30, blur: true  };
    default:   return { x:  900, scale: 0.6,  rotateY: -45, zIndex: 1,  opacity: 0,    blur: true  };
  }
};

// ─── Individual Card ─────────────────────────────────────────────────────────

function CourseCard({
  category,
  relOffset,
  floatDelay,
  onClick,
}: {
  category: typeof categories[0];
  relOffset: number;
  floatDelay: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const layout = getFanLayout(relOffset);
  const isActive = relOffset === 0;
  const { Icon } = category;

  return (
    <motion.div
      className="absolute"
      animate={{
        x: layout.x,
        scale: layout.scale,
        rotateY: layout.rotateY,
        opacity: layout.opacity,
        zIndex: layout.zIndex,
        y: hovered && isActive ? -8 : 0,
      }}
      transition={{ type: "spring", stiffness: 130, damping: 22 }}
      style={{ transformStyle: "preserve-3d", cursor: isActive ? "default" : "pointer" }}
      onClick={() => { if (!isActive) onClick(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating physics layer */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
      >
        {/* Card shell */}
        <div
          className={`relative w-72 h-[420px] rounded-3xl flex flex-col overflow-hidden
            bg-white/5 backdrop-blur-xl border transition-all duration-500
            ${isActive
              ? "border-white/35 shadow-[0_0_40px_rgba(255,255,255,0.15),0_0_80px_rgba(255,255,255,0.05)] ring-1 ring-white/10"
              : "border-white/10"
            }
            ${layout.blur ? "[filter:blur(0.5px)]" : ""}
          `}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Icon pedestal */}
          <div className="h-44 flex items-center justify-center relative overflow-hidden shrink-0">
            {/* Ambient glow behind icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className={`w-32 h-32 rounded-full bg-white/5 blur-2xl transition-opacity duration-500 ${hovered && isActive ? "opacity-100" : "opacity-40"}`} />
            </div>

            {/* Chrome 3D Icon */}
            <motion.div
              animate={hovered && isActive
                ? { scale: 1.2, y: -14 }
                : { scale: 1, y: 0 }
              }
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
              style={{ filter: "drop-shadow(0 0 18px rgba(255,255,255,0.6)) drop-shadow(0 8px 20px rgba(0,0,0,0.4))" }}
            >
              {/* Slow spinning wrapper */}
              <motion.div
                animate={{ rotate: hovered && isActive ? 0 : 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear", repeatType: "loop" }}
              >
                <Icon
                  className="w-16 h-16 text-white"
                  strokeWidth={1}
                />
              </motion.div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-white font-black text-base tracking-[0.15em] uppercase mb-4">
              {category.title}
            </h3>

            {/* Course list — slides in on hover for active card */}
            <div className="space-y-2 flex-1">
              {category.links.map((link, li) => (
                <motion.a
                  key={`${category.id}-${link.href}-${link.label}-${li}`}
                  href={link.href}
                  initial={false}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 0 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors leading-snug group/link"
                >
                  <span className="w-1 h-1 rounded-full bg-white/30 group-hover/link:bg-white flex-shrink-0 transition-colors" />
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-4" />

            {/* CTA */}
            <div className="flex items-center gap-2">
              {isActive ? (
                <Button asChild className="flex-1 bg-white text-black hover:bg-zinc-100 font-black tracking-widest uppercase text-[10px] py-5 rounded-xl">
                  <a href={category.exploreHref}>
                    Explore Campus <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </Button>
              ) : (
                <a href={category.exploreHref} className="flex-1 text-white/50 text-xs uppercase tracking-widest hover:text-white transition-colors font-bold">
                  Read More →
                </a>
              )}
              <a href="tel:06207013805" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Phone className="w-3 h-3 text-white/50" />
              </a>
              <a href="mailto:theeducationcare6@gmail.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <Mail className="w-3 h-3 text-white/50" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── SVG Data Path ────────────────────────────────────────────────────────────

function DataPath({ inView }: { inView: boolean }) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-0"
      viewBox="0 0 1200 80"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 50 70 Q 200 20 400 60 Q 600 80 800 40 Q 1000 10 1150 50"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 2.5, delay: 0.5 }}
      />
      {/* Glowing dot travelling along path */}
      {inView && (
        <motion.circle
          r="4"
          fill="white"
          style={{ filter: "blur(1px) drop-shadow(0 0 6px white)" }}
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, delay: 0.8, repeat: Infinity, repeatDelay: 2 }}
        />
      )}
    </svg>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ProfessionalCourses() {
  const [activeCard, setActiveCard] = useState(1); // Medical as default
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  // Auto-rotation logic
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % categories.length);
    }, 5000); // Swap every 5 seconds

    return () => clearInterval(interval);
  }, [isInView, activeCard]);

  // Mouse-follow parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [-600, 600], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-black overflow-hidden font-sans"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D wireframe floor grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 [mask-image:linear-gradient(to_top,black_20%,transparent_80%)]">
        <div className="absolute inset-[-50%] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:60px_60px] [transform:perspective(1200px)_rotateX(65deg)_translateY(20%)]" />
      </div>

      {/* Background mesh glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]"
          animate={{ x: ["-50%", "-55%", "-45%", "-50%"], y: ["-50%", "-45%", "-55%", "-50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-black mb-4">Professional Programs</p>
          <h2 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight mb-5">
            Top Professional<br />Courses
          </h2>
          <div className="w-16 h-1 bg-white/30 rounded-full mx-auto" />
        </motion.div>

        {/* ── DESKTOP: 3D Stack ── */}
        <motion.div
          className="hidden md:block relative"
          style={{ perspective: "1200px", transformStyle: "preserve-3d", rotateX, rotateY }}
        >
          <div className="relative flex items-center justify-center h-[500px]">
            {categories.map((cat, idx) => {
              let relOffset = idx - activeCard;
              if (relOffset > categories.length / 2) relOffset -= categories.length;
              if (relOffset < -categories.length / 2) relOffset += categories.length;

              return (
                <CourseCard
                  key={cat.id}
                  category={cat}
                  relOffset={relOffset}
                  floatDelay={idx * 0.8}
                  onClick={() => setActiveCard(idx)}
                />
              );
            })}
          </div>

          {/* SVG Data Path at bottom */}
          <DataPath inView={isInView} />
        </motion.div>

        {/* ── MOBILE: Vertical Glass Cards ── */}
        <div className="md:hidden flex flex-col gap-4">
          {categories.map((cat, idx) => {
            const { Icon } = cat;
            const isActive = idx === activeCard;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.12 }}
                className={`rounded-2xl bg-white/5 backdrop-blur-xl border p-5 ${isActive ? "border-white/30 shadow-[0_0_25px_rgba(255,255,255,0.1)]" : "border-white/10"}`}
                onClick={() => setActiveCard(idx)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-black text-sm tracking-widest uppercase">{cat.title}</h3>
                </div>
                <div className="space-y-1.5">
                  {cat.links.map((link, linkIndex) => (
                    <a key={`${cat.id}-${link.href}-${link.label}-${linkIndex}`} href={link.href} className="flex items-center gap-2 text-white/60 text-xs hover:text-white transition-colors">
                      <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                      {link.label}
                    </a>
                  ))}
                </div>
                {isActive && (
                  <Button asChild className="mt-4 w-full bg-white text-black hover:bg-zinc-100 font-black uppercase tracking-widest text-xs py-5 rounded-xl">
                    <a href={cat.exploreHref}>Explore Campus</a>
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveCard(i)}
              aria-label={`Select ${cat.title}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === activeCard ? "w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "w-2 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
