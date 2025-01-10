const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      }
    ],
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com"
      }
    ]
  }
};

export default nextConfig;
