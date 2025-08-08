// REVIEWED - 02
import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/media/file/**",
      },
    ],
  },
  serverActions: {
    bodySizeLimit: "10mb"
  },
};

export default withPayload(nextConfig);
