"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { container, section } from "@/lib/styles";
import { GlowCard } from "@/components/ui/spotlight-card";

interface College {
  name: string;
  image: string;
  founded: string;
  location: string;
  approval: string;
  extra: string;
  nirf?: string;
}

interface CollegeCarouselProps {
  title: string;
  colleges: College[];
  bgLight?: boolean;
}

function CollegeCard({ college }: { college: College }) {
  return (
    <GlowCard 
      customSize 
      glowColor="blue"
      className="w-72 shrink-0 !p-0 overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 block relative"
    >
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={college.image}
            alt={college.name}
            fill
            className="object-cover"
            sizes="288px"
          />
          {college.nirf && (
            <div className="absolute top-2 right-2 bg-[#1b3a5d] text-white text-xs font-black px-2 py-1 rounded">
              NIRF RANK: {college.nirf}
            </div>
          )}
        </div>

        {/* Body — numbered list like original */}
        <div className="p-4 flex flex-col flex-grow">
          <h4 className="font-bold text-[#1b3a5d] text-sm mb-3 leading-snug">{college.name}</h4>
          <ol className="space-y-1 mb-3 flex-grow">
            {[
              `Founded: ${college.founded}`,
              college.approval ? `Recognition: ${college.approval}` : null,
              `Location: ${college.location}`,
              college.extra || null,
            ].filter(Boolean).map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                <span className="shrink-0 font-bold text-[#1b3a5d]">{i + 1}.</span>
                <span className="text-[#f28f1d] hover:underline cursor-pointer">{item as string}</span>
                <ChevronRight size={10} className="shrink-0 text-gray-300" />
              </li>
            ))}
          </ol>

          {/* Tags */}
          <div className="flex gap-2 mb-3 mt-auto">
            <span className="px-2 py-0.5 rounded border border-gray-300 text-xs text-gray-500 font-medium">Course Offered</span>
            <span className="px-2 py-0.5 rounded border border-gray-300 text-xs text-gray-500 font-medium">Fee Details</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 items-center text-xs">
            <Button asChild variant="primary" size="sm" className="flex-1 rounded-md px-3 py-2 text-[10px] shadow-none">
              <a href="#consultation">Apply Now</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 rounded-md px-3 py-2 text-[10px] hover:border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-white"
            >
              <a href="#">Read More</a>
            </Button>
            <a href="tel:06207013805" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-[#1b3a5d] hover:text-white hover:border-[#1b3a5d] transition-all text-gray-400 shrink-0">
              <Phone size={12} />
            </a>
            <a href="mailto:theeducationcare6@gmail.com" className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-[#f28f1d] hover:text-white hover:border-[#f28f1d] transition-all text-gray-400 shrink-0">
              <Mail size={12} />
            </a>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}

export default function CollegeCarousel({ title, colleges, bgLight = false }: CollegeCarouselProps) {
  const [startIdx, setStartIdx] = useState(0);
  const visible = 4;

  const prev = () => setStartIdx(Math.max(0, startIdx - 1));
  const next = () => setStartIdx(Math.min(colleges.length - visible, startIdx + 1));

  return (
    <section className={`${section} ${bgLight ? "bg-[#f8f9fa]/80" : "bg-white/80"} backdrop-blur-sm`}>
      <div className={container}>
        {/* Title — matches original centered bold style */}
        <h2 className="text-[#1b3a5d] font-black text-2xl md:text-3xl text-center mb-8">{title}</h2>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${startIdx * (288 + 16)}px)` }}
          >
            {colleges.map((c) => (
              <CollegeCard key={c.name} college={c} />
            ))}
          </div>
        </div>

        {/* Navigation — below the cards, left-aligned (like original < > arrows) */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={prev}
            disabled={startIdx === 0}
            className="w-9 h-9 flex items-center justify-center border-2 border-gray-300 rounded text-gray-500 hover:border-[#1b3a5d] hover:text-[#1b3a5d] disabled:opacity-30 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            disabled={startIdx >= colleges.length - visible}
            className="w-9 h-9 flex items-center justify-center border-2 border-gray-300 rounded text-gray-500 hover:border-[#1b3a5d] hover:text-[#1b3a5d] disabled:opacity-30 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
