import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPostInsert = nextUrl.pathname.startsWith('/blog/post/insert');
      console.log('Auth callback - authorized called', { auth, nextUrl, isLoggedIn, isOnPostInsert });
      if (isOnPostInsert) {
        return (isLoggedIn); // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;