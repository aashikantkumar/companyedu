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
      {/* Top Bar — matches original navy strip */}
      <div className="bg-[var(--primary-dark)] text-white text-xs py-2.5">
        <div className={`${container} flex flex-col items-center justify-between gap-2 sm:flex-row`}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/70">
              <MapPin size={12} className="text-[var(--secondary)]" />
              Branch Office: Pushpanjali Complex Patna-1
            </span>
            <div className="hidden sm:flex items-center gap-2">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-6 h-6 flex items-center justify-center rounded hover:bg-[var(--secondary)] transition-colors duration-200">
                  <Icon size={11} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5 text-white/70">
            <a href="tel:+916207013805" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={11} className="text-[var(--secondary)]" />
              Call Us Now: +91 620 701 3805
            </a>
            <span className="hidden sm:block">|</span>
            <a href="mailto:theeducationcare6@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={11} className="text-[var(--secondary)]" />
              theeducationcare6@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header — white, logo centered-left, nav right */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/97 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
          }`}
      >
        <div className={container}>
          <div className="flex items-center justify-between py-2">
            {/* Logo — actual education-care.png badge */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={logo}
                  alt="The Education Care Logo"
                  width={64}
                  height={64}
                  className="rounded-full"
                  style={{ width: 'auto', height: 'auto' }}
                  priority
                />
              </div>
              {/* Text beside logo */}

            </Link>

            {/* Desktop Nav — matches original: HOME in orange, rest dark */}
            <div className="hidden xl:flex items-center gap-8 ml-auto px-6">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-bold uppercase transition-colors py-4 ${
                      item.label === "Home" ? "text-[var(--secondary)]" : "text-[var(--primary)] hover:text-[var(--secondary)]"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                  </a>
                  {item.children && (
                    <div className="absolute top-full left-0 min-w-[200px] bg-white shadow-lg border-t-2 border-[var(--secondary)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-[var(--primary)] hover:bg-gray-50 hover:text-[var(--secondary)] transition-colors border-b border-gray-100 last:border-0"
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
              <Button asChild variant="secondary" size="sm" className="rounded-md px-6 py-2.5 text-sm shadow-none hover:shadow-lg">
                <a href="/admission2024">Admission 2024</a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-[#1b3a5d]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className={`${container} flex flex-col py-3`}>
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-[var(--primary)] font-semibold hover:bg-[var(--bg-section)] text-sm"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className={openDropdown === item.label ? "rotate-180" : ""} />}
                  </button>
                  {item.children && openDropdown === item.label && (
                    <div className="bg-gray-50 ml-4">
                      {item.children.map((c) => (
                        <a key={c.label} href={c.href} className="block px-6 py-2 text-sm text-gray-600 hover:text-[var(--secondary)]">{c.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4 pt-3">
                <Button asChild variant="secondary" className="flex w-full rounded-md py-3 shadow-none">
                  <a href="/admission2024">Admission 2024</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
