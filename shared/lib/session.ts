import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getUserId = async (): Promise<string | null> => {
  const session = await auth();

  if (!session?.user?.id) redirect("/login");

  return session?.user?.id ?? null;
};
