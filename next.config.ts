import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Autoriser les images provenant de cdn.sanity.io
  },
};

export default nextConfig;
