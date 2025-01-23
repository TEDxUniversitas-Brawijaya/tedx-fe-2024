import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = (process.env.ADMIN_EMAILS as string).split(",");
      if (allowedEmails.includes(user.email || "")) {
        return true;
      }

      return false;
    },
  },
};
