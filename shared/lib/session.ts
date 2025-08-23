import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getUserId = async (): Promise<string> => {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return session.user.id;
};

export const getUserEmail = async (): Promise<string | null> => {
  const session = await auth();
  return session?.user?.email || null;
};

export const getUserName = async (): Promise<string | null> => {
  const session = await auth();
  return session?.user?.name || null;
};
