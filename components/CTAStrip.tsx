import { Phone } from "lucide-react";

interface CTAStripProps {
  variant?: "blue" | "orange" | "red";
  heading?: string;
  buttonText?: string;
  buttonHref?: string;
  phoneNumber?: string;
}

export default function CTAStrip({
  variant = "blue",
  heading = "Are you looking for expert for Admission In top Colleges?",
  buttonText = "CONTACT US",
  buttonHref = "/contact",
  phoneNumber,
}: CTAStripProps) {
  const bgMap = {
    blue: "bg-[#1b3a5d]",
    orange: "bg-[#f28f1d]",
    red: "bg-[#c0392b]",
  };

  return (
    <div className={`${bgMap[variant]} py-7`}>
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <p className="text-white text-lg font-bold italic">
              {heading}
            </p>
            {phoneNumber && (
              <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="flex items-center gap-2 text-white/70 hover:text-white mt-1 text-sm justify-center sm:justify-start">
                <Phone size={13} /> {phoneNumber}
              </a>
            )}
          </div>
          <a
            href={buttonHref}
            className="flex-shrink-0 bg-[#f28f1d] hover:bg-[#d97e10] text-white font-bold text-sm px-8 py-3 rounded uppercase tracking-widest transition-all duration-200 hover:shadow-lg"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
