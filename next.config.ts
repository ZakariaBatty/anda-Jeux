import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   output: 'standalone',
   basePath: '/quiz',
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
