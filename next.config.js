/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/eonati',
  assetPrefix: '/eonati/',
  trailingSlash: true,
}

module.exports = nextConfig
