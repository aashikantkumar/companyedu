import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "images.shiksha.com" },
      { hostname: "jipmer.edu.in" },
      { hostname: "www.mapsofindia.com" },
      { hostname: "www.mystudyindia.com" },
      { hostname: "d1csarkz8obe9u.cloudfront.net" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "blog.rmgoe.org" },
      { hostname: "edysor.in" },
      { hostname: "lloydpharmacy.edu.in" },
      { hostname: "uploads.sarvgyan.com" },
      { hostname: "manavrachna.edu.in" },
    ],
  },
};

export default nextConfig;
