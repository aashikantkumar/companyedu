import { Button } from "@/components/ui/button";
import { container } from "@/lib/styles";
import { Settings, Dna, BarChart3, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

// Simulated 3D Assets using styled Lucide icons and Next.js Image for the avatar
const educationPaths = [
  {
    id: "01",
    title: "ENGINEERING",
    description: "Candidates must receive at least a 50 percent passing grade in their 10+2 or equivalent exam from a reputable institution. They must have majored in maths, physics, and chemistry in high school.",
    price: "B.Tech starts from 4 Lakhs",
    Icon: Settings,
    href: "/engineering",
  },
  {
    id: "02",
    title: "MEDICAL",
    description: "To secure MBBS admission in India, candidates must have passed class 12 from a recognized board. Physics, Chemistry, Biology/Biotechnology, and English are required as core subjects.",
    price: "MBBS package starts from 45 Lakhs",
    Icon: Dna,
    href: "/medical",
  },
  {
    id: "03",
    title: "MANAGEMENT",
    description: "To pursue Management Courses in India, Candidates must have passed 12th from any background. Students have to appear in exams like CAT, XAT, MAT, etc.",
    price: "BBA starts from 4 Lakhs",
    Icon: BarChart3,
    href: "/management",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden font-sans">
      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] opacity-30">
        <div className="absolute w-[200vw] h-[200vh] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:6rem_6rem] [transform:perspective(1000px)_rotateX(75deg)_translateY(-200px)_translateZ(-200px)]">
          {/* Glowing animated line on the grid (simulating light paths) */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent blur-sm animate-pulse shadow-[0_0_30px_rgba(255,255,255,1)]"></div>
          <div className="absolute left-[30%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent blur-sm animate-pulse delay-500 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
          <div className="absolute right-[30%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent blur-sm animate-pulse delay-1000 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        </div>
      </div>

      <div className={`${container} relative z-10 flex flex-col lg:flex-row gap-16`}>
        
        {/* Left Side: Timeline of Floating Glass Cubes */}
        <div className="flex-1 flex flex-col gap-12 relative max-w-4xl">
          {/* Vertical Timeline Line */}
          <div className="absolute left-10 md:left-14 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>

          {educationPaths.map((path, index) => (
            <div key={path.id} className="group relative flex flex-col md:flex-row items-start gap-8 z-10 w-full">
              
              {/* Timeline Node & 3D Glass Icon Cube */}
              <div className="relative shrink-0 flex items-center justify-center md:ml-4">
                {/* Glow behind cube */}
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Frosted Glass Cube containing the "3D Asset" */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-xl border border-zinc-800 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] inset-shadow-sm group-hover:border-white/50 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transform group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
                   {/* subtle metallic reflection */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                   <path.Icon className="w-10 h-10 md:w-12 md:h-12 text-zinc-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] transition-all duration-500" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content Box */}
              <div className="bg-white/5 backdrop-blur-md border border-zinc-800 rounded-[2rem] p-8 flex-1 group-hover:border-zinc-500 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-zinc-600 font-mono text-xl md:text-2xl font-bold tracking-tighter">{path.id}.</span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-widest uppercase">{path.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 leading-relaxed mb-8 text-sm md:text-base font-medium max-w-2xl">
                    {path.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 text-xs font-bold tracking-widest uppercase">
                      {path.price}
                    </div>
                    
                    {/* Ghost Button */}
                    <Button variant="outline" className="bg-transparent border-zinc-600 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full px-8 py-5 tracking-widest uppercase text-xs font-bold group/btn shadow-[0_0_15px_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      Explore Path <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Right Side: Sticky CTA Pod */}
        <div className="lg:w-[420px] shrink-0">
          <div className="sticky top-28 bg-zinc-900/40 backdrop-blur-3xl border border-zinc-800 rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
            {/* Subtle icy blue-white glow inside pod */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-400/10 rounded-full filter blur-[100px] opacity-30 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Avatar Ring */}
              <div className="relative w-36 h-36 mb-10">
                <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-2 rounded-full border border-zinc-600 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-4 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-700 p-1">
                   {/* Premium 3D-like Avatar from Unsplash */}
                   <Image 
                     src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80" 
                     alt="Expert Counselor" 
                     width={120} 
                     height={120} 
                     className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" 
                   />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4 tracking-tighter">
                STUDY ENGINEERING,<br/>MBBS & MBA
              </h3>

              <p className="text-zinc-400 mb-10 text-sm md:text-base leading-relaxed">
                Get Direct Admission in Top Colleges across India & Abroad through our expert guidance.
              </p>

              {/* Clean White Badge */}
              <div className="w-full inline-flex justify-center items-center bg-white text-black font-black text-xs md:text-sm py-4 px-6 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-8">
                100% Admission Guaranteed
              </div>

              {/* Ghost Button Filled on Hover */}
              <Button className="w-full bg-transparent border border-zinc-600 text-white hover:bg-white hover:text-black hover:border-white font-bold uppercase tracking-widest rounded-full py-7 text-xs transition-all duration-300">
                Meet Our Experts
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Message Bot */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:scale-110 group">
          <MessageCircle className="w-7 h-7 transform group-hover:scale-110 transition-transform" />
        </button>
      </div>

    </section>
  );
}
