"use client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes/dist/index";
import { useSession } from "next-auth/react";
import { Role } from "@/lib/enum";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DarkMode = () => {
  const { theme } = useTheme();

  return theme === "dark";
};

export const IsAmin = () => {
  const { data: session, status } = useSession();
  return session?.userRole === Role.ADMIN;
};

export const IsLoadingLogin = () => {
  const { data: session, status } = useSession();
  return status === "loading";
};

