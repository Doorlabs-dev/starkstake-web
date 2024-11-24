/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  output: "export",
  productionBrowserSourceMaps: false,
  // Other Next.js config options can go here
  trailingSlash: true, // Ensures trailing slashes are added to routes
};

export default nextConfig;
