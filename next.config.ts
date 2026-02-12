import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to GitHub Pages under a subpath, uncomment and set:
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
};

export default nextConfig;
