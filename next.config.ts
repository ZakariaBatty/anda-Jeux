import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   output: 'standalone',
   basePath: '/quiz', // Add this line to handle the /quiz subdirectory
   assetPrefix: '/quiz/', // Add this to ensure assets are loaded correctly
   trailingSlash: true, // This helps with compatibility on some hosting setups
   images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '*',
         },
      ],
   },
   reactStrictMode: true,
   experimental: {},
};

export default nextConfig;
