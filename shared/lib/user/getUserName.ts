import User from "@/shared/model/schemas/User";
import { cache } from "react";
import createDbConnection from "../mongoose";

export const getUserName = cache(async (email: string | null) => {
  if (!email) return null;

  await createDbConnection();

  const user = await User.findOne({ email });
  return user?.username ?? null;
});
