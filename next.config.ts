import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tremplin-demo",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
