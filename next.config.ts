import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kitakerja-webprogramming-be-production.up.railway.app",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
