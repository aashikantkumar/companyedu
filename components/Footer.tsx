import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { container } from "@/lib/styles";
import logo from "../assets/The-education-care/logo/education-care.png";

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

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
] satisfies Array<{ Icon: LucideIcon; href: string; label: string }>;

const contactItems = [
  {
    Icon: MapPin,
    href: "#",
    label: "Visit Us",
    value: "G-35, Pushpanjali Complex, Boring Road, Patna-800001",
  },
  {
    Icon: Phone,
    href: "tel:+916207013805",
    label: "Call Us",
    value: "+91 620 701 3805",
  },
  {
    Icon: Mail,
    href: "mailto:theeducationcare6@gmail.com",
    label: "Email Us",
    value: "theeducationcare6@gmail.com",
  },
] satisfies Array<{ Icon: LucideIcon; href: string; label: string; value: string }>;

function FooterLinkList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/38">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-white/56 transition-colors duration-300 hover:text-white"
            >
              <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_top,black_15%,transparent_72%)]">
          <div className="absolute inset-[-55%] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px] [transform:perspective(1300px)_rotateX(72deg)_translateY(16%)]" />
        </div>
      </div>

      <div className={`${container} relative z-10 py-12 md:py-14`}>
        <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-5 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl md:px-7 md:py-7">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/14 bg-white/[0.06] shadow-[0_0_24px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <Image
                    src={logo}
                    alt="The Education Care Logo"
                    width={40}
                    height={40}
                    className="h-auto w-auto rounded-full object-contain"
                    priority={false}
                  />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.32em] text-white/38">Admission Consultancy</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-white">The Education Care</h2>
                </div>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-white/50">
                The Education Care is one of the best leading educational consultancy in Bihar and throughout India,
                providing exemplary services to students in MEDICINE, ENGINEERING, MBA, and all professional courses.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {contactItems.map(({ Icon, href, label, value }) => (
                  <a
                    key={label}
                    href={href}
                    className="group rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white/82">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/38">{label}</p>
                    </div>
                    <p className="mt-3 break-words text-sm leading-6 text-white/70 transition-colors duration-300 group-hover:text-white">
                      {value}
                    </p>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.32em] text-white/36">Connect</span>
                <div className="h-px w-12 bg-gradient-to-r from-white/25 to-transparent" />
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white/58 transition-all duration-300 hover:border-white/26 hover:bg-white/[0.1] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <FooterLinkList title="Useful Links" links={usefulLinks} />
              <FooterLinkList title="Popular Courses" links={popularCourses} />
              <FooterLinkList title="Important Links" links={importantLinks} />
              <FooterLinkList title="Quick Links" links={quickLinks} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/8">
        <div className={`${container} flex flex-col items-center justify-between gap-2 py-4 text-center text-xs text-white/34 sm:flex-row sm:text-left`}>
          <p>Copyright © The Education Care 2024. All rights reserved.</p>
          <p>
            Made by{" "}
            <a href="#" className="text-white/72 transition hover:text-white">
              The Education Care Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
