"use server";

import { logout } from "@/shared/lib/session";

export const logOutUser = async () => {
  try {
    await logout();
  } catch (error) {
    return error;
  }
};
