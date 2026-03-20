"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { container, section } from "@/lib/styles";

const stats = [
  { number: "5+", label: "Years Experience", icon: "🏆" },
  { number: "1000+", label: "Happy Students", icon: "😊" },
  { number: "10+", label: "Awards Won", icon: "🥇" },
  { number: "25+", label: "Expert Staff", icon: "👥" },
];

const testimonials = [
  {
    name: "Soni Singh",
    location: "Patna",
    quote: "I was looking for the best Engineering College for my brother. The Education Care helped me with it. They help in everything from taking admissions to shifting, everything.",
    rating: 5,
  },
  {
    name: "Shashank Sekhar",
    location: "Bodh Gaya",
    quote: "I wanted to do MBBS but was very confused while choosing the best college for me. After doing a lot of research, The Education Care helped me. Now, I am studying at a good college.",
    rating: 5,
  },
  {
    name: "Sadhna Jha",
    location: "New Delhi",
    quote: "I wanted to do BDS but was very confused while choosing the best college for me. After doing a lot of research, They helped me. They also helped me with Student Credit Card Scheme.",
    rating: 5,
  },
  {
    name: "Rahul Kumar",
    location: "Patna (Bihar)",
    quote: "The Consulting team helped me in both the college admissions as well as the visa preparation. I had very good experience with The Education Care. One of the best consultancy.",
    rating: 5,
  },
];

export default function StatsAndTestimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((idx + 1) % testimonials.length);

  return (
    <section className={`${section} relative overflow-hidden bg-[#1b3a5d]`}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #f28f1d 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f28f1d 0%, transparent 50%)" }} />

      <div className={`${container} relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Stats — matching original 2x2 box layout */}
          <div>
            <p className="text-[#f28f1d] text-xs font-bold uppercase tracking-widest mb-2">OUR ACHIEVEMENTS</p>
            <h2 className="text-white font-black text-3xl mb-8">Numbers That Speak</h2>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label}
                  className="border border-white/10 rounded-lg p-6 text-center hover:bg-white/5 transition-colors duration-200 group">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="text-[#f28f1d] font-black text-3xl">{s.number}</div>
                  <div className="text-white/60 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonials */}
          <div>
            <p className="text-[#f28f1d] text-xs font-bold uppercase tracking-widest mb-2">WHAT STUDENTS SAY</p>
            <h2 className="text-white font-black text-3xl mb-8">500+ Happy Students</h2>

            <div className="bg-white rounded-xl p-7 shadow-2xl min-h-48">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1b3a5d] flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-lg">{t.name[0]}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1b3a5d] text-base">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.location}</p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} className="fill-[#f28f1d] text-[#f28f1d]" />
                    ))}
                  </div>
                </div>
                <div className="ml-auto text-[#f28f1d] text-5xl opacity-20 font-serif leading-none">&ldquo;</div>
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </div>

            {/* Nav */}
            <div className="flex items-center gap-3 mt-5">
              <button onClick={prev} className="w-9 h-9 border border-white/20 rounded flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Prev">
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                    className={`rounded-full transition-all duration-200 ${i === idx ? "w-6 h-2 bg-[#f28f1d]" : "w-2 h-2 bg-white/30"}`}
                    aria-label={`Testimonial ${i+1}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-9 h-9 bg-[#f28f1d] rounded flex items-center justify-center text-white hover:bg-[#d97e10] transition-colors" aria-label="Next">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
