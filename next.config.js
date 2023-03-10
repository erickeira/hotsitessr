/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {    
  //   runtime: "experimental-edge",
  //   appDir: true,
  // }  ,
  // runtime: "edge",
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
 };
  
module.exports = nextConfig;