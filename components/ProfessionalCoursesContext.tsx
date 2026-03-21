"use client";
import React, { createContext, useContext, useState } from 'react';

export interface Category {
  title: string;
  image: string;
  color: string;
  links: { label: string; href: string }[];
  exploreHref: string;
}

interface ProfessionalCoursesContextType {
  activeCard: number;
  setActiveCard: (index: number) => void;
  categories: Category[];
}

const ProfessionalCoursesContext = createContext<ProfessionalCoursesContextType | undefined>(undefined);

export const ProfessionalCoursesProvider: React.FC<{ categories: Category[]; children: React.ReactNode }> = ({ categories, children }) => {
  const [activeCard, setActiveCard] = useState(1); // Center card (index 1) is active by default

  return (
    <ProfessionalCoursesContext.Provider value={{ activeCard, setActiveCard, categories }}>
      {children}
    </ProfessionalCoursesContext.Provider>
  );
};

export const useProfessionalCourses = () => {
  const context = useContext(ProfessionalCoursesContext);
  if (!context) {
    throw new Error('useProfessionalCourses must be used within ProfessionalCoursesProvider');
  }
  return context;
};