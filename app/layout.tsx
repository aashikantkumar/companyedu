import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Admission Consultancy in Patna | The Education Care",
  description:
    "The Education Care is one of the Best leading educational consultancy in Bihar and throughout India. Providing exemplary services to students in MEDICINE, ENGINEERING, MBA, BCA, BBA, BJMC, PGDM, BDS, BAMS, B.PHARMA & ALL PROFESSIONAL COURSES.",
  keywords:
    "admission consultancy patna, education consultancy bihar, engineering admission, medical admission, mbbs admission, career counselling patna",
  openGraph: {
    title: "Top Colleges in India 2024 – Courses, Fees, Admission | The Education Care",
    description:
      "Check out the list of top Colleges in India based on the ranking with courses, admission, placement, reviews, ranking, latest news, and more on The Education Care.",
    type: "website",
    url: "https://theeducationcare.in",
    siteName: "The Education Care",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Colleges in India – Courses, Fees, Admission | The Education Care",
    description:
      "Check out the list of top Colleges in India based on the ranking with courses, fees, admission, placement, reviews, ranking, and more on The Education Care.",
    site: "The Education Care",
  },
};

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased bg-white relative" suppressHydrationWarning>
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <AnimatedGridPattern
            numSquares={50}
            maxOpacity={0.05}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(100vw_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12 stroke-[var(--primary)] fill-[var(--primary)]",
            )}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
