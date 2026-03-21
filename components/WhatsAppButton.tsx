import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+916207013805"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-full border border-white/18 bg-[linear-gradient(180deg,rgba(20,20,20,0.92)_0%,rgba(10,10,10,0.82)_100%)] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.48),0_0_30px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:text-white max-[480px]:rounded-full max-[480px]:p-3.5"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/[0.08] shadow-[0_0_16px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-300 group-hover:bg-white/[0.12]">
        <MessageCircle size={18} className="shrink-0 text-white/90" />
      </span>
      <span className="flex flex-col leading-none max-[480px]:hidden">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/42">Quick Chat</span>
        <span className="mt-1 text-sm font-semibold text-white">Message me</span>
      </span>
    </a>
  );
}
