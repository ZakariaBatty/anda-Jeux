import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   output: 'standalone',
   basePath: '/quiz',
   assetPrefix: '/quiz/',
   trailingSlash: true,
   poweredByHeader: false,
   generateEtags: false,
   compress: true,
   images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '*',
         },
      ],
   },
};

export default nextConfig;
