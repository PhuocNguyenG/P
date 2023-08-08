
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
import { withAuth } from "next-auth/middleware"
import { Role } from './lib/enum';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (token?.userRole === Role.ADMIN) {
        console.log(token?.userRole);
        return true
      }
      // `/me` only requires the user to be logged in
      return true
    },
  },
})
export const config = {
  matcher: ["/products"],
};
