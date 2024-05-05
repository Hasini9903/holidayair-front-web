/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: "dist",
  images: {
    domains: ["localhost"], // Add 'localhost' to the allowed domains
  },
};

module.exports = nextConfig;
