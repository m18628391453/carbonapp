import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // 关键配置：生成独立部署文件
  reactStrictMode: true,
  images: {
    unoptimized: true, // Docker部署时建议关闭图片优化
  },
  devIndicators: false, // 这个就是关键
};

export default nextConfig;
