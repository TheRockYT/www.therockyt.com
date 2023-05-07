/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true, // <---- Comment and Uncomment this
  },
});

/** @type {import('next').NextConfig} */
/*const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;*/
