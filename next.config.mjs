/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: "/hve-website",
  assetPrefix: "/hve-website/"
};

export default nextConfig;
