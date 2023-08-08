import "next-auth/jwt";
import "next-auth";
// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role.1: user, 2: admin */
    userRole?: 1 | 2;
    accessToken?: string;
  }
}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string;
    userRole?: 1 | 2;
  }
}
