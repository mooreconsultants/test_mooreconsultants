/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: process.cwd() },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      "/property-development-consultant-adelaide",
      "/project-management-for-property-development",
      "/lpa", "/lpb", "/lpc",
    ].map((source) => ({ source, destination: "/", permanent: true }))
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
 
}

export default nextConfig