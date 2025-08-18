"use server";

import { redirect } from "next/navigation";

import { signOut } from "@/auth";

export const signOutUser = async (formData: FormData) => {
  try {
    await signOut({ redirect: false });
  } catch (error) {
    console.error("Logout error:", error);
  }

  redirect("/login");
};
