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
  void variant;
  return (
    <div className="relative overflow-hidden bg-black py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_42%)]" />
        <div className="absolute inset-0 opacity-12 [mask-image:linear-gradient(to_top,black_18%,transparent_72%)]">
          <div className="absolute inset-[-55%] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:64px_64px] [transform:perspective(1300px)_rotateX(72deg)_translateY(16%)]" />
        </div>
      </div>
      <div className={container}>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] px-6 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl md:px-8">
          <div className="text-center sm:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/38">Quick Action</p>
            <p className="mt-3 text-lg font-bold text-white md:text-2xl">
              {heading}
            </p>
            {phoneNumber && (
              <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="flex items-center gap-2 text-white/60 hover:text-white mt-2 text-sm justify-center sm:justify-start">
                <Phone size={13} /> {phoneNumber}
              </a>
            )}
          </div>
          <Button asChild variant="ghost" size="lg" className="shrink-0 rounded-full border border-white/20 bg-white text-black hover:bg-zinc-100 px-8 shadow-[0_10px_28px_rgba(255,255,255,0.14)]">
            <a href={buttonHref}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
