/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
});

/** @type {import('next').NextConfig} */
/*const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;*/
