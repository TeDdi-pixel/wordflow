"use server";

import { redirect } from "next/navigation";

import { logout } from "@/shared/lib/session";

export const logOutUser = async (formData: FormData) => {
  try {
    await logout();
  } catch (error) {
    console.error("Logout error:", error);
  }

  redirect("/login");
};
