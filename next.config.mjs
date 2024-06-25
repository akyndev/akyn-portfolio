/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
        port: ""
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        port: ""
      }
    ]
  }
}

export default nextConfig
