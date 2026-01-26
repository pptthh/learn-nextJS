import NextAuth from "next-auth"
import type { EmailProviderSendVerificationRequestParams } from "next-auth/providers/email"
import { sendVerificationRequest } from "@/app/lib/authSendRequestAdv"
// import { adapter } from "@/app/lib/authAdapterAdv"
 
export const { handlers, auth } = NextAuth({
//   adapter,
  providers: [
    {
      id: "http-email",
      name: "Email",
      type: "email",
      maxAge: 60 * 60 * 24, // Email link will expire in 24 hours
      sendVerificationRequest: (params: EmailProviderSendVerificationRequestParams) => 
        sendVerificationRequest(params as any),
    },
  ],
})