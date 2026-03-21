import { Card, CardCanvas } from "@/components/ui/animated-glow-card";
import { XCard } from "@/components/ui/x-gradient-card";
import { container, section, sectionLabel, sectionTitle } from "@/lib/styles";

const testimonialData = {
  link: "#",
  authorName: "Rahul Kumar",
  authorHandle: "rahul_student",
  authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  content: [
    "The Education Care helped me get admission into my dream engineering college in Bangalore!",
    "Their team provided excellent guidance throughout the entire admission process.",
  ],
  isVerified: true,
  timestamp: "March 15, 2026",
  reply: {
    authorName: "The Education Care",
    authorHandle: "educationcare",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",
    content: "We're thrilled to have helped you achieve your goals! Wishing you all the best in your engineering journey! 🎓",
    isVerified: true,
    timestamp: "March 15",
  },
};

export default function FeaturedTestimonial() {
  return (
    <section className={`${section} bg-black`}>
      <div className={container}>
        <div className="text-center mb-12">
          <p className={`${sectionLabel} !text-white/42`}>STUDENT SUCCESS STORY</p>
          <h2 className={`${sectionTitle} text-white mb-3`}>Real Students, Real Results</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            See what our students have to say about their admission journey with The Education Care.
          </p>
        </div>

        <div className="flex justify-center">
          <CardCanvas className="w-full max-w-2xl">
            <Card className="w-full p-0">
              <div className="dark">
                <XCard {...testimonialData} />
              </div>
            </Card>
          </CardCanvas>
        </div>
      </div>
    </section>
  );
}
