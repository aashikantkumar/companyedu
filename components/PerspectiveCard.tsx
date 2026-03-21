"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from './ui/spotlight-card';
import { Category } from './ProfessionalCoursesContext';
import DioramaAsset from './DioramaAsset';
import GhostButton from './GhostButton';

interface PerspectiveCardProps {
  index: number;
  category: Category;
  isActive: boolean;
  setActiveCard: (index: number) => void;
}

const PerspectiveCard: React.FC<PerspectiveCardProps> = ({ index, category, isActive, setActiveCard }) => {
  const cardRef = useRef(null);

  const handleCardClick = () => {
    setActiveCard(index);
  };

  return (
    <motion.div
      ref={cardRef}
      className="absolute w-80 h-64"
      style={{
        transform: `translateZ(${isActive ? 0 : index * -100}px) rotateY(${isActive ? 0 : index * -12}deg)`,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      whileHover={{
        scale: 1.05,
        rotateY: isActive ? 0 : `${index * -8}deg`,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={handleCardClick}
    >
      <GlowCard
        className="relative w-full h-full group bg-white/5 backdrop-blur-xl border-white/10"
        style={{
          transform: `translateZ(${isActive ? 20 : 0}px)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* Diorama Asset */}
        <div className="absolute inset-0 flex items-center justify-center">
          <DioramaAsset category={category.title} isActive={isActive} />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Title */}
          <h3 className="text-white font-black text-lg tracking-wider uppercase mb-4">
            {category.title}
          </h3>

          {/* Links */}
          <div className="space-y-2 mb-4">
            {category.links.map((link: { label: string; href: string }) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 text-sm hover:text-white transition-colors font-medium leading-snug"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 mb-4" />

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <GhostButton
              href={category.exploreHref}
              className="text-white/90 hover:text-white transition-colors"
            >
              EXPLORE NOW
            </GhostButton>

            <a
              href="tel:06207013805"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 22H7a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3zM16 2h-1a1 1 0 0 0-1 1v9l-3.29-3.29a1 1 0 0 0-1.41 1.41l2 2a1 1 0 0 0 1.41 0l4-4a1 1 0 0 0-1.41-1.41L13 13V3a1 1 0 0 0-1-1H12a1 1 0 0 0-1 1v10.17l-2-2a1 1 0 0 0-1.41 1.41l3 3a1 1 0 0 0 1.41 0l6.12-6.12A2 2 0 0 0 18 11V3a2 2 0 0 0-2-2z" />
              </svg>
            </a>

            <a
              href="mailto:theeducationcare6@gmail.com"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
            >
              <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8L12 12L21 8V6.31C19.63 5.94 18.24 5.78 16.99 5.85C15.74 5.92 14.5 6.23 13.42 6.77C12.34 7.31 11.42 8.09 10.67 9.1C10.21 9.79 9.84 10.54 9.55 11.35C9.26 12.16 9.09 13 9 13.92V18H3V8Z" />
              </svg>
            </a>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

export default PerspectiveCard;