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
  Scale,
  GraduationCap,
  MessageCircle,
  University,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Service Data ─────────────────────────────────────────────────────────────

const services = [
  {
    id: "career",
    title: "Career Counseling",
    subtitle: "GUIDANCE",
    desc: "We have developed a proven strategy producing positive results in helping students find the right career path.",
    href: "/career",
    Icon: MessageCircle,
    accentLabel: "GET STARTED",
    depth: 0,
  },
  {
    id: "university",
    title: "University Selection",
    subtitle: "SELECTION",
    desc: "Our expert counselors help students select universities that best suit their personal, academic, and financial goals.",
    href: "/university-selection",
    Icon: University,
    accentLabel: "EXPLORE",
    depth: 1,
  },
  {
    id: "admission",
    title: "Admission Guidance",
    subtitle: "ADMISSIONS",
    desc: "We provide the right Admission guidance and all the information needed towards successful completion of the process.",
    href: "/admission-guidance",
    Icon: GraduationCap,
    accentLabel: "APPLY NOW",
    depth: 2,
  },
  {
    id: "entrance",
    title: "Entrance Exam Guidance",
    subtitle: "EXAMS",
    desc: "Practice clearing entrance exams at different levels with strategic guidance from our experienced mentors.",
    href: "/entrance-exam-guidance",
    Icon: Settings2,
    accentLabel: "LEARN MORE",
    depth: 3,
  },
  {
    id: "virtual",
    title: "Virtual Counselling",
    subtitle: "ONLINE",
    desc: "Online career counseling saves time with instant access to expert advisors — no appointment needed.",
    href: "/virtual-counselling",
    Icon: Scale,
    accentLabel: "JOIN NOW",
    depth: 4,
  },
];

// ─── 3D Fan layout per relative offset ───────────────────────────────────────

function getPanelLayout(relOffset: number): {
  x: number; scale: number; rotateY: number; zIndex: number; opacity: number; z: number;
} {
  switch (relOffset) {
    case -2: return { x: -520, scale: 0.72, rotateY: 28,  zIndex: 3,  opacity: 0.3, z: -300 };
    case -1: return { x: -290, scale: 0.86, rotateY: 20,  zIndex: 7,  opacity: 0.6, z: -150 };
    case  0: return { x:    0, scale: 1.06, rotateY:  0,  zIndex: 20, opacity: 1,   z: 0    };
    case  1: return { x:  290, scale: 0.86, rotateY: -20, zIndex: 7,  opacity: 0.6, z: -150 };
    case  2: return { x:  520, scale: 0.72, rotateY: -28, zIndex: 3,  opacity: 0.3, z: -300 };
    default:  return { x:  900, scale: 0.6,  rotateY: -45, zIndex: 1,  opacity: 0,   z: -600 };
  }
}

// ─── Chrome 3D Icon with pedestal ────────────────────────────────────────────

function ChromeIcon({ Icon, hovered, isActive }: { Icon: React.FC<{ className?: string; strokeWidth?: number }>; hovered: boolean; isActive: boolean }) {
  return (
    <div className="h-48 flex flex-col items-center justify-center relative overflow-hidden shrink-0">
      {/* Radial ambient glow */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-white/10 blur-2xl"
        animate={{ scale: hovered && isActive ? 1.4 : 1, opacity: hovered && isActive ? 0.35 : 0.12 }}
        transition={{ duration: 0.6 }}
      />

      {/* Spinning ring behind icon */}
      <motion.div
        className="absolute w-28 h-28 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-20 h-20 rounded-full border border-dashed border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* The Icon itself */}
      <motion.div
        animate={
          hovered && isActive
            ? { scale: 1.25, y: -14, rotateY: 20 }
            : { scale: 1,    y: 0,   rotateY: 0  }
        }
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{
          filter: "drop-shadow(0 0 22px rgba(255,255,255,0.65)) drop-shadow(0 10px 24px rgba(0,0,0,0.5))",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Slow-spin wrapper */}
        <motion.div
          animate={{ rotate: hovered && isActive ? 0 : 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
          <Icon className="w-16 h-16 text-white" strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Pedestal reflection line */}
      <div className="absolute bottom-4 w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}

// ─── Individual Service Card ──────────────────────────────────────────────────

function ServiceCard({
  service,
  relOffset,
  floatDelay,
  isActive,
  onClick,
}: {
  service: typeof services[0];
  relOffset: number;
  floatDelay: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const layout = getPanelLayout(relOffset);

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{
        x: layout.x,
        scale: layout.scale,
        rotateY: layout.rotateY,
        opacity: layout.opacity,
        zIndex: layout.zIndex,
        y: hovered && isActive ? -10 : 0,
      }}
      transition={{ type: "spring", stiffness: 110, damping: 20 }}
      style={{ transformStyle: "preserve-3d", cursor: isActive ? "default" : "pointer" }}
      onClick={() => { if (!isActive) onClick(); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating physics layer */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + floatDelay, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
      >
        {/* Card shell */}
        <div
          className={`relative w-64 h-[440px] rounded-3xl flex flex-col overflow-hidden
            transition-all duration-500
            ${isActive
              ? "bg-zinc-900/70 backdrop-blur-2xl border border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]"
              : "bg-zinc-900/40 backdrop-blur-xl border border-white/8"
            }
          `}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Inner highlight rim at top */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Subtitle label */}
          <div className="px-5 pt-5">
            <span className="text-white/30 text-[9px] font-black tracking-[0.35em] uppercase">
              {service.subtitle}
            </span>
          </div>

          {/* Chrome icon */}
          <ChromeIcon Icon={service.Icon} hovered={hovered} isActive={isActive} />

          {/* Content */}
          <div className="px-5 pb-5 flex flex-col flex-1">
            <h3 className={`text-white font-black text-base tracking-tight leading-snug mb-3 transition-all duration-300 ${isActive ? "text-white" : "text-white/80"}`}>
              {service.title}
            </h3>
            <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">
              {service.desc}
            </p>

            {/* Divider */}
            <div className="h-px bg-white/8 mb-4" />

            {/* CTA */}
            {isActive ? (
              <div className="space-y-2">
                <Button asChild className="w-full bg-white text-black hover:bg-zinc-100 font-black tracking-[0.15em] uppercase text-[10px] py-5 rounded-xl relative overflow-hidden group">
                  <a href={service.href}>
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 translate-x-[-100%]" />
                    Explore Campus <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </Button>
                <a
                  href={service.href}
                  className="block text-center text-white/40 text-[10px] uppercase tracking-widest hover:text-white/70 transition-colors"
                >
                  Read More →
                </a>
              </div>
            ) : (
              <a
                href={service.href}
                className="text-white/30 text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors font-black"
              >
                {service.accentLabel} →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Data Stream SVG Paths ────────────────────────────────────────────────────

function DataStreams({ inView }: { inView: boolean }) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-0"
      viewBox="0 0 1400 100"
      fill="none"
      preserveAspectRatio="none"
    >
      {[
        "M 0 80 Q 350 20 700 60 Q 1050 90 1400 40",
        "M 0 60 Q 400 90 700 50 Q 1000 20 1400 70",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={i === 0 ? "rgba(180,220,255,0.2)" : "rgba(255,255,255,0.1)"}
          strokeWidth="1"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2.5 + i * 0.6, delay: 0.5 + i * 0.3 }}
        />
      ))}
      {/* Travelling glow dot */}
      {inView && (
        <motion.circle
          r="3"
          fill="rgba(180,220,255,0.8)"
          style={{ filter: "blur(1px) drop-shadow(0 0 8px #a0d0ff)" }}
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, repeatDelay: 3 }}
        />
      )}
    </svg>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function CoreServices() {
  const [activeCard, setActiveCard] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Auto-rotate
  useEffect(() => {
    if (!isInView || paused) return;
    const id = setInterval(() => {
      setActiveCard((p) => (p + 1) % services.length);
    }, 4500);
    return () => clearInterval(id);
  }, [isInView, paused, activeCard]);

  // Mouse-parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateXScene = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateYScene = useTransform(mouseX, [-600, 600], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const prev = () => { setPaused(true); setActiveCard((p) => (p - 1 + services.length) % services.length); };
  const next = () => { setPaused(true); setActiveCard((p) => (p + 1) % services.length); };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); setPaused(false); }}
    >
      {/* 3D wireframe floor grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 [mask-image:linear-gradient(to_top,black_25%,transparent_70%)]">
        <div className="absolute inset-[-60%] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px] [transform:perspective(1200px)_rotateX(70deg)_translateY(15%)]" />
      </div>

      {/* Background mesh glow — slowly shifts */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full bg-white/4 blur-[140px]"
          animate={{ x: ["10%", "60%", "10%"], y: ["20%", "60%", "20%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: 0, left: 0 }}
        />
      </div>

      {/* Data streams on floor */}
      <DataStreams inView={isInView} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-zinc-600 uppercase tracking-[0.35em] text-[10px] font-black mb-4">
            What We Offer
          </p>
          <h2 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight mb-5">
            Core Services
          </h2>
          <div className="w-16 h-px bg-white/25 mx-auto" />
          <p className="text-white/30 text-sm mt-5 max-w-lg mx-auto leading-relaxed">
            The Education Care is a Private Education Consultancy providing expert services for students pursuing higher education.
          </p>
        </motion.div>

        {/* ── DESKTOP: 3D Staggered Stack ── */}
        <motion.div
          className="hidden md:block relative"
          style={{ perspective: "1200px", transformStyle: "preserve-3d", rotateX: rotateXScene, rotateY: rotateYScene }}
        >
          <div className="relative flex items-center justify-center h-[520px]">
            {services.map((svc, idx) => {
              let rel = idx - activeCard;
              const half = services.length / 2;
              if (rel > half)  rel -= services.length;
              if (rel < -half) rel += services.length;

              return (
                <ServiceCard
                  key={svc.id}
                  service={svc}
                  relOffset={rel}
                  floatDelay={idx * 0.7}
                  isActive={rel === 0}
                  onClick={() => { setPaused(true); setActiveCard(idx); }}
                />
              );
            })}
          </div>

          {/* Data Streams */}
          <DataStreams inView={isInView} />
        </motion.div>

        {/* ── MOBILE: Vertical list ── */}
        <div className="md:hidden flex flex-col gap-4">
          {services.map((svc, idx) => {
            const { Icon } = svc;
            const isActive = idx === activeCard;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-5 border cursor-pointer ${isActive ? "bg-zinc-900/80 border-white/25 shadow-[0_0_25px_rgba(255,255,255,0.08)]" : "bg-zinc-900/40 border-white/8"}`}
                onClick={() => setActiveCard(idx)}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-black text-sm tracking-tight">{svc.title}</h3>
                </div>
                <p className="text-white/40 text-xs leading-relaxed mb-3">{svc.desc}</p>
                {isActive && (
                  <Button asChild className="w-full bg-white text-black hover:bg-zinc-100 font-black uppercase tracking-widest text-xs py-5 rounded-xl">
                    <a href={svc.href}>Explore Campus</a>
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Controls & dots */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={prev}
            aria-label="Previous service"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex gap-2.5">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPaused(true); setActiveCard(i); }}
                aria-label={`Go to service ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeCard ? "w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "w-2 bg-white/15 hover:bg-white/35"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next service"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-12 gap-1 opacity-30"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white" />
          <ChevronDown className="w-4 h-4 text-white -mt-2" />
        </motion.div>
      </div>
    </section>
  );
}
