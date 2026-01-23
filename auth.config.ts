import type { NextAuthConfig } from 'next-auth';
import NextAuth from "next-auth";
// import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";
import AzureADProvider from "next-auth/providers/azure-ad";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import GitlabProvider from "next-auth/providers/gitlab";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import LinkedInProvider from "next-auth/providers/linkedin";
import SlackProvider from "next-auth/providers/slack";
// import OktaProvider from "next-auth/providers/okta";

export const authConfig = {
  providers: [
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
    // AzureADB2CProvider({
    //   tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
    //   clientId: process.env.AZURE_AD_B2C_CLIENT_ID,
    //   clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,
    //   primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
    //   authorization: { params: { scope: "offline_access openid" } },
    // }),
    // OktaProvider({
    //   clientId: process.env.OKTA_CLIENT_ID,
    //   clientSecret: process.env.OKTA_CLIENT_SECRET,
    //   issuer: process.env.OKTA_ISSUER
    // }),
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


