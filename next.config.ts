import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,  // 👈 ADD THIS LINE

  images: {
    domains: [], // add any external image domains if needed
  },
};

export default nextConfig;