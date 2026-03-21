"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useProfessionalCourses } from './ProfessionalCoursesContext';
import { GlowCard } from './ui/spotlight-card';
import DioramaAsset from './DioramaAsset';
import GhostButton from './GhostButton';
import { Phone, Mail } from 'lucide-react';

// Card layout config per relative position from active card
const CARD_OFFSETS: Record<number, { x: number; scale: number; rotateY: number; zIndex: number; opacity: number }> = {
  [-2]: { x: -520, scale: 0.7, rotateY: 30,  zIndex: 1,  opacity: 0.4 },
  [-1]: { x: -280, scale: 0.85, rotateY: 20, zIndex: 2,  opacity: 0.75 },
  [0]:  { x: 0,    scale: 1.0,  rotateY: 0,  zIndex: 10, opacity: 1 },
  [1]:  { x: 280,  scale: 0.85, rotateY: -20,zIndex: 2,  opacity: 0.75 },
  [2]:  { x: 520,  scale: 0.7,  rotateY: -30,zIndex: 1,  opacity: 0.4 },
};

export default function CardStack() {
  const { categories, activeCard, setActiveCard } = useProfessionalCourses();
  const count = categories.length;

  return (
    <div className="relative w-full" style={{ perspective: '1200px', minHeight: '420px' }}>
      <div className="relative flex items-center justify-center h-[420px]">
        {categories.map((category, index) => {
          let relOffset = index - activeCard;
          // Wrap for circular feel
          if (relOffset > count / 2) relOffset -= count;
          if (relOffset < -count / 2) relOffset += count;

          const clampedOffset = Math.max(-2, Math.min(2, relOffset));
          const layout = CARD_OFFSETS[clampedOffset];
          const isActive = relOffset === 0;

          return (
            <motion.div
              key={category.title}
              className="absolute"
              animate={{
                x: layout.x,
                scale: layout.scale,
                rotateY: layout.rotateY,
                opacity: layout.opacity,
                zIndex: layout.zIndex,
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              style={{ transformStyle: 'preserve-3d', cursor: isActive ? 'default' : 'pointer' }}
              onClick={() => !isActive && setActiveCard(index)}
            >
              <GlowCard
                customSize
                glowColor="blue"
                className={`w-72 h-96 flex flex-col bg-white/5 backdrop-blur-xl overflow-hidden transition-shadow duration-500 ${
                  isActive
                    ? 'border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.1)]'
                    : 'border-white/10'
                }`}
              >
                {/* Image Area */}
                <div className="relative h-36 shrink-0 overflow-hidden">
                  <DioramaAsset category={category.title} isActive={isActive} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-white font-black text-base tracking-widest uppercase drop-shadow">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Links */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="space-y-2 mb-4 flex-1">
                    {category.links.map((link: { label: string; href: string }) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors leading-snug group"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white flex-shrink-0" />
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/10 mb-3" />

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <GhostButton href={category.exploreHref} className="text-xs text-white/90 hover:text-white flex-1">
                      EXPLORE NOW
                    </GhostButton>
                    <a href="tel:06207013805" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all">
                      <Phone className="w-3 h-3 text-white/60" />
                    </a>
                    <a href="mailto:theeducationcare6@gmail.com" className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all">
                      <Mail className="w-3 h-3 text-white/60" />
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {categories.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveCard(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeCard ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}