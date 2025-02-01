/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone',
   basePath: '/quiz', // 👈 Set basePath for subdirectory hosting
   assetPrefix: '/quiz', // 👈 Ensure static assets load correctly
};

module.exports = nextConfig;
