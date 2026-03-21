"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Settings2,
  Stethoscope,
  BarChart3,
  Scale,
  BookOpen,
  Microscope,
  Leaf,
  GraduationCap,
  Trophy,
  Users,
  Star,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ─────────────────────────────────────────────────────────────────────

const examTerminals = [
  {
    id: "jee",
    title: "IIT-JEE 2024",
    badge: "JANUARY 2024",
    Icon: Settings2,
    desc: "The Joint Entrance Examination, JEE (Main) comprises two papers. JEE (Main) is also an eligibility test for JEE (Advanced), conducted for admission to IITs.",
    href: "#",
    ctaLabel: "Explore Campus",
  },
  {
    id: "neet",
    title: "NEET — 2024",
    badge: "MAY 2024",
    Icon: Stethoscope,
    desc: "The National Eligibility cum Entrance Test (NEET) 2024 answer key will be issued soon. NTA will also release the NEET UG 2024 response sheet.",
    href: "#",
    ctaLabel: "Explore Campus",
    featured: true,
  },
  {
    id: "cat",
    title: "CAT — 2024",
    badge: "NOVEMBER 2024",
    Icon: BarChart3,
    desc: "The CAT 2024 test will be offered in 3 slots in November 2024. The official notification includes information on the CAT 2024 exam date and pattern.",
    href: "#",
    ctaLabel: "Explore Campus",
  },
];

const courseNodes = [
  { label: "B.Tech / B.E",    Icon: Settings2    },
  { label: "Diploma",          Icon: GraduationCap },
  { label: "MBBS",             Icon: Stethoscope  },
  { label: "BDS",              Icon: BookOpen     },
  { label: "B.Pharmacy",       Icon: Microscope   },
  { label: "Nursing",          Icon: Leaf         },
  { label: "Law (LLB)",        Icon: Scale        },
  { label: "MBA / PGDM",       Icon: BarChart3    },
  { label: "B.Tech (Mgt.)",    Icon: Settings2    },
];

const achievements = [
  { value: "5+",    label: "Years\nExperience", Icon: Trophy,  pct: 0.5,  max: 10  },
  { value: "1000+", label: "Happy\nStudents",   Icon: Users,   pct: 1.0,  max: 1000 },
  { value: "10+",   label: "Awards\nWon",       Icon: Trophy,  pct: 0.67, max: 15  },
  { value: "25+",   label: "Expert\nStaff",     Icon: Users,   pct: 0.83, max: 30  },
];

const testimonials = [
  {
    name: "Soni Singh",    role: "B.Tech Student",   location: "Patna", initials: "SS", rating: 5,
    quote: "I was looking for the best Engineering College for my brother. The Education Care helped me with it. They help in everything from taking admissions to shifting, everything.",
  },
  {
    name: "Shashank Sekhar", role: "MBBS Student",  location: "Bodh Gaya", initials: "SS", rating: 5,
    quote: "I wanted to do MBBS but was very confused while choosing the best college for me. After doing a lot of research, The Education Care helped me. Now, I am studying at a good college.",
  },
  {
    name: "Sadhna Jha",    role: "BDS Student",    location: "New Delhi", initials: "SJ", rating: 5,
    quote: "I wanted to do BDS but was very confused. They helped me. They also helped me with Student Credit Card Scheme.",
  },
  {
    name: "Rahul Kumar",   role: "MBA Student",    location: "Patna",    initials: "RK", rating: 5,
    quote: "The Consulting team helped me in both the college admissions as well as visa preparation. One of the best consultancy.",
  },
];

// ─── Circular Progress Ring ───────────────────────────────────────────────────

function RingBadge({ pct, value, label, size = 80 }: { pct: number; value: string; label: string; size?: number }) {
  const r = (size - 14) / 2;
  const circ = 2 * Math.PI * r;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={5} />
          <motion.circle
            cx={size/2} cy={size/2} r={r} fill="none"
            stroke="rgba(255,255,255,0.75)" strokeWidth={5} strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ * (1 - pct) } : {}}
            transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-black text-sm leading-none">{value}</span>
        </div>
      </div>
      <span className="text-white/30 text-[8px] uppercase tracking-widest text-center leading-tight whitespace-pre-line">{label}</span>
    </div>
  );
}

// ─── Scene wireframe floor grid ───────────────────────────────────────────────

function SceneGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 [mask-image:linear-gradient(to_top,black_15%,transparent_65%)]">
      <div className="absolute inset-[-60%] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:65px_65px] [transform:perspective(1200px)_rotateX(70deg)_translateY(18%)]" />
    </div>
  );
}

// ─── Glowing Data Path SVG ────────────────────────────────────────────────────

function DataPaths({ inView }: { inView: boolean }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1400 900" preserveAspectRatio="none">
      {[
        { d: "M 100 800 Q 400 600 700 650 Q 1000 700 1300 550", color: "rgba(255,255,255,0.12)", dash: "8 5" },
        { d: "M 50 500 Q 350 400 700 420 Q 1050 440 1350 300", color: "rgba(160,210,255,0.1)",   dash: "5 8" },
      ].map((p, i) => (
        <motion.path key={i} d={p.d} stroke={p.color} strokeWidth="1.5" fill="none" strokeDasharray={p.dash}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 3 + i * 0.6, delay: 0.5 + i * 0.4 }}
        />
      ))}
    </svg>
  );
}

// ─── Exam Terminal Card ───────────────────────────────────────────────────────

function ExamTerminal({ item, relOffset, onClick }: {
  item: typeof examTerminals[0]; relOffset: number; onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const isActive = relOffset === 0;
  const { Icon } = item;

  const layout = (() => {
    switch (relOffset) {
      case -1: return { x: -280, scale: 0.84, rotateY: 22,  zIndex: 5,  opacity: 0.55 };
      case  0: return { x:    0, scale: 1.07, rotateY:  0,  zIndex: 20, opacity: 1    };
      case  1: return { x:  280, scale: 0.84, rotateY: -22, zIndex: 5,  opacity: 0.55 };
      default:  return { x:  600, scale: 0.6,  rotateY: -40, zIndex: 1,  opacity: 0    };
    }
  })();

  return (
    <motion.div
      className="absolute"
      animate={{ x: layout.x, scale: layout.scale, rotateY: layout.rotateY, opacity: layout.opacity, zIndex: layout.zIndex, y: hovered && isActive ? -8 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 22 }}
      style={{ transformStyle: "preserve-3d", cursor: isActive ? "default" : "pointer" }}
      onClick={() => !isActive && onClick()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: relOffset * 0.8 }}>
        <div className={`relative w-64 h-[420px] rounded-3xl flex flex-col overflow-hidden transition-all duration-500
          ${isActive
            ? "bg-zinc-900/80 backdrop-blur-2xl border border-white/35 shadow-[0_0_50px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]"
            : "bg-zinc-900/40 backdrop-blur-xl border border-white/8"}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Rim highlight */}
          <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Scanline sweep on active */}
          {isActive && (
            <motion.div
              className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-white/4 to-transparent pointer-events-none z-30"
              animate={{ y: [-64, 420] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
            />
          )}

          {/* Date badge */}
          <div className="px-5 pt-5">
            <span className="inline-block px-3 py-1 rounded-full bg-white/8 border border-white/15 text-white/50 text-[8px] font-black tracking-[0.25em] uppercase">
              {item.badge}
            </span>
          </div>

          {/* Icon pedestal */}
          <div className="h-40 flex items-center justify-center relative">
            <div className="absolute w-24 h-24 rounded-full bg-white/4 blur-2xl" />
            <motion.div
              animate={hovered && isActive ? { scale: 1.2, y: -12 } : { scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.6)) drop-shadow(0 10px 22px rgba(0,0,0,0.5))" }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
                <Icon className="w-14 h-14 text-white" strokeWidth={1} />
              </motion.div>
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="px-5 pb-5 flex flex-col flex-1">
            <h3 className="text-white font-black text-base tracking-tight mb-3">{item.title}</h3>

            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.p key="full" initial={{ opacity: 0, filter: "blur(4px)" }} animate={{ opacity: 1, filter: "blur(0)" }} exit={{ opacity: 0 }}
                  className="text-white/50 text-xs leading-relaxed flex-1 mb-4">
                  {item.desc}
                </motion.p>
              ) : (
                <motion.p key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-white/25 text-xs leading-relaxed flex-1 mb-4 line-clamp-3">
                  {item.desc}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="h-px bg-white/8 mb-4" />

            {isActive ? (
              <div className="space-y-2">
                <Button asChild className="w-full bg-white text-black hover:bg-zinc-100 font-black tracking-widest uppercase text-[10px] py-5 rounded-xl relative overflow-hidden group">
                  <a href={item.href}>
                    <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 translate-x-[-100%]" />
                    {item.ctaLabel} <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </Button>
                <a href={item.href} className="block text-center text-white/30 text-[9px] uppercase tracking-widest hover:text-white/60 transition-colors font-black">
                  EXPLORE NOW →
                </a>
              </div>
            ) : (
              <a href={item.href} className="text-white/25 text-[9px] uppercase tracking-widest hover:text-white/50 transition-colors font-black">
                Read More →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Course Node Path ─────────────────────────────────────────────────────────

function CourseNodePath({ inView }: { inView: boolean }) {
  return (
    <div className="relative py-12 overflow-x-auto">
      {/* SVG connection line */}
      <svg className="absolute top-1/2 left-0 w-full h-2 pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 100 2">
        <motion.line x1="0" y1="1" x2="100" y2="1" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" strokeDasharray="2 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2.5, delay: 0.3 }}
        />
      </svg>

      <div className="flex gap-6 justify-center flex-wrap md:flex-nowrap min-w-max mx-auto px-4">
        {courseNodes.map(({ label, Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.07 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300
                ${i === 0
                  ? "bg-white/15 border-white/40 scale-110 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-white/5 border-white/10 group-hover:bg-white/12 group-hover:border-white/30"}`}
                style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.15))" }}
              >
                <Icon className="w-6 h-6 text-white" strokeWidth={1.2} />
              </div>
              <span className="text-white/50 text-[10px] font-black uppercase tracking-wide text-center leading-tight group-hover:text-white/80 transition-colors max-w-[70px]">
                {label}
              </span>
              {/* Node dot connector */}
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/60 group-hover:shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Floating Chat Bubble ─────────────────────────────────────────────────────

function FloatingChatBubble() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
    >
      <motion.a
        href="tel:06207013805"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-2.5 bg-zinc-900/90 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-white/35 transition-all group"
        aria-label="Contact us"
      >
        <div className="w-8 h-8 rounded-full bg-white/8 border border-white/20 flex items-center justify-center">
          <span className="text-white font-black text-xs">N</span>
        </div>
        <div className="hidden sm:block">
          <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Contact Me</p>
          <p className="text-white/30 text-[9px]">Education Care</p>
        </div>
        <MessageCircle className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
      </motion.a>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function LatestNews() {
  const [activeCard, setActiveCard] = useState(1); // NEET center
  const [activeTesti, setActiveTesti] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-400, 400], [4, -4]);
  const rotateY = useTransform(mouseX, [-700, 700], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };

  // Auto-advance terminals
  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => setActiveCard((p) => (p + 1) % examTerminals.length), 5000);
    return () => clearInterval(id);
  }, [isInView, activeCard]);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => setActiveTesti((p) => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, [isInView, activeTesti]);

  return (
    <>
      <FloatingChatBubble />

      <section
        ref={sectionRef}
        className="relative bg-black overflow-hidden py-28"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      >
        <SceneGrid />

        {/* Ambient glow orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-white/3 blur-[130px]"
            animate={{ x: ["0%", "25%", "0%"], y: ["0%", "15%", "0%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-blue-900/8 blur-[120px]"
            animate={{ x: ["0%", "-20%", "0%"], y: ["0%", "-10%", "0%"] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <DataPaths inView={isInView} />

        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ perspective: "1200px", transformStyle: "preserve-3d", rotateX, rotateY }}
        >
          {/* ── Section Header ── */}
          <motion.div className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <p className="text-zinc-600 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Stay Updated</p>
            <h2 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight mb-5 leading-tight">
              Transforming Ways<br className="hidden md:block" /> of Education
            </h2>
            <div className="w-16 h-px bg-white/25 mx-auto mb-5" />
            <p className="text-white/30 text-sm max-w-xl mx-auto leading-relaxed">
              Consulting is the heart of our Students, and our Students are the Heartbeat. The Education Care is an Education Consultancy providing a professional platform for students seeking career assistance, guidance, and support.
            </p>
          </motion.div>

          {/* ── Main 3-panel grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* LEFT — Achievement Spires */}
            <div className="lg:col-span-3 space-y-4">
              <motion.p className="text-white/20 text-[8px] uppercase tracking-[0.3em] font-black mb-5"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
                Numbers That Speak · Achievement Pedestals
              </motion.p>

              {achievements.map((a, i) => (
                <motion.div key={a.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12 }}
                >
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className="group rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-white/8 p-4 hover:border-white/25 hover:shadow-[0_0_25px_rgba(255,255,255,0.07)] transition-all duration-500 flex items-center gap-4"
                  >
                    <RingBadge pct={a.pct} value={a.value} label={a.label} size={70} />
                    <div>
                      <p className="text-white/25 text-[8px] uppercase tracking-widest font-black">{a.label.replace('\n', ' ')}</p>
                      <div className="mt-1 h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-white/40 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${a.pct * 100}%` } : {}}
                          transition={{ duration: 1.8, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CENTER — Holographic Terminals */}
            <div className="lg:col-span-6">
              <div className="relative" style={{ perspective: "1000px" }}>
                <div className="relative flex items-center justify-center h-[480px]">
                  {examTerminals.map((item, idx) => {
                    let rel = idx - activeCard;
                    const half = examTerminals.length / 2;
                    if (rel > half) rel -= examTerminals.length;
                    if (rel < -half) rel += examTerminals.length;
                    return (
                      <ExamTerminal key={item.id} item={item} relOffset={rel} onClick={() => setActiveCard(idx)} />
                    );
                  })}
                </div>

                {/* Terminal dots */}
                <div className="flex justify-center gap-2.5 mt-4">
                  {examTerminals.map((_, i) => (
                    <button key={i} onClick={() => setActiveCard(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === activeCard ? "w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "w-2 bg-white/15 hover:bg-white/35"}`}
                      aria-label={`Terminal ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Course node path */}
              <motion.div className="mt-8"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}>
                <p className="text-white/20 text-[8px] uppercase tracking-[0.3em] font-black text-center mb-4">Course Path Explorer</p>
                <CourseNodePath inView={isInView} />
              </motion.div>
            </div>

            {/* RIGHT — Testimonial Pavilion */}
            <div className="lg:col-span-3 space-y-3">
              <motion.p className="text-white/20 text-[8px] uppercase tracking-[0.3em] font-black mb-5"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
                What Students Say · Pavilion
              </motion.p>

              {testimonials.map((t, i) => (
                <motion.div key={t.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.12 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                    onClick={() => setActiveTesti(i)}
                    className={`relative rounded-2xl p-4 border cursor-pointer transition-all duration-500 overflow-hidden
                      ${i === activeTesti
                        ? "bg-zinc-900/80 backdrop-blur-2xl border-white/30 shadow-[0_0_35px_rgba(255,255,255,0.08)]"
                        : "bg-zinc-900/40 backdrop-blur-xl border-white/6 hover:border-white/18"}`}
                  >
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

                    {i === activeTesti && (
                      <Quote className="w-5 h-5 text-white/10 mb-2" />
                    )}

                    <AnimatePresence mode="wait">
                      {i === activeTesti ? (
                        <motion.p key="q" initial={{ opacity: 0, filter: "blur(4px)" }} animate={{ opacity: 1, filter: "blur(0)" }} exit={{ opacity: 0 }}
                          className="text-white/65 text-[11px] leading-relaxed mb-3 italic">
                          &ldquo;{t.quote}&rdquo;
                        </motion.p>
                      ) : (
                        <motion.p key="p" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="text-white/25 text-[10px] leading-relaxed mb-3 line-clamp-2">
                          {t.quote}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-white/8 border border-white/15 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-black text-[10px]">{t.initials}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-black text-[11px] truncate">{t.name}</p>
                        <p className="text-white/30 text-[9px] truncate">{t.role}</p>
                      </div>
                      <div className="flex gap-0.5 flex-shrink-0">
                        {Array.from({ length: t.rating }).map((_, si) => (
                          <Star key={si} className="w-2 h-2 fill-white text-white" />
                        ))}
                      </div>
                    </div>

                    {i === activeTesti && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
                        <Button asChild className="w-full bg-white text-black hover:bg-zinc-100 font-black uppercase tracking-widest text-[9px] py-3.5 rounded-xl relative overflow-hidden group">
                          <a href="/testimonials">
                            <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 translate-x-[-100%]" />
                            Explore Campus
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}

              {/* Pavilion navigation */}
              <div className="flex items-center gap-2 pt-1">
                <button onClick={() => setActiveTesti((p) => (p - 1 + testimonials.length) % testimonials.length)}
                  className="w-7 h-7 rounded-full border border-white/12 flex items-center justify-center text-white/30 hover:text-white hover:border-white/35 transition-all" aria-label="Prev">
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <div className="flex gap-1.5 flex-1">
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setActiveTesti(i)}
                      className={`h-1 rounded-full transition-all duration-500 ${i === activeTesti ? "flex-1 bg-white shadow-[0_0_6px_rgba(255,255,255,0.5)]" : "w-4 bg-white/12 hover:bg-white/30"}`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button onClick={() => setActiveTesti((p) => (p + 1) % testimonials.length)}
                  className="w-7 h-7 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-white/40 hover:bg-white/18 transition-all" aria-label="Next">
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* ── Scroll indicator ── */}
          <motion.div className="flex flex-col items-center mt-16 gap-1 opacity-20"
            animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="w-4 h-4 text-white" />
            <ChevronDown className="w-4 h-4 text-white -mt-2" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
