import NextAuth from "next-auth"
import { sendVerificationRequest } from "@/app/lib/authSendRequestAdv"
 
export const { handlers, auth } = NextAuth({
  adapter,
  providers: [
    {
      id: "http-email",
      name: "Email",
      type: "email",
      maxAge: 60 * 60 * 24, // Email link will expire in 24 hours
      sendVerificationRequest,
    },
  ],
})