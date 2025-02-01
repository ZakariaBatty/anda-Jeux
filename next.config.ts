import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   output: 'standalone',
   basePath: '/quiz',
   assetPrefix: '/quiz/',

   images: {
      dangerouslyAllowSVG: true,
   },
};

export default nextConfig;
