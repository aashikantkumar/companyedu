"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  ChevronDown,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Network,
  PhoneCall,
  Send,
  User,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { container, section } from "@/lib/styles";
import { cn } from "@/lib/utils";

const courses = ["Engineering", "Medical", "Management", "LAW", "Nursing", "Pharmacy", "Others"];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  course: "",
  location: "",
  state: "",
  message: "",
};

const contactPoints = [
  {
    Icon: PhoneCall,
    label: "CALL US NOW",
    value: "+91 620 701 3805",
    href: "tel:+916207013805",
    offsetClassName: "lg:ml-0",
    animationDelay: 0,
  },
  {
    Icon: Network,
    label: "EMAIL US",
    value: "theeducationcare6@gmail.com",
    href: "mailto:theeducationcare6@gmail.com",
    offsetClassName: "lg:ml-24",
    animationDelay: 0.25,
  },
  {
    Icon: MapPin,
    label: "VISIT US",
    value: "G-35, Pushpanjali Complex, Boring Road, Patna",
    href: "#",
    offsetClassName: "lg:ml-8",
    animationDelay: 0.5,
  },
] satisfies Array<{
  Icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  offsetClassName: string;
  animationDelay: number;
}>;

const floatingNodes = [
  {
    label: "Numbers That Speak",
    style: { top: "7%", right: "12%" },
    align: "items-end text-right",
  },
  {
    label: "Core Services",
    style: { top: "27%", right: "6%" },
    align: "items-start text-left",
  },
  {
    label: "Numbers That Speak",
    style: { bottom: "18%", left: "7%" },
    align: "items-start text-left",
  },
] satisfies Array<{
  label: string;
  style: CSSProperties;
  align: string;
}>;

const fieldShell =
  "group/field relative overflow-hidden rounded-[1.15rem] border border-white/12 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 focus-within:border-white/30 focus-within:bg-white/[0.08] focus-within:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_26px_rgba(255,255,255,0.16)]";

const fieldInput =
  "w-full bg-transparent text-sm text-white outline-none placeholder:text-white/42 autofill:shadow-[inset_0_0_0_1000px_rgba(8,8,8,0.75)] autofill:[-webkit-text-fill-color:white]";

function SceneGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_top,black_20%,transparent_72%)]">
        <div className="absolute inset-[-58%] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:68px_68px] [transform:perspective(1350px)_rotateX(71deg)_translateY(16%)]" />
      </div>
    </div>
  );
}

function DataStreams() {
  const paths = [
    {
      d: "M 40 520 Q 250 450 430 500 T 820 520 T 1450 390",
      glow: "rgba(255,255,255,0.2)",
      stroke: "rgba(255,255,255,0.92)",
      delay: 0.2,
    },
    {
      d: "M 140 700 Q 360 610 580 655 T 980 675 T 1540 600",
      glow: "rgba(255,255,255,0.14)",
      stroke: "rgba(255,255,255,0.68)",
      delay: 0.5,
    },
    {
      d: "M 1040 120 Q 1160 155 1260 205 T 1530 245",
      glow: "rgba(255,255,255,0.12)",
      stroke: "rgba(255,255,255,0.54)",
      delay: 0.9,
    },
  ];

  return (
    <svg className="absolute inset-0 z-0 h-full w-full pointer-events-none" viewBox="0 0 1600 900" preserveAspectRatio="none">
      {paths.map((path) => (
        <g key={path.d}>
          <motion.path
            d={path.d}
            fill="none"
            stroke={path.glow}
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.8, delay: path.delay, ease: "easeOut" }}
            style={{ filter: "blur(10px)" }}
          />
          <motion.path
            d={path.d}
            fill="none"
            stroke={path.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="3 12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.1, delay: path.delay + 0.15, ease: "easeOut" }}
          />
        </g>
      ))}

      {[
        { cx: 144, cy: 514, delay: 1.1 },
        { cx: 413, cy: 505, delay: 1.25 },
        { cx: 786, cy: 521, delay: 1.45 },
        { cx: 1238, cy: 199, delay: 1.7 },
        { cx: 1415, cy: 225, delay: 1.95 },
      ].map((node) => (
        <motion.circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r="4"
          fill="white"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: 2.8, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))" }}
        />
      ))}
    </svg>
  );
}

function FloatingNode({ label, style, align }: { label: string; style: CSSProperties; align: string }) {
  return (
    <div style={style} className={cn("absolute z-10 hidden gap-3 text-[10px] uppercase tracking-[0.26em] text-white/34 lg:flex", align)}>
      <span>{label}</span>
      <div className={cn("flex items-center gap-4", align.includes("items-end") ? "flex-row" : "flex-row-reverse")}>
        <div className="h-px w-14 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/[0.05] text-lg font-semibold text-white shadow-[0_0_25px_rgba(255,255,255,0.14),inset_0_1px_0_rgba(255,255,255,0.1)]"
        >
          N
        </motion.div>
      </div>
    </div>
  );
}

function ContactPedestal({
  Icon,
  label,
  value,
  href,
  offsetClassName,
  animationDelay,
}: {
  Icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  offsetClassName: string;
  animationDelay: number;
}) {
  return (
    <motion.a
      href={href}
      className={cn(
        "group relative grid items-center gap-4 text-center sm:grid-cols-[160px_minmax(0,1fr)] sm:text-left",
        offsetClassName,
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: animationDelay, ease: "easeOut" }}
    >
      <div className="relative mx-auto h-[136px] w-[160px] sm:mx-0">
        <div className="absolute bottom-3 left-1/2 h-7 w-28 -translate-x-1/2 rounded-full bg-white/12 blur-2xl" />
        <div className="absolute bottom-0 left-1/2 h-[28px] w-[140px] -translate-x-1/2 rounded-[999px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.08)_44%,rgba(255,255,255,0.02)_100%)] shadow-[0_24px_36px_rgba(0,0,0,0.5),inset_0_6px_10px_rgba(255,255,255,0.06)]" />
        <div className="absolute bottom-5 left-1/2 h-[84px] w-[84px] -translate-x-1/2 rounded-full border border-white/14 bg-[radial-gradient(circle_at_30%_28%,rgba(255,255,255,0.22),rgba(255,255,255,0.08)_45%,rgba(12,12,12,0.88)_100%)] shadow-[0_15px_28px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)]" />

        <motion.div
          animate={{ y: [0, -9, 0], rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: animationDelay, ease: "easeInOut" }}
          className="absolute bottom-[34px] left-1/2 flex h-[62px] w-[62px] -translate-x-1/2 items-center justify-center rounded-full border border-white/18 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),rgba(255,255,255,0.06)_58%,rgba(12,12,12,0.9)_100%)] shadow-[0_0_34px_rgba(255,255,255,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]"
        >
          <Icon className="h-7 w-7 text-white/92 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]" strokeWidth={1.7} />
        </motion.div>
      </div>

      <div>
        <p className="text-[11px] font-semibold tracking-[0.26em] text-white/44">{label}</p>
        <p className="mt-2 max-w-[22rem] text-lg font-medium leading-snug text-white/88 transition-colors duration-300 group-hover:text-white">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

export default function ConsultationForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm(initialForm);
  };

  return (
    <section id="consultation" className={cn(section, "relative overflow-hidden bg-black py-20 md:py-28")}>
      <SceneGrid />
      <DataStreams />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-[-10%] top-[8%] h-[360px] w-[360px] rounded-full bg-white/[0.05] blur-[150px]"
          animate={{ x: [0, 60, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-8%] right-[-8%] h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[160px]"
          animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.03] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/[0.02] to-transparent" />
      </div>

      {floatingNodes.map((node) => (
        <FloatingNode key={`${node.label}-${JSON.stringify(node.style)}`} label={node.label} style={node.style} align={node.align} />
      ))}

      <div className={cn(container, "relative z-10")}>
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.9fr)] lg:gap-10 xl:gap-14">
          <div className="relative">
            <div className="max-w-[34rem]">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-white/42">FREE CONSULTATION</p>
              <h2 className="mt-5 max-w-[12ch] text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-[3.45rem]">
                Request a Free Consultation
              </h2>
              <p className="mt-7 max-w-[36rem] text-base leading-8 text-white/48 sm:text-lg">
                Get expert guidance from our experienced counsellors. We help you select the best college, navigate the
                admission process, and ensure you get into your dream institution.
              </p>
            </div>

            <div className="relative mt-12 flex flex-col gap-8 sm:mt-14 sm:gap-10">
              {contactPoints.map((point) => (
                <ContactPedestal key={point.label} {...point} />
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-[560px] rounded-[2rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_38%,rgba(255,255,255,0.03)_100%)] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl sm:p-7 lg:ml-auto lg:p-8"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute inset-0 rounded-[2rem] border border-white/6" />

              {submitted ? (
                <div className="relative flex min-h-[560px] flex-col items-center justify-center px-5 py-10 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/16 bg-white/[0.06] shadow-[0_0_35px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <CheckCircle className="h-11 w-11 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                  </div>
                  <h3 className="mt-8 text-3xl font-black text-white">Enquiry Received</h3>
                  <p className="mt-4 max-w-sm text-base leading-7 text-white/56">
                    Your inquiry has been received. Our expert counsellor will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={resetForm}
                    variant="ghost"
                    className="mt-8 h-14 rounded-full border border-white/40 bg-white/[0.06] px-8 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_26px_rgba(255,255,255,0.12)] hover:bg-white/[0.12] hover:text-white focus-visible:ring-white/30 focus-visible:ring-offset-black focus-visible:ring-offset-2"
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
                  <div className="mb-2">
                    <h3 className="text-3xl font-black text-white">Quick Enquiry</h3>
                  </div>

                  <div className={fieldShell}>
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45 transition-colors duration-300 group-focus-within/field:text-white/82" />
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={cn(fieldInput, "h-14 pl-12 pr-4")}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className={fieldShell}>
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45 transition-colors duration-300 group-focus-within/field:text-white/82" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={cn(fieldInput, "h-14 pl-12 pr-4")}
                      />
                    </div>

                    <div className={fieldShell}>
                      <PhoneCall className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45 transition-colors duration-300 group-focus-within/field:text-white/82" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        maxLength={10}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                        className={cn(fieldInput, "h-14 pl-12 pr-4")}
                      />
                    </div>
                  </div>

                  <div className={fieldShell}>
                    <BookOpen className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-white/45 transition-colors duration-300 group-focus-within/field:text-white/82" />
                    <select
                      required
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      className={cn(fieldInput, "h-14 appearance-none pl-12 pr-12")}
                    >
                      <option value="" className="bg-[#0c0c0c] text-white">
                        Select Course
                      </option>
                      {courses.map((course) => (
                        <option key={course} value={course} className="bg-[#0c0c0c] text-white">
                          {course}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className={fieldShell}>
                      <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45 transition-colors duration-300 group-focus-within/field:text-white/82" />
                      <input
                        type="text"
                        placeholder="City / Location"
                        required
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className={cn(fieldInput, "h-14 pl-12 pr-4")}
                      />
                    </div>

                    <div className={fieldShell}>
                      <input
                        type="text"
                        placeholder="State"
                        required
                        value={form.state}
                        onChange={(e) => setForm({ ...form, state: e.target.value })}
                        className={cn(fieldInput, "h-14 px-4")}
                      />
                    </div>
                  </div>

                  <div className={cn(fieldShell, "rounded-[1.35rem]")}>
                    <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-white/45 transition-colors duration-300 group-focus-within/field:text-white/82" />
                    <textarea
                      placeholder="Your Message (optional)"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={cn(fieldInput, "min-h-[138px] resize-none px-4 py-4 pl-12")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    variant="ghost"
                    className="mt-2 h-16 rounded-full border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_100%)] text-base text-white shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_0_35px_rgba(255,255,255,0.2),inset_0_0_20px_rgba(255,255,255,0.06)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.07)_100%)] hover:text-white focus-visible:ring-white/35 focus-visible:ring-offset-black focus-visible:ring-offset-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs leading-6 text-white/38">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-white/72 underline decoration-white/30 underline-offset-4 transition hover:text-white">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
