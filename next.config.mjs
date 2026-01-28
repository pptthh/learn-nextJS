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
  '--test': console.log('This is a test log from next.config.mjs'),
  environment: process.env.NODE_ENV,
  env: {
    OPENAI_API_KEY: 'process.env.OPENAI_API_KEY',
    TEST_KEY:       'process.env.TEST_KEY',
  },
};

export default nextConfig;
