import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['images.unsplash.com', 'www.jsports.co.jp'], // 許可するドメインを追加
  },
};

export default nextConfig;
