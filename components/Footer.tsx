import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
  { label: "Mission & Vision", href: "/mission-vision" },
  { label: "Core Values", href: "/our-core-values" },
  { label: "Career Counseling", href: "#consultation" },
  { label: "University Selection", href: "/university-selection" },
  { label: "Visa Document", href: "#" },
  { label: "24x7 Live Help", href: "tel:+916207013805" },
];

const popularCourses = [
  { label: "B.Tech / B.E", href: "/b-tech" },
  { label: "Diploma", href: "/diploma" },
  { label: "M.Tech", href: "/m-tech" },
  { label: "Polytechnic", href: "/polytechnic" },
  { label: "Study MBBS", href: "/mbbs" },
  { label: "BDS", href: "/bds" },
  { label: "Bsc Nursing", href: "/nursing" },
  { label: "BAMS", href: "/bams" },
  { label: "MBA", href: "/mba" },
];

const importantLinks = [
  { label: "B.Pharma", href: "/b-pharma" },
  { label: "BPT", href: "/bpt" },
  { label: "BALLB", href: "/law" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/term-cond" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Student Credit Card", href: "/student-credit-card" },
  { label: "Required Documents", href: "/required-document" },
];

const quickLinks = [
  { label: "Engineering Admission", href: "/engineering" },
  { label: "Medical Admission", href: "/medical" },
  { label: "Admission in LAW", href: "/law" },
  { label: "Management Admission", href: "/management" },
  { label: "Virtual Counselling", href: "/virtual-counselling" },
  { label: "Admission Guidance", href: "/admission-guidance" },
  { label: "Our Gallery", href: "/gallery" },
  { label: "Get in Touch", href: "/admission2024" },
  { label: "NIRF Ranking", href: "/nirf-2021" },
];

function FooterLinkList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-white font-bold text-sm mb-5 pb-2 border-b border-white/10 uppercase tracking-wider">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex items-center gap-1.5 text-white/60 hover:text-[#f6830e] text-xs font-medium transition-colors duration-200 group"
            >
              <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-200" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0f1c2e]">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tight">The Education</span>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-8 bg-[#f6830e] rounded-full"></div>
                  <span className="text-lg font-bold text-[#f6830e]">Care</span>
                </div>
                <span className="text-xs text-white/40 tracking-widest uppercase mt-1">Admission Consultancy</span>
              </div>
            </div>

            <p className="text-white/50 text-xs leading-relaxed mb-6">
              The Education Care is one of the best leading educational consultancy in Bihar and throughout India, providing exemplary services to students in MEDICINE, ENGINEERING, MBA, and all professional courses.
            </p>

            {/* Contact Info */}
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="flex items-start gap-3 text-xs text-white/50 hover:text-white/80 transition-colors">
                  <MapPin size={14} className="text-[#f6830e] flex-shrink-0 mt-0.5" />
                  G-35, Pushpanjli Complex, Boring Road, Patna-800001
                </a>
              </li>
              <li>
                <a href="tel:+916207013805" className="flex items-center gap-3 text-xs text-white/50 hover:text-white/80 transition-colors">
                  <Phone size={13} className="text-[#f6830e] flex-shrink-0" />
                  +91 620 701 3805
                </a>
              </li>
              <li>
                <a href="mailto:theeducationcare6@gmail.com" className="flex items-center gap-3 text-xs text-white/50 hover:text-white/80 transition-colors">
                  <Mail size={13} className="text-[#f6830e] flex-shrink-0" />
                  theeducationcare6@gmail.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Get In Touch</p>
              <div className="flex gap-2 flex-wrap">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Youtube, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#f6830e] text-white/40 hover:text-white transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <FooterLinkList title="Useful Links" links={usefulLinks} />
          <FooterLinkList title="Popular Courses" links={popularCourses} />
          <FooterLinkList title="Important Links" links={importantLinks} />
          <FooterLinkList title="Quick Links" links={quickLinks} />
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p>Copyright © The Education Care 2024. All rights reserved.</p>
            <p>
              Made with ❤️ by{" "}
              <a href="#" className="text-[#f6830e] hover:underline">
                The Education Care Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
