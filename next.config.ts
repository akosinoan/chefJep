import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: '/chefjep/',
  basePath: '/chefjep',
  images: {
    loader: 'akamai',
    path: '',
  },/* config options here */
};

export default nextConfig;
