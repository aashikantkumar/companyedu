"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";

import slide1 from "../images/home1/slide.jpg";
import slide2 from "../images/home1/the-education-care.jpg";
import slide3 from "../images/home2/slide3.jpg";
import { Button } from "@/components/ui/button";
import { container } from "@/lib/styles";
import { BackgroundPaths } from "@/components/ui/background-paths";

const slides = [
  {
    id: 1,
    image: slide1,
    alt: "Engineering Admissions - Top Colleges in Bangalore, Pune, Kolkata, Chennai",
    tag: "Engineering Admissions",
    heading: "Get Admission in",
    highlight: "Top Engineering Colleges",
    sub: "Expert guidance for IIT-JEE, B.Tech, M.Tech and Diploma admissions at leading engineering colleges.",
    cta1: "Explore Engineering",
    cta2: "Quick Admission",
    location: "Bangalore, Pune, Chennai, Kolkata",
    visualLabel: "B.Tech, M.Tech and Diploma",
  },
  {
    id: 2,
    image: slide2,
    alt: "Study Abroad - UK, USA, Canada, Ireland, Ukraine, Kazakhstan",
    tag: "Study Abroad",
    heading: "Get Admission in",
    highlight: "International Universities",
    sub: "Study in the UK, USA, Canada and more with focused support for MBBS Abroad and global admissions.",
    cta1: "Explore Abroad",
    cta2: "Free Counselling",
    location: "UK, USA, Canada, Kazakhstan, Ireland",
    visualLabel: "Study Abroad and MBBS Abroad",
  },
  {
    id: 3,
    image: slide3,
    alt: "Engineering, Management & Medical Admissions",
    tag: "All Courses",
    heading: "Get Admission in",
    highlight: "Engineering, MBBS & MBA",
    sub: "Clear admission guidance for engineering, medical and management programs in India and abroad.",
    cta1: "Apply Now",
    cta2: "Quick Admission",
    location: "India and Abroad",
    visualLabel: "Engineering, MBBS and MBA",
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
      }, 350);
    },
    [animating]
  );

  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo]);
  const prev = () => goTo((active - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--primary-dark)_0%,var(--primary)_58%,var(--primary-light)_100%)]">
      <div className="absolute inset-0">
        <BackgroundPaths title="" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_26%)]" />

      <div className={`${container} relative z-10 pt-32 pb-14 md:pt-40 md:pb-18`}>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,1fr)]">
          <div
            className={`max-w-xl transition-all duration-500 ${animating ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
              }`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
              <Sparkles size={14} className="text-[var(--secondary)]" />
              {slide.tag}
            </div>

            <p className="mb-4 flex items-center gap-2 text-sm font-medium text-[var(--secondary)]">
              <MapPin size={16} />
              {slide.location}
            </p>

            <h1 className="text-4xl font-black leading-[0.98] text-white md:text-6xl">
              {slide.heading}
            </h1>
            <h2 className="mt-2 text-4xl font-black leading-[0.98] text-[var(--secondary)] md:text-6xl">
              {slide.highlight}
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-white/84 md:text-lg">
              {slide.sub}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
                <a href="#consultation">
                  {slide.cta1} <ArrowRight size={16} />
                </a>
              </Button>
              <Button
                asChild
                variant="white"
                className="rounded-full border-white/70 bg-white/95 px-8 text-[var(--primary-dark)] hover:bg-white hover:text-[var(--primary-dark)]"
              >
                <a href="#about">{slide.cta2}</a>
              </Button>
            </div>

            <p className="mt-5 text-sm text-white/68">
              Clear guidance for college selection, admission process and next steps.
            </p>
          </div>

          <div
            className={`transition-all duration-500 ${animating ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
              }`}
          >
            <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-[rgba(255,255,255,0.05)] shadow-[0_24px_70px_rgba(7,54,65,0.22)]">
              <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-[30px] px-5 py-5 md:min-h-[430px] md:px-6 md:py-6">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  priority
                  className="h-auto max-h-[270px] w-auto max-w-full object-contain md:max-h-[380px]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-[22px] border border-white/16 bg-[rgba(7,54,65,0.58)] px-5 py-4 text-white backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">
                  Featured Track
                </p>
                <p className="mt-2 text-lg font-bold md:text-xl">{slide.visualLabel}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between rounded-full border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-sm md:px-5">
          <div className="text-sm text-white/72">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === active
                      ? "h-2.5 w-10 bg-[var(--secondary)]"
                      : "h-2.5 w-2.5 bg-white/35 hover:bg-white/70"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
