"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/The-education-care/logo/education-care.png";
import { ChevronDown, Menu, Moon, SunMedium, X, Home, Info, BriefcaseBusiness, GraduationCap, Images, Trophy, PhoneCall } from "lucide-react";
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
  const [theme, setTheme] = useState<"night" | "day">("night");

  useEffect(() => {
    const storedTheme = typeof window !== "undefined" ? window.localStorage.getItem("site-theme") : null;
    const nextTheme = storedTheme === "day" ? "day" : "night";
    setTheme(nextTheme);
    document.body.classList.toggle("theme-day", nextTheme === "day");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "night" ? "day" : "night";
    setTheme(nextTheme);
    document.body.classList.toggle("theme-day", nextTheme === "day");
    window.localStorage.setItem("site-theme", nextTheme);
  };

  return (
    <>
      {/* Main Header — floating dark pill */}
      <header className="fixed top-4 left-0 right-0 w-full z-[100] transition-all duration-300 pointer-events-none">
        <div className={`${container} max-w-[1280px]`}>
          <div className={`pointer-events-auto relative flex items-center justify-between rounded-[2rem] border px-5 py-3 transition-all duration-300 md:px-6 ${
              scrolled 
                ? "bg-[rgba(8,8,8,0.9)] backdrop-blur-2xl border-white/12 shadow-[0_18px_50px_rgba(0,0,0,0.5)]" 
                : "bg-[rgba(12,12,12,0.84)] backdrop-blur-xl border-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
            }`}
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/[0.06] p-0.5 shadow-[0_0_18px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.12)] overflow-hidden transition-transform duration-200 group-hover:scale-105">
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
              <div className="hidden sm:block">
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Admission Consultancy</span>
                <span className="mt-1 block text-lg font-semibold tracking-wide text-white">The Education Care</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-7 ml-auto px-6">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 py-4 text-sm font-medium text-white/66 transition-colors hover:text-white"
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 opacity-70" />}
                  </a>
                  {item.children && (
                    <div className="absolute top-[85%] left-1/2 min-w-[220px] -translate-x-1/2 translate-y-2 overflow-hidden rounded-2xl border border-white/12 bg-[rgba(10,10,10,0.95)] shadow-[0_20px_45px_rgba(0,0,0,0.5)] opacity-0 invisible transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible backdrop-blur-2xl">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block border-b border-white/6 px-5 py-3 text-sm text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white last:border-0"
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
            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.05] px-4 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-white/72 transition-all duration-300 hover:border-white/24 hover:bg-white/[0.1] hover:text-white"
                aria-label={`Switch to ${theme === "night" ? "day" : "night"} mode`}
              >
                {theme === "night" ? <SunMedium size={15} /> : <Moon size={15} />}
                {theme === "night" ? "Day" : "Night"}
              </button>
              <Button asChild variant="ghost" className="rounded-full border border-white/18 bg-white text-black px-6 py-2.5 text-sm font-bold shadow-[0_10px_26px_rgba(255,255,255,0.12)] hover:bg-zinc-100 hover:text-black">
                <a href="/admission2024">Contact Us</a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/70 transition-colors hover:border-white/20 hover:text-white"
                aria-label={`Switch to ${theme === "night" ? "day" : "night"} mode`}
              >
                {theme === "night" ? <SunMedium size={20} /> : <Moon size={20} />}
              </button>
              <button
                className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/70 transition-colors hover:border-white/20 hover:text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`${container} max-w-[1280px] mt-3 pointer-events-auto xl:hidden`}>
            <div className="overflow-hidden rounded-3xl border border-white/12 bg-[rgba(10,10,10,0.95)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />
              <div className="flex flex-col px-4 py-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white/68 transition-colors hover:bg-white/[0.05] hover:text-white"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      {item.children && <ChevronDown size={14} className={openDropdown === item.label ? "rotate-180" : ""} />}
                    </button>
                    {item.children && openDropdown === item.label && (
                      <div className="mx-2 mb-2 mt-1 overflow-hidden rounded-xl bg-white/[0.04]">
                        {item.children.map((c) => (
                          <a key={c.label} href={c.href} className="block px-6 py-3 text-sm text-white/55 transition-colors hover:bg-white/[0.08] hover:text-white">{c.label}</a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-2 border-t border-white/10 p-4 pt-4">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="mb-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.05] py-3 text-xs font-black uppercase tracking-[0.18em] text-white/72 transition-all duration-300 hover:border-white/24 hover:bg-white/[0.1] hover:text-white"
                  >
                    {theme === "night" ? <SunMedium size={15} /> : <Moon size={15} />}
                    {theme === "night" ? "Switch To Day" : "Switch To Night"}
                  </button>
                  <Button asChild variant="ghost" className="flex w-full rounded-full border border-white/18 bg-white py-4 text-sm font-bold text-black shadow-[0_10px_26px_rgba(255,255,255,0.12)] hover:bg-zinc-100 hover:text-black">
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
