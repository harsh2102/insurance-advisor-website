import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: "export",

  trailingSlash: true, // ✅ IMPORTANT

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
