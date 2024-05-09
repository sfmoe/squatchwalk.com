/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "us-east-1-shared-usea1-02.graphassets.com",
        pathname: "/**"
      }
    ]
  }
}

module.exports = nextConfig
