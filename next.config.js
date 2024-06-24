/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: ['www.pngall.com', 'png.pngtree.com', 'cryptologos.cc', 'assets-global.website-files.com'], // Add other allowed hostnames if needed
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
