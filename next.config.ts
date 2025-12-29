import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
