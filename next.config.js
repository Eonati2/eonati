/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/eonati',
  assetPrefix: '/eonati/',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
}

module.exports = nextConfig
