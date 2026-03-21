"use client";
import React from 'react';
import { motion } from 'framer-motion';

const LightPath: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      animate={{
        background: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255, 255, 255, 0.05) 10px,
          rgba(255, 255, 255, 0.05) 20px
        )`,
        backgroundSize: "400% 400%",
        backgroundPosition: "0% 0%",
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        zIndex: -1,
      }}
    />
  );
};

export default LightPath;