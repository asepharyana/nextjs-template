import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Allow HMR/dev resources for local tooling (Playwright webServer on 127.0.0.1,
  // LAN dev access). Only affects `next dev`.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
