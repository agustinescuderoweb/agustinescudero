import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/servicios/sitios",
        destination: "/servicios/web-business",
        permanent: true,
      },
      {
        source: "/servicios/landing",
        destination: "/servicios/web-business",
        permanent: true,
      },
      {
        source: "/servicios/ecommerce",
        destination: "/servicios/ecommerce-business",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;