"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/The-education-care/logo/education-care.png";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronDown, Menu, X, Home, Info, BriefcaseBusiness, GraduationCap, Images, Trophy, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { container } from "@/lib/styles";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "About Us",
    href: "#",
    icon: Info,
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Mission & Vision", href: "/mission-vision" },
      { label: "Our Core Values", href: "/our-core-values" },
    ],
  },
  {
    label: "Services",
    href: "#",
    icon: BriefcaseBusiness,
    children: [
      { label: "Admission Guidance", href: "/admission-guidance" },
      { label: "University Selection", href: "/university-selection" },
      { label: "Student Credit Card", href: "/student-credit-card" },
      { label: "Entrance Exam Guidance", href: "/entrance-exam-guidance" },
      { label: "Virtual Counselling", href: "/virtual-counselling" },
    ],
  },
  {
    label: "Courses",
    href: "#",
    icon: GraduationCap,
    children: [
      { label: "Engineering", href: "/engineering" },
      { label: "Medical", href: "/medical" },
      { label: "Management", href: "/management" },
      { label: "LAW", href: "/law" },
    ],
  },
  { label: "Gallery", href: "/gallery", icon: Images },
  {
    label: "NIRF Ranking",
    href: "#",
    icon: Trophy,
    children: [
      { label: "NIRF Ranking 2021", href: "/nirf-2021" },
      { label: "NIRF Ranking 2022", href: "/nirf-2022" },
    ],
  },
  { label: "Contact", href: "/contact", icon: PhoneCall },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Main Header — floating dark pill */}
      <header className="fixed top-4 left-0 right-0 w-full z-[100] transition-all duration-300 pointer-events-none">
        <div className="mx-auto w-[95%] max-w-7xl">
          <div className={`pointer-events-auto flex items-center justify-between py-2.5 px-6 rounded-[2rem] border transition-all duration-300 ${
              scrolled 
                ? "bg-[#111827]/90 backdrop-blur-xl border-white/10 shadow-2xl" 
                : "bg-[#111827] border-white/5 shadow-xl"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 shrink-0 group-hover:scale-105 transition-transform duration-200 bg-white p-0.5 rounded-full border border-white/20 shadow-inner overflow-hidden">
                <Image
                  src={logo}
                  alt="The Education Care Logo"
                  width={44}
                  height={44}
                  className="rounded-full object-contain"
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
              </div>
              <span className="hidden sm:block text-white font-semibold tracking-wide text-lg">The Education Care</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-8 ml-auto px-6">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors py-4"
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 opacity-70" />}
                  </a>
                  {item.children && (
                    <div className="absolute top-[85%] left-1/2 -translate-x-1/2 min-w-[220px] bg-[#1f2937] shadow-2xl rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors border-b border-white/5 last:border-0"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Admission Button */}
            <div className="hidden lg:block">
              <Button asChild className="rounded-full px-6 py-2.5 text-sm bg-white text-[#111827] hover:bg-gray-200 transition-colors shadow-sm font-bold">
                <a href="/admission2024">Contact Us</a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden mx-auto w-[95%] max-w-7xl mt-3 pointer-events-auto">
            <div className="bg-[#111827]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
              <div className="flex flex-col py-4 px-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3.5 text-gray-300 font-medium hover:bg-white/5 hover:text-white rounded-xl transition-colors text-sm"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      {item.children && <ChevronDown size={14} className={openDropdown === item.label ? "rotate-180" : ""} />}
                    </button>
                    {item.children && openDropdown === item.label && (
                      <div className="bg-white/5 rounded-xl mx-2 mb-2 overflow-hidden mt-1">
                        {item.children.map((c) => (
                          <a key={c.label} href={c.href} className="block px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors">{c.label}</a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="p-4 pt-4 border-t border-white/10 mt-2">
                  <Button asChild className="flex w-full rounded-full py-4 shadow-none bg-white text-[#111827] font-bold hover:bg-gray-200 text-sm">
                    <a href="/admission2024">Contact Us</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
