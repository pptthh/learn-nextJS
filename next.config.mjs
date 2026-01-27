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
        ///\api\/v1\/health/
      ],
    },
  },
  environment: process.env.NODE_ENV,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    TEST_KEY: 'process.env.TEST_KEY',
  },
};

export default nextConfig;
