import { ArrowRight } from "lucide-react";
import { container, section } from "@/lib/styles";

const services = [
  {
    icon: "📋",
    title: "Career Counseling",
    desc: "Over the years, we have developed a strategy that has produced positive results in helping. We provide Best..",
    href: "/career",
    color: "#1b3a5d",
  },
  {
    icon: "🏛️",
    title: "University Selection",
    desc: "Our expert counselors help students to select universities and colleges that best suit their personal, academic, financial,",
    href: "/university-selection",
    color: "#1b3a5d",
  },
  {
    icon: "📋",
    title: "Admission Guidance",
    desc: "we provide you with the right Admission guidance and all the information needed towards successful completion...",
    href: "/admission-guidance",
    color: "#1b3a5d",
  },
  {
    icon: "📚",
    title: "Entrance Exam Guidance",
    desc: "Students, in order to effectively practice to clear the entrance exams at different levels, must follow some basic but...",
    href: "/entrance-exam-guidance",
    color: "#1b3a5d",
  },
  {
    icon: "💬",
    title: "Virtual Counselling",
    desc: "The online career counseling is time saving as there is no need to book or schedule an appointment with the career",
    href: "/virtual-counselling",
    color: "#1b3a5d",
  },
];

export default function CoreServices() {
  return (
    <section className={`${section} relative overflow-hidden`} style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=40')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/88 backdrop-blur-sm" />

      <div className={`${container} relative z-10`}>
        {/* 3x2 Grid — exactly like original with orange intro card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Intro Card — orange, top-left like original */}
          <div className="bg-[#f28f1d] rounded-lg p-7 flex flex-col justify-between min-h-52">
            <div>
              <h2 className="text-white font-black text-2xl leading-tight mb-3">
                Explore<br/>Our Core<br/>Services
              </h2>
              <p className="text-white/85 text-sm leading-relaxed">
                The Education Care is a Private Education Consultancy. We provide our services to students who want to pursue higher education in Engineering, Medical, and Management.
              </p>
            </div>
            <a href="#consultation" className="mt-5 self-start">
              <ArrowRight size={20} className="text-white hover:scale-125 transition-transform" />
            </a>
          </div>

          {/* 5 Service Cards */}
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon circle — teal/blue like original */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, #1b9aaa, #1b3a5d)" }}>
                <span className="text-2xl">{s.icon}</span>
              </div>
              <h4 className="text-[#1b3a5d] font-bold text-base mb-2">{s.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <a
                href={s.href}
                className="text-[#f28f1d] font-semibold text-sm hover:underline flex items-center gap-1"
              >
                Read More <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
