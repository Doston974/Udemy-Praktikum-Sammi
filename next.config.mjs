/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*" },
      { protocol: "https", hostname: "*" },
    ],
  },
};

export default nextConfig;
