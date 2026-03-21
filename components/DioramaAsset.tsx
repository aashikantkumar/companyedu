"use client";
import React from 'react';

interface DioramaAssetProps {
  category: string;
  isActive: boolean;
}

const DioramaAsset: React.FC<DioramaAssetProps> = ({ category, isActive }) => {
  const renderAsset = () => {
    switch (category) {
      case 'BEST ENGINEERING':
        return (
          <svg className="w-24 h-24 text-white/80" viewBox="0 0 100 100">
            {/* Chrome gear with compass */}
            <g opacity={isActive ? 1 : 0.6}>
              {/* Gear */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 10 L60 30 L40 30 Z" fill="currentColor" />
              <path d="M50 10 L70 40 L30 40 Z" fill="currentColor" />
              <path d="M50 10 L80 50 L20 50 Z" fill="currentColor" />

              {/* Compass */}
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" strokeWidth="1.5" />
              <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="1.5" />
            </g>
          </svg>
        );

      case 'MEDICAL ADMISSION':
        return (
          <svg className="w-24 h-24 text-white/80" viewBox="0 0 100 100">
            {/* Caduceus and heart */}
            <g opacity={isActive ? 1 : 0.6}>
              {/* Caduceus */}
              <path d="M50 20 C30 30 20 40 20 60 C20 80 30 90 50 100"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M50 20 C70 30 80 40 80 60 C80 80 70 90 50 100"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="50" cy="70" r="8" fill="currentColor" />

              {/* Heart */}
              <path d="M60 40 L70 50 L60 60 L50 50 Z" fill="currentColor" />
              <path d="M40 40 L30 50 L40 60 L50 50 Z" fill="currentColor" />
              <path d="M50 50 L60 60 L50 70 L40 60 Z" fill="currentColor" />
            </g>
          </svg>
        );

      case 'BEST MANAGEMENT':
        return (
          <svg className="w-24 h-24 text-white/80" viewBox="0 0 100 100">
            {/* Graph and globe */}
            <g opacity={isActive ? 1 : 0.6}>
              {/* Graph bars */}
              <rect x="20" y="40" width="10" height="50" fill="currentColor" />
              <rect x="40" y="30" width="10" height="60" fill="currentColor" />
              <rect x="60" y="20" width="10" height="70" fill="currentColor" />

              {/* Globe */}
              <circle cx="80" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M80 35 L80 65" stroke="currentColor" strokeWidth="1.5" />
              <path d="M65 50 L95 50" stroke="currentColor" strokeWidth="1.5" />
            </g>
          </svg>
        );

      case 'LAW ADMISSION':
        return (
          <svg className="w-24 h-24 text-white/80" viewBox="0 0 100 100">
            {/* Lady Justice */}
            <g opacity={isActive ? 1 : 0.6}>
              {/* Scales */}
              <path d="M50 30 L50 70" stroke="currentColor" strokeWidth="2" />
              <path d="M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
              <circle cx="30" cy="50" r="5" fill="currentColor" />
              <circle cx="70" cy="50" r="5" fill="currentColor" />

              {/* Sword */}
              <path d="M50 30 L50 20 L55 15 L45 15 L50 20 Z" fill="currentColor" />
              <rect x="48" y="20" width="4" height="50" fill="currentColor" />
            </g>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        transform: isActive ? 'translateZ(30px) scale(1.1)' : 'translateZ(0) scale(1)',
        transition: 'transform 0.3s ease',
      }}
    >
      {renderAsset()}
    </div>
  );
};

export default DioramaAsset;