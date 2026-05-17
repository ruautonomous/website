import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://sites.google.com/view/aiaaruautonomous/home",
        permanent: false,
      },
      {
        source: "/:path*",
        destination: "https://sites.google.com/view/aiaaruautonomous/home",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
