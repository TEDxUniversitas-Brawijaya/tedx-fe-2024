const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "help.xendit.co",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
