"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import slide1 from "../images/home1/slide.jpg";
import slide2 from "../images/home1/the-education-care.jpg";
import slide3 from "../images/home2/slide3.jpg";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: slide1,
    alt: "Engineering Admissions - Top Colleges in Bangalore, Pune, Kolkata, Chennai",
    tag: "Engineering Admissions",
    heading: "Get Admission in",
    highlight: "Top Engineering Colleges",
    sub: "Expert guidance for IIT-JEE, B.Tech, M.Tech & Diploma admissions at India's premier engineering institutions.",
    cta1: "Explore Engineering",
    cta2: "Quick Admission",
  },
  {
    id: 2,
    image: slide2,
    alt: "Study Abroad - UK, USA, Canada, Ireland, Ukraine, Kazakhstan",
    tag: "Study Abroad",
    heading: "Get Admission in",
    highlight: "International Universities",
    sub: "Study in UK, USA, Canada, Ireland, Ukraine & Kazakhstan. Expert guidance for MBBS Abroad and international admissions.",
    cta1: "Explore Abroad",
    cta2: "Free Counselling",
  },
  {
    id: 3,
    image: slide3,
    alt: "Engineering, Management & Medical Admissions",
    tag: "All Courses",
    heading: "Get Admission in",
    highlight: "Engineering, MBBS & MBA",
    sub: "Complete admission guidance for Engineering, Medical, and Management courses at India's top colleges.",
    cta1: "Apply Now",
    cta2: "Quick Admission",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive(idx);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo]);
  const prev = () => goTo((active - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const s = slides[active];

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "72vh" }}>
      {/* Background Image — full width, fills the whole slide */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${animating ? "opacity-0" : "opacity-100"}`}
      >
        <Image
          src={s.image}
          alt={s.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle dark overlay on left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content overlaid on top of the image */}
      <div
        className="container-custom relative z-10 flex items-center"
        style={{ minHeight: "72vh" }}
      >
        <div
          className={`max-w-xl py-16 transition-all duration-500 ${
            animating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-bold uppercase tracking-widest"
            style={{
              background: "rgba(242,143,29,0.20)",
              border: "1px solid rgba(242,143,29,0.55)",
              color: "#f28f1d",
            }}
          >
            ⭐ {s.tag}
          </div>

          <h1 className="text-white font-black leading-tight mb-1 text-4xl md:text-5xl drop-shadow-lg">
            {s.heading}
          </h1>
          <h1
            className="font-black leading-tight mb-5 text-4xl md:text-5xl drop-shadow-lg"
            style={{ color: "#f28f1d" }}
          >
            {s.highlight}
          </h1>

          <p className="text-white/85 text-base md:text-lg mb-6 leading-relaxed drop-shadow">
            {s.sub}
          </p>

          {/* Phone + Email */}
          <div className="flex items-center gap-5 mb-8">
            <a
              href="tel:6207013805"
              className="flex items-center gap-2 text-white hover:text-[#f28f1d] transition-colors font-bold"
            >
              <span className="text-[#f28f1d]">📞</span> 6207013805
            </a>
            <span className="text-white/30">|</span>
            <a
              href="mailto:theeducationcare6@gmail.com"
              className="flex items-center gap-2 text-white/75 hover:text-white transition-colors text-sm"
            >
              <span>✉</span> theeducationcare6@gmail.com
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#consultation"
              className="bg-[#f28f1d] hover:bg-[#d97e10] text-white font-bold text-sm px-7 py-3 rounded transition-all duration-200 hover:shadow-lg uppercase tracking-wide flex items-center gap-2"
            >
              {s.cta1} <ArrowRight size={15} />
            </a>
            <a
              href="#about"
              className="border-2 border-white/50 hover:border-white text-white font-bold text-sm px-7 py-3 rounded transition-all duration-200 uppercase tracking-wide hover:bg-white/10"
            >
              {s.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Slide navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? "w-8 h-2.5 bg-[#f28f1d]"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-[#f28f1d] text-white rounded-full transition-all duration-200 text-lg"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-[#f28f1d] text-white rounded-full transition-all duration-200 text-lg"
      >
        ›
      </button>
    </section>
  );
}
