import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { container } from "@/lib/styles";

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
  const buttonVariant = variant === "orange" ? "white" : "secondary";

  return (
    <div className={`${bgMap[variant]} py-7`}>
      <div className={container}>
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
          <Button asChild variant={buttonVariant} size="lg" className="shrink-0 rounded-md px-8 shadow-none hover:shadow-lg">
            <a href={buttonHref}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
