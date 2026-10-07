import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Set NEXT_PUBLIC_BASE_PATH=/portfolio when building for GitHub Pages project repo
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
};

export default nextConfig;
