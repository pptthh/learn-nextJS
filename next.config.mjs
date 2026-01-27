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
};

export default nextConfig;
