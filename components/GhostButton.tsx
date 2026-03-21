import React from 'react';

interface GhostButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

const GhostButton: React.FC<GhostButtonProps> = ({ href, className = '', children, target, rel }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1 text-xs font-bold tracking-wider uppercase transition-all duration-300 border-2 px-4 py-2 rounded-full ${className}`}
      style={{
        color: 'rgba(255, 255, 255, 0.9)',
        backgroundColor: 'transparent',
        border: '2px solid rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      target={target}
      rel={rel}
    >
      {children}
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
};

export default GhostButton;