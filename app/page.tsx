import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import CTAStrip from "@/components/CTAStrip";
import ServicesHighlight from "@/components/ServicesHighlight";
import AboutSection from "@/components/AboutSection";
import CollegeCarousel from "@/components/CollegeCarousel";
import CoursesGrid from "@/components/CoursesGrid";
import ProfessionalCourses from "@/components/ProfessionalCourses";
import CoreServices from "@/components/CoreServices";
import StatsAndTestimonials from "@/components/StatsAndTestimonials";
import LatestNews from "@/components/LatestNews";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const engineeringColleges = [
  {
    name: "Bharati Vidyapeeth Deemed University",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    founded: "1964",
    location: "Pune, Maharashtra",
    approval: "UGC, AICTE",
    extra: "335+ courses",
  },
  {
    name: "Maharashtra Institute of Technology (MIT)",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    founded: "1983",
    location: "Pune, Maharashtra",
    approval: "AICTE, UGC",
    extra: "Campus: 10 acres",
  },
  {
    name: "Galgotias College of Engineering & Technology",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    founded: "1999",
    location: "Greater Noida, U.P",
    approval: "AICTE",
    extra: "Campus: 19 acres",
  },
  {
    name: "SRM Institute of Science and Technology",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
    founded: "1985",
    location: "Kattankulathur, Chennai",
    approval: "AICTE, UGC",
    extra: "Campus: 250 acres",
  },
  {
    name: "Ramaiah Institute of Technology",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80",
    founded: "1947",
    location: "M S R Nagar, Bangalore",
    approval: "NAAC, UGC",
    extra: "Campus: 85 acres",
  },
];

const medicalColleges = [
  {
    name: "All India Institute of Medical Sciences, Delhi",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    founded: "1956",
    location: "New Delhi, Delhi NCR",
    approval: "MCI, UGC",
    extra: "Premier Medical Institute",
  },
  {
    name: "Kasturba Medical College (KMC), Manipal",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
    founded: "1956",
    location: "Manipal, Karnataka",
    approval: "MCI, UGC",
    extra: "Top Medical College",
  },
  {
    name: "University College of Medical Sciences (UCMS)",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
    founded: "1971",
    location: "New Delhi, Delhi NCR",
    approval: "MCI",
    extra: "Government Medical College",
  },
  {
    name: "Jawaharlal Institute (JIPMER)",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
    founded: "1964",
    location: "Pondicherry, Puducherry",
    approval: "DCI, MCI, UGC",
    extra: "Top Government Institute",
  },
  {
    name: "Osmania Medical College, Hyderabad",
    image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=600&q=80",
    founded: "1846",
    location: "Medak, Telangana",
    approval: "MCI",
    extra: "Historic Medical College",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <HeroSlider />

      {/* CTA Strip */}
      <CTAStrip variant="blue" />

      {/* Why Choose Us */}
      <ServicesHighlight />

      {/* About / Course Details */}
      <AboutSection />

      {/* Top Engineering Colleges */}
      <CollegeCarousel
        title="Top Engineering Colleges in India 2024"
        colleges={engineeringColleges}
        bgLight={false}
      />

      {/* Top Medical Colleges */}
      <CollegeCarousel
        title="Top Medical Colleges in India"
        colleges={medicalColleges}
        bgLight={true}
      />

      {/* Quote Strip */}
      <div className="bg-[#17416c] py-10">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-3xl mx-auto leading-relaxed">
            Consulting is the heart of our Students, and our Students are the{" "}
            <span className="text-[#f6830e]">Heartbeat.</span>
          </h2>
        </div>
      </div>

      {/* Courses Grid */}
      <CoursesGrid />

      {/* Professional Courses */}
      <ProfessionalCourses />

      {/* Core Services */}
      <CoreServices />

      {/* Stats + Testimonials */}
      <StatsAndTestimonials />

      {/* Latest News */}
      <LatestNews />

      {/* Consultation Form */}
      <ConsultationForm />

      {/* Red CTA */}
      <CTAStrip
        variant="red"
        heading="Are you looking for expert guidance for Admission in top Colleges?"
        buttonText="Contact Us Now"
        buttonHref="/contact"
      />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Float */}
      <WhatsAppButton />
    </main>
  );
}
