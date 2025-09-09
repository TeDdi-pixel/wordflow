import NextAuth from "next-auth";
import axios from "axios";
import Google from "./shared/auth/providers/google";
import Credentials from "./shared/auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 10 * 365 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  providers: [Google, Credentials],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        try {
          let existingUserRes = await axios.post(
            `${process.env.BASE_URL}/api/users`,
            { email: user.email, provider: account.provider },
            { headers: { "Content-Type": "application/json" } }
          );

          const existingUser = existingUserRes.data;

          if (existingUser.ok) {
            user.id = existingUser.id;
            user.name = existingUser.username;
            return true;
          }

          const res = await axios.post(
            `${process.env.BASE_URL}/api/users/create`,
            {
              email: user.email,
              userName: user.name,
              provider: account.provider,
            },
            { headers: { "Content-Type": "application/json" } }
          );

          const userData = res.data;

          if (!userData.ok || !userData.id) return false;

          user.id = userData.id;
          user.name = userData.username;

          return true;
        } catch (error) {
          console.error("Google signIn error:", error);
          return false;
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      return session;
    },
  },
});

export { auth as middleware };
