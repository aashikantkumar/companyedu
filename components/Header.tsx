"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/The-education-care/logo/education-care.png";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Mission & Vision", href: "/mission-vision" },
      { label: "Our Core Values", href: "/our-core-values" },
    ],
  },
  {
    label: "Services",
    href: "#",
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
    children: [
      { label: "Engineering", href: "/engineering" },
      { label: "Medical", href: "/medical" },
      { label: "Management", href: "/management" },
      { label: "LAW", href: "/law" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "NIRF Ranking",
    href: "#",
    children: [
      { label: "NIRF Ranking 2021", href: "/nirf-2021" },
      { label: "NIRF Ranking 2022", href: "/nirf-2022" },
    ],
  },
  { label: "Contact", href: "/contact" },
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
      <div className="bg-[#1b3a5d] text-white text-xs py-2.5">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/70">
              <MapPin size={12} className="text-[#f28f1d]" />
              Branch Office: Pushpanjali Complex Patna-1
            </span>
            <div className="hidden sm:flex items-center gap-2">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#f28f1d] transition-colors duration-200">
                  <Icon size={11} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5 text-white/70">
            <a href="tel:+916207013805" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={11} className="text-[#f28f1d]" />
              Call Us Now: +91 620 701 3805
            </a>
            <span className="hidden sm:block">|</span>
            <a href="mailto:theeducationcare6@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={11} className="text-[#f28f1d]" />
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
        <div className="container-custom">
          <div className="flex items-center justify-between py-2">
            {/* Logo — actual education-care.png badge */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src={logo}
                  alt="The Education Care Logo"
                  width={64}
                  height={64}
                  className="rounded-full"
                  priority
                />
              </div>
              {/* Text beside logo */}

            </a>

            {/* Desktop Nav — matches original: HOME in orange, rest dark */}
            <nav className="hidden xl:flex items-center gap-0">
              {navItems.map((item, idx) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-1 px-3.5 py-5 text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 ${idx === 0
                        ? "text-[#f28f1d] border-[#f28f1d]"
                        : "text-[#1b3a5d] border-transparent hover:text-[#f28f1d] hover:border-[#f28f1d]"
                      }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-0 min-w-52 z-50">
                      <div className="bg-white rounded-b-lg shadow-xl border-t-2 border-[#f28f1d] overflow-hidden py-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-[#1b3a5d] hover:bg-[#f28f1d] hover:text-white transition-colors font-medium"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Admission Button */}
            <div className="hidden lg:block">
              <a
                href="/admission2024"
                className="bg-[#f28f1d] hover:bg-[#d97e10] text-white font-bold text-sm px-6 py-2.5 rounded transition-all duration-200 hover:shadow-lg uppercase tracking-wide"
              >
                ADMISSION 2024
              </a>
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
            <div className="container-custom py-3 flex flex-col">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-[#1b3a5d] font-semibold hover:bg-orange-50 text-sm"
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className={openDropdown === item.label ? "rotate-180" : ""} />}
                  </button>
                  {item.children && openDropdown === item.label && (
                    <div className="bg-gray-50 ml-4">
                      {item.children.map((c) => (
                        <a key={c.label} href={c.href} className="block px-6 py-2 text-sm text-gray-600 hover:text-[#f28f1d]">{c.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4 pt-3">
                <a href="/admission2024" className="block text-center bg-[#f28f1d] text-white font-bold py-3 rounded uppercase tracking-wide">
                  ADMISSION 2024
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
