import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   // images: {
   //    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],

   // },
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
