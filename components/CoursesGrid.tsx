"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Settings, Compass, FlaskConical, Building2, Stethoscope, SmilePlus, Pill, Leaf, Beaker, PersonStanding, Scale, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  // Top row (6)
  { Icon: Settings, title: "B.Tech / B.E", href: "/b-tech", row: 0 },
  { Icon: Compass, title: "Diploma", href: "/diploma", row: 0 },
  { Icon: FlaskConical, title: "M.Tech", href: "/m-tech", row: 0 },
  { Icon: Building2, title: "Polytechnic", href: "/polytechnic", row: 0 },
  { Icon: Stethoscope, title: "Study MBBS", href: "/mbbs", row: 0 },
  { Icon: SmilePlus, title: "BDS", href: "/bds", row: 0 },
  // Bottom row (6)
  { Icon: Pill, title: "Bsc Nursing", href: "/nursing", row: 1 },
  { Icon: Leaf, title: "BAMS", href: "/bams", row: 1 },
  { Icon: Beaker, title: "B.Pharma", href: "/b-pharma", row: 1 },
  { Icon: PersonStanding, title: "BPT", href: "/bpt", row: 1 },
  { Icon: Scale, title: "BALLB", href: "/law", row: 1 },
  { Icon: BarChart3, title: "MBA", href: "/mba", row: 1 },
];

const topRow = courses.filter((c) => c.row === 0);
const bottomRow = courses.filter((c) => c.row === 1);

// SVG path that branches from center to nodes
function ConnectingPaths({ inView }: { inView: boolean }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      {/* Center trunk line */}
      <motion.line
        x1="600" y1="250" x2="600" y2="50"
        stroke="white"
        strokeWidth="1"
        strokeOpacity={0.3}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.line
        x1="600" y1="250" x2="600" y2="450"
        stroke="white"
        strokeWidth="1"
        strokeOpacity={0.3}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Top row branches */}
      {topRow.map((_, i) => {
        const x = 100 + i * 200;
        return (
          <motion.path
            key={`top-${i}`}
            d={`M 600 120 Q ${600 + (x - 600) * 0.5} 60 ${x} 80`}
            stroke="white"
            strokeWidth="1"
            strokeOpacity={0.2}
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
          />
        );
      })}

      {/* Bottom row branches */}
      {bottomRow.map((_, i) => {
        const x = 100 + i * 200;
        return (
          <motion.path
            key={`bot-${i}`}
            d={`M 600 380 Q ${600 + (x - 600) * 0.5} 440 ${x} 420`}
            stroke="white"
            strokeWidth="1"
            strokeOpacity={0.2}
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + i * 0.15 }}
          />
        );
      })}

      {/* Horizontal connecting lines per row */}
      <motion.line
        x1="80" y1="80" x2="1120" y2="80"
        stroke="white" strokeWidth="0.5" strokeOpacity={0.1}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.line
        x1="80" y1="420" x2="1120" y2="420"
        stroke="white" strokeWidth="0.5" strokeOpacity={0.1}
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      {/* Central glow dot */}
      <motion.circle
        cx="600" cy="250" r="6"
        fill="white"
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        filter="url(#glow)"
      />
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

function CourseNode({ course, index, inView, rowIndex }: { course: typeof courses[0]; index: number; inView: boolean; rowIndex: number }) {
  const delay = (rowIndex === 0 ? 0.8 : 1.1) + index * 0.12;

  return (
    <motion.a
      href={course.href}
      className="group relative flex flex-col items-center gap-4 cursor-pointer"
      initial={{ opacity: 0, y: rowIndex === 0 ? -30 : 30, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: rowIndex === 0 ? -30 : 30, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay }}
    >
      {/* Glassmorphic 3D Pedestal */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-white/60 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 overflow-hidden">
        {/* Shine sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* 3D Chrome Icon */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <course.Icon
            className="w-9 h-9 md:w-11 md:h-11 text-zinc-400 group-hover:text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-500"
            strokeWidth={1.5}
          />
        </motion.div>
      </div>

      {/* Label */}
      <span className="text-xs md:text-sm font-bold text-zinc-500 group-hover:text-white transition-colors duration-300 tracking-wider uppercase text-center whitespace-nowrap">
        {course.title}
      </span>
    </motion.a>
  );
}

export default function CoursesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden font-sans">
      {/* Background Perspective Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15 [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]">
        <div className="absolute inset-[-50%] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [transform:perspective(1000px)_rotateX(65deg)_translateY(-200px)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            We are the leading Admission<br />Consultancy in Bihar!
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-white/40 to-white mx-auto rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        </motion.div>

        {/* Node-and-Link Path Area */}
        <div className="relative min-h-[500px] max-w-6xl mx-auto hidden md:block">
          <ConnectingPaths inView={isInView} />

          {/* Top Row of Nodes */}
          <div className="absolute top-4 left-0 right-0 flex justify-around px-4">
            {topRow.map((course, i) => (
              <CourseNode key={course.title} course={course} index={i} inView={isInView} rowIndex={0} />
            ))}
          </div>

          {/* Central "Start" Badge */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span className="text-white font-black text-xs tracking-widest uppercase">Start</span>
            </div>
          </motion.div>

          {/* Bottom Row of Nodes */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-around px-4">
            {bottomRow.map((course, i) => (
              <CourseNode key={course.title} course={course} index={i} inView={isInView} rowIndex={1} />
            ))}
          </div>
        </div>

        {/* Mobile Grid Fallback */}
        <div className="grid grid-cols-3 gap-6 md:hidden">
          {courses.map((course, i) => (
            <CourseNode key={course.title} course={course} index={i} inView={isInView} rowIndex={0} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Button
            asChild
            className="relative bg-transparent border border-white/30 hover:border-white text-white hover:bg-white hover:text-black font-black uppercase tracking-[0.2em] rounded-full px-14 py-8 text-sm transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group overflow-hidden"
          >
            <a href="/courses">
              {/* Pulse ring effect */}
              <span className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-30" />
              Explore All Courses
              <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
