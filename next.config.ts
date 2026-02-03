import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: The lockfiles warning is harmless and doesn't affect functionality
  // It occurs when there are multiple lockfiles in parent directories
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
