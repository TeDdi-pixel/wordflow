"use server";

import { logout } from "@/shared/lib/session";
import { redirect } from "next/navigation";

export const logOutUser = async () => {
  try {
    await logout();
    redirect("/login");
  } catch (error) {
    return error;
  }
};
