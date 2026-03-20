import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+916207013805"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-[999] flex items-center gap-2 rounded-[30px_30px_5px_30px] bg-[var(--accent-green)] px-5 py-3 text-base font-semibold text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#128C7E] hover:shadow-[0_10px_30px_rgba(37,211,102,0.5)] max-[480px]:rounded-full max-[480px]:p-4"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} className="shrink-0" />
      <span className="max-[480px]:hidden">Message me</span>
    </a>
  );
}
