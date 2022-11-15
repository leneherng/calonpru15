/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/calonpru15',
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = nextConfig;
