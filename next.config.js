module.exports = {
  logging: {
    browserToTerminal: 'true',
    trustHost: true,
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
}
