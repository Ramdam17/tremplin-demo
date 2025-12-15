import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tremplin-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
