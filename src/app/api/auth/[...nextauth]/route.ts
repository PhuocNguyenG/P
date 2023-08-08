import { apiLoginWithSocial } from "@/lib/apiRequest";
import { Role } from "@/lib/enum";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  callbacks: {
    async jwt({ token, account }) {
      const user = (await apiLoginWithSocial({ email: token.email })) as {
        email: string;
        role: number;
      };
      if (user.role === Role.ADMIN) {
        token.userRole = Role.ADMIN;
      } else {
        token.userRole = Role.USER;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.userRole = token.userRole;
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
