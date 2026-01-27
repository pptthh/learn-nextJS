import NextAuth, { type NextAuthConfig } from 'next-auth';
import AzureADProvider from "next-auth/providers/microsoft-entra-id";
import EmailProvider from "next-auth/providers/nodemailer";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import GitlabProvider from "next-auth/providers/gitlab";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import LinkedInProvider from "next-auth/providers/linkedin";
import SlackProvider from "next-auth/providers/slack";

export const authConfig = {
  trustHost: true,
  debug: true,  // Enable debug logging
  logger: {
    warn: (code, ...message) => {
      // Handle specific warning codes
      if (code === 'debug-enabled') {
        console.log('[auth][info] Debug mode is enabled');
        return;
      }
      console.warn(`[auth][warn] ${code}:`, ...message);
    },
    error: (code, ...message) => {
      console.error(`[auth][error] ${code}:`, ...message);
    },
    info: (code: string, ...message: []) => {
      console.info(`[auth][info] ${code}:`, ...message);
    },
    debug: (code, ...message) => {
      console.log(`[auth][debug] ${code}:`, ...message);
    }
  },
  // trustedHosts: ['localhost', '127.0.0.1'],
  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM
    // }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GitlabProvider({
      clientId: process.env.GITLAB_CLIENT_ID,
      clientSecret: process.env.GITLAB_CLIENT_SECRET
    }),
    SlackProvider({
      clientId: process.env.SLACK_CLIENT_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    } as any),
     GoogleProvider({
       clientId: process.env.GOOGLE_CLIENT_ID,
       clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
     })
   ],
 } satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
