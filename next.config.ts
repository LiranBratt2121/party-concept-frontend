import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://partyconcept.co.il/wp-content/**")
    ]
  }
};

export default nextConfig;
