"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider, useSession } from "next-auth/react";
import type { Session } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "PL Admin Dashboard",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </NextUIProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
