"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Award, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function CollegeCarousel({ title, colleges }: CollegeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!colleges || colleges.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % colleges.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + colleges.length) % colleges.length);
  };

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // Rotates every 4 seconds
    return () => clearInterval(timer);
  }, [currentIndex, colleges.length]);

  // Helper to get variants for layout
  const getCardProps = (index: number) => {
    const offset = index - currentIndex;
    
    // For a circular carousel feel
    let relativeOffset = offset;
    const half = Math.floor(colleges.length / 2);
    if (offset > half) relativeOffset -= colleges.length;
    if (offset < -half) relativeOffset += colleges.length;
    
    const isActive = relativeOffset === 0;
    const direction = Math.sign(relativeOffset);
    const absRelative = Math.abs(relativeOffset);

    // If it's too far, hide it to the edges
    if (absRelative > 2) {
      return { 
        initial: false,
        animate: { opacity: 0, scale: 0.8, x: direction * 500, rotateY: direction * 45, zIndex: -10 },
        transition: { duration: 0.5 }
      };
    }

    // Fan staggered layout config
    let scale = 1;
    let x = 0;
    let rotateY = 0;
    let zIndex = 10;
    let opacity = 1;

    if (isActive) {
      scale = 1.1;
      x = 0;
      rotateY = 0;
      zIndex = 30;
      opacity = 1;
    } else {
      scale = 0.9 - (absRelative * 0.05);
      // stagger horizontal position
      x = direction * (160 + absRelative * 60);
      // rotate angled towards center
      rotateY = direction * -12; 
      zIndex = 20 - absRelative;
      opacity = 1 - (absRelative * 0.25);
    }

    return {
      initial: false,
      animate: { opacity, scale, x, rotateY, zIndex },
      transition: { duration: 0.6 },
      isActive
    };
  };

  return (
    <section className="relative py-28 bg-black overflow-hidden font-sans">
      {/* Background Perspective Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] opacity-20">
        <div className="absolute inset-[-50%] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(1000px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <h2 className="text-white font-extrabold text-3xl md:text-5xl text-center mb-16 tracking-tight uppercase">
          {title}
        </h2>

        {/* 3D Carousel Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center [perspective:1000px] mt-10">
          <AnimatePresence initial={false}>
            {colleges.map((college, idx) => {
              const { isActive, ...motionProps } = getCardProps(idx);

              return (
                <motion.div
                  key={college.name}
                  {...motionProps}
                  className="absolute top-0 w-[300px] md:w-[350px] h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -50) handleNext();
                    else if (swipe > 50) handlePrev();
                  }}
                >
                  {/* Card Content with Glassmorphism */}
                  <div className={`w-full h-full flex flex-col rounded-3xl bg-white/5 backdrop-blur-xl border transition-all duration-300 group overflow-hidden ${isActive ? 'border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.15)] ring-1 ring-white/10' : 'border-white/10 shadow-2xl hover:border-white/20'}`}>
                    
                    {/* 3D Diorama Image Container */}
                    <div className="relative h-56 w-full shrink-0 overflow-hidden [transform-style:preserve-3d] [perspective:1000px]">
                      {/* Image that lifts on hover */}
                      <div className="absolute inset-0 transition-all duration-700 group-hover:[transform:translateZ(15px)_scale(1.05)] group-hover:brightness-110">
                        <Image
                          src={college.image}
                          alt={college.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      </div>
                      
                      {college.nirf && (
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] [transform:translateZ(30px)] uppercase tracking-wider">
                          NIRF Rank: {college.nirf}
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4 right-4 [transform:translateZ(30px)]">
                        <h3 className="text-white font-extrabold text-xl md:text-2xl leading-tight drop-shadow-lg tracking-tight">
                          {college.name}
                        </h3>
                      </div>
                    </div>

                    {/* Meta Grid */}
                    <div className="p-6 flex-1 flex flex-col pt-8">
                      <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
                        <div className="flex items-start gap-3 group/icon">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/icon:bg-white/10 transition-colors">
                            <Calendar className="w-4 h-4 text-white/72 group-hover:animate-pulse" />
                          </div>
                          <div>
                            <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black mb-0.5">Founded</p>
                            <p className="text-xs text-zinc-300 font-semibold">{college.founded}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 group/icon">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/icon:bg-white/10 transition-colors">
                            <Award className="w-4 h-4 text-white/72 group-hover:animate-pulse" />
                          </div>
                          <div>
                            <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black mb-0.5">Recognition</p>
                            <p className="text-xs text-zinc-300 font-semibold line-clamp-1">{college.approval || "N/A"}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 group/icon">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/icon:bg-white/10 transition-colors">
                            <MapPin className="w-4 h-4 text-white/72 group-hover:animate-pulse" />
                          </div>
                          <div>
                            <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black mb-0.5">Location</p>
                            <p className="text-xs text-zinc-300 font-semibold line-clamp-1">{college.location}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 group/icon">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/icon:bg-white/10 transition-colors">
                            <BookOpen className="w-4 h-4 text-white/72 group-hover:animate-pulse" />
                          </div>
                          <div>
                            <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black mb-0.5">Courses</p>
                            <p className="text-xs text-zinc-300 font-semibold line-clamp-1">{college.extra || "UG & PG"}</p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto pt-6 relative z-20">
                        <Button 
                          className={`w-full py-6 font-black tracking-widest uppercase text-xs transition-all duration-500 rounded-xl ${
                            isActive 
                            ? "bg-white text-black hover:bg-zinc-100 shadow-[0_0_22px_rgba(255,255,255,0.2)] border-none" 
                            : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
                          }`}
                        >
                          Explore Campus
                        </Button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mt-16 relative z-20">
          <button
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 active:scale-95 backdrop-blur-md transition-all duration-300 group"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
          </button>
          
          {/* Circular Indicators */}
          <div className="flex items-center gap-3">
            {colleges.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? "w-10 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" : "w-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 active:scale-95 backdrop-blur-md transition-all duration-300 group"
            aria-label="Next"
          >
            <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
