import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

export async function GET(
  req :any
) {

  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
   const token = await getToken({ req });
  return NextResponse.json(token);
}
