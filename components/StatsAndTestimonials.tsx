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
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Settings2,
  Users,
  Trophy,
  MapPin,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: "Soni Singh",
    location: "Patna, Bihar",
    role: "B.Tech Student",
    quote:
      "I was looking for the best Engineering College for my brother. The Education Care helped me with it. They help in everything from taking admissions to shifting, everything.",
    rating: 5,
    initials: "SS",
  },
  {
    name: "Shashank Sekhar",
    location: "Bodh Gaya, Bihar",
    role: "MBBS Student",
    quote:
      "I wanted to do MBBS but was very confused while choosing the best college for me. After doing a lot of research, The Education Care helped me. Now, I am studying at a good college.",
    rating: 5,
    initials: "SS",
  },
  {
    name: "Sadhna Jha",
    location: "New Delhi",
    role: "BDS Student",
    quote:
      "I wanted to do BDS but was very confused while choosing the best college for me. After doing a lot of research, They helped me. They also helped me with Student Credit Card Scheme.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Rahul Kumar",
    location: "Patna, Bihar",
    role: "Management Student",
    quote:
      "The Consulting team helped me in both the college admissions as well as the visa preparation. I had very good experience with The Education Care. One of the best consultancy.",
    rating: 5,
    initials: "RK",
  },
];

const experts = [
  { name: "Soni Singh",    title: "Lead Counselor",      initials: "SS" },
  { name: "Danical Singh", title: "Admission Advisor",   initials: "DS" },
  { name: "Markam Moldar", title: "Career Specialist",   initials: "MM" },
];

// ─── Circular Progress Badge ──────────────────────────────────────────────────

function CircularBadge({ value, max = 100, label, size = 88 }: { value: number; max?: number; label: string; size?: number }) {
  const r = (size - 16) / 2;
  const circ = 2 * Math.PI * r;
  const pct = value / max;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={6} />
          <motion.circle
            cx={size / 2} cy={size / 2} r={r}
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ * (1 - pct) } : {}}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white font-black text-sm leading-none">{value}{value >= max ? "" : "+"}</span>
        </div>
      </div>
      <span className="text-white/30 text-[9px] uppercase tracking-widest text-center leading-tight">{label}</span>
    </div>
  );
}

// ─── Branching SVG Paths ──────────────────────────────────────────────────────

function BranchingPaths({ inView }: { inView: boolean }) {
  const paths = [
    { d: "M 300 50 Q 500 200 700 300 Q 900 400 1100 350", color: "rgba(255,255,255,0.15)", dash: "8 5" },
    { d: "M 100 400 Q 300 350 600 380 Q 900 410 1200 300", color: "rgba(160,210,255,0.12)", dash: "4 8" },
    { d: "M 50 600 Q 300 500 700 520 Q 1000 540 1300 480", color: "rgba(255,255,255,0.08)", dash: "6 6" },
  ];
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1400 700">
      {paths.map((p, i) => (
        <motion.path
          key={i}
          d={p.d}
          stroke={p.color}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray={p.dash}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 3 + i * 0.5, delay: 0.5 + i * 0.4 }}
        />
      ))}
      {/* Travelling dots */}
      {inView && paths.map((_, i) => (
        <motion.circle key={`dot-${i}`} r="3" fill="rgba(180,220,255,0.7)"
          style={{ filter: "drop-shadow(0 0 6px #a0d0ff)" }}
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4 + i, delay: 1.5 + i * 0.8, repeat: Infinity, repeatDelay: 2 + i }}
        />
      ))}
    </svg>
  );
}

// ─── Achievement Monolith Card ────────────────────────────────────────────────

function AchievementMonolith({ title, subtitle, Icon, stats, delay }: {
  title: string; subtitle: string; Icon: React.FC<{className?: string; strokeWidth?: number}>;
  stats: { label: string; value: string | number; max?: number }[];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        className={`relative rounded-3xl p-6 border transition-all duration-500 overflow-hidden
          ${hovered ? "bg-zinc-900/80 border-white/25 shadow-[0_0_40px_rgba(255,255,255,0.08)]" : "bg-zinc-900/50 border-white/8 backdrop-blur-xl"}`}
      >
        {/* Inner rim */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Icon area */}
        <div className="flex items-center gap-3 mb-5">
          <motion.div
            className="w-12 h-12 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center"
            animate={{ rotate: hovered ? 360 : 0 }}
            transition={{ duration: hovered ? 0.8 : 0, ease: "easeInOut" }}
            style={{ filter: hovered ? "drop-shadow(0 0 12px rgba(255,255,255,0.4))" : "none" }}
          >
            <Icon className="w-6 h-6 text-white" strokeWidth={1.2} />
          </motion.div>
          <div>
            <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-black">{subtitle}</p>
            <h3 className="text-white font-black text-sm leading-tight">{title}</h3>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex justify-around gap-2">
          {stats.map((s) => (
            typeof s.value === "number" && s.max
              ? <CircularBadge key={s.label} value={s.value} max={s.max} label={s.label} size={76} />
              : (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="text-white font-black text-xl">{s.value}</span>
                  <span className="text-white/30 text-[9px] uppercase tracking-widest text-center">{s.label}</span>
                </div>
              )
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────

function TestimonialCard({ t, isActive, onClick }: { t: typeof testimonials[0]; isActive: boolean; onClick: () => void }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative rounded-3xl border cursor-pointer overflow-hidden transition-all duration-500 p-6
        ${isActive
          ? "bg-zinc-900/80 backdrop-blur-2xl border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          : "bg-zinc-900/40 backdrop-blur-xl border-white/8 hover:border-white/20"
        }`}
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Quote icon */}
      <Quote className="w-8 h-8 text-white/10 mb-4" />

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.p
            key="quote"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/70 text-sm leading-relaxed mb-5 italic"
          >
            &ldquo;{t.quote}&rdquo;
          </motion.p>
        )}
        {!isActive && (
          <motion.p
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/30 text-xs leading-relaxed mb-5 line-clamp-2"
          >
            {t.quote}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-sm">{t.initials}</span>
        </div>
        <div>
          <p className="text-white font-black text-sm">{t.name}</p>
          <p className="text-white/40 text-xs">{t.role} · {t.location}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-white text-white" />
          ))}
        </div>
      </div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex gap-2"
        >
          <Button asChild className="flex-1 bg-white text-black hover:bg-zinc-100 font-black tracking-widest uppercase text-[10px] py-4 rounded-xl relative overflow-hidden group">
            <a href="/testimonials">
              <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 translate-x-[-100%]" />
              Explore Campus <ArrowRight className="ml-1 w-3 h-3" />
            </a>
          </Button>
          <a href="/testimonials" className="flex items-center gap-1 text-white/30 text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors font-black whitespace-nowrap">
            Read More →
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function StatsAndTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-400, 400], [4, -4]);
  const rotateY = useTransform(mouseX, [-700, 700], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  // Auto-cycle testimonials
  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [isInView, activeTestimonial]);

  const prev = () => setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveTestimonial((p) => (p + 1) % testimonials.length);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden py-28"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      {/* 3D wireframe floor grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 [mask-image:linear-gradient(to_top,black_20%,transparent_70%)]">
        <div className="absolute inset-[-60%] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:65px_65px] [transform:perspective(1200px)_rotateX(68deg)_translateY(18%)]" />
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/3 blur-[130px]"
          animate={{ x: ["0%", "30%", "0%"], y: ["0%", "20%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-900/8 blur-[120px]"
          animate={{ x: ["0%", "-20%", "0%"], y: ["0%", "-15%", "0%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Branching SVG paths */}
      <BranchingPaths inView={isInView} />

      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{ perspective: "1200px", transformStyle: "preserve-3d", rotateX, rotateY }}
      >
        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-zinc-600 uppercase tracking-[0.35em] text-[10px] font-black mb-4">Our Students & Achievements</p>
          <h2 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight mb-5 leading-tight">
            Transforming Ways<br className="hidden md:block" /> of Education
          </h2>
          <div className="w-16 h-px bg-white/25 mx-auto mb-5" />
          <p className="text-white/30 text-sm max-w-xl mx-auto leading-relaxed">
            Consulting is the heart of our Students, and our Students are the Heartbeat. The Education Care is an Education Consultancy providing a professional platform for students seeking career assistance.
          </p>
        </motion.div>

        {/* ── Main Grid: Left Monoliths + Right Testimonials ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: Achievement Monoliths (2×2) ── */}
          <div className="space-y-5">
            <motion.p
              className="text-white/20 uppercase tracking-[0.3em] text-[9px] font-black mb-6"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            >
              Numbers That Speak · Achievement Pedestals
            </motion.p>

            <div className="grid grid-cols-2 gap-5">
              {/* University Monolith */}
              <div className="col-span-2">
                <AchievementMonolith
                  delay={0.2}
                  title="Bharati Vidyapeeth"
                  subtitle="Featured University"
                  Icon={GraduationCap}
                  stats={[
                    { label: "Years Since\nFounded", value: "1964" },
                    { label: "Happy\nStudents", value: 1000, max: 1000 },
                    { label: "Courses\nOffered", value: "135+" },
                  ]}
                />
              </div>

              {/* Stats: Years */}
              <AchievementMonolith
                delay={0.4}
                title="Our Experience"
                subtitle="Years in Service"
                Icon={Trophy}
                stats={[
                  { label: "Years\nExp.", value: 5, max: 10 },
                  { label: "Awards\nWon", value: 10, max: 15 },
                ]}
              />

              {/* Stats: Team */}
              <AchievementMonolith
                delay={0.6}
                title="Expert Team"
                subtitle="Our Strength"
                Icon={Users}
                stats={[
                  { label: "Expert\nStaff", value: 25, max: 30 },
                  { label: "Students\nHelped", value: 100, max: 100 },
                ]}
              />
            </div>

            {/* Bihar watermark label */}
            <motion.div
              className="flex items-center gap-2 text-white/15 text-xs mt-3"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1 }}
            >
              <MapPin className="w-3 h-3" />
              <span className="uppercase tracking-[0.2em] text-[9px] font-black">Leading Consultancy in Bihar</span>
            </motion.div>
          </div>

          {/* ── RIGHT: Testimonial Cascade ── */}
          <div className="space-y-4">
            <motion.p
              className="text-white/20 uppercase tracking-[0.3em] text-[9px] font-black mb-6"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
            >
              What Students Say · Testimonials
            </motion.p>

            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <TestimonialCard
                  t={t}
                  isActive={i === activeTestimonial}
                  onClick={() => setActiveTestimonial(i)}
                />
              </motion.div>
            ))}

            {/* Navigation */}
            <div className="flex items-center gap-3 pt-2">
              <button onClick={prev} aria-label="Previous" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2 flex-1">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} aria-label={`Testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeTestimonial ? "w-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "w-2 bg-white/15 hover:bg-white/35"}`}
                  />
                ))}
              </div>
              <button onClick={next} aria-label="Next" className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Meet Our Experts ── */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-white/25 uppercase tracking-[0.35em] text-[9px] font-black mb-2">Our Team</p>
              <h3 className="text-white font-extrabold text-3xl md:text-4xl tracking-tight">Meet Our Experts</h3>
            </div>
            <a href="/team" className="text-white/30 text-xs uppercase tracking-widest hover:text-white transition-colors font-black flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {experts.map((expert, i) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 + i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-white/8 p-6 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 cursor-pointer"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-white/8 border border-white/15 flex items-center justify-center mb-4 mx-auto group-hover:border-white/30 transition-colors duration-300"
                  style={{ filter: "drop-shadow(0 0 12px rgba(255,255,255,0.12))" }}>
                  <span className="text-white font-black text-xl">{expert.initials}</span>
                </div>

                <div className="text-center">
                  <h4 className="text-white font-black text-sm mb-1">{expert.name}</h4>
                  <p className="text-white/35 text-xs uppercase tracking-widest">{expert.title}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/6">
                  <a href="/team" className="block text-center text-white/25 text-[9px] uppercase tracking-widest hover:text-white/60 transition-colors font-black">
                    View Profile →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom ghost CTA ── */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.3 }}
        >
          <Button asChild className="bg-white text-black hover:bg-zinc-100 font-black tracking-[0.15em] uppercase text-xs py-6 px-10 rounded-2xl relative overflow-hidden group">
            <a href="/consultation">
              <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 translate-x-[-100%]" />
              Meet Our Experts
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <a href="/about" className="border border-white/15 text-white/50 hover:border-white/40 hover:text-white transition-all font-black uppercase tracking-widest text-xs py-6 px-10 rounded-2xl">
            Learn More →
          </a>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="flex flex-col items-center mt-14 gap-1 opacity-20"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white" />
          <ChevronDown className="w-4 h-4 text-white -mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
