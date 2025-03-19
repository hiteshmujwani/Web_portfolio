/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io",
      "assets.aceternity.com",
      "images.unsplash.com",
      "res.cloudinary.com",
    ], // Allow external image source
  },
};

export default nextConfig;
