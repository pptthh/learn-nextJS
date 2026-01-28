/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    browserToTerminal: 'true',
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    incomingRequests: {
      ignore: [
        // /\api\/v1\/health/
      ],
    },
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;
