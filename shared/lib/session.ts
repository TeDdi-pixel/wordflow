import { auth } from "@/auth";

export const getUserId = async (): Promise<string | null> => {
  const session = await auth();

  return session?.user?.id ?? null;
};
