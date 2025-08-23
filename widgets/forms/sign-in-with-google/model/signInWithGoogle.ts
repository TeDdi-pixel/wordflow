"use server";

import { signIn } from "@/auth";

export const signInWithGoogle = async () => {
  try {
    await signIn("google");
  } catch (error) {
    throw error;
  }
};
