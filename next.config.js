/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true
  },
  images: {
    loader: 'akamai',
    path: ''
  }
}
