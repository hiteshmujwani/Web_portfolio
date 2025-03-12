/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.microlink.io", "assets.aceternity.com"], // Allow external image source
  },
};

export default nextConfig;
