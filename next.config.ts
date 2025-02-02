/** @type { import('next').NextConfig } */
const nextConfig = {
   output: 'standalone',
   // basePath: '/quiz',
   // assetPrefix: '/quiz/',
   images: {
      unoptimized: true, // Required for LWS cPanel deployment
      // domains: ['https://devloup.com'], // Add your domain here
      dangerouslyAllowSVG: true,
   },
};

export default nextConfig;
