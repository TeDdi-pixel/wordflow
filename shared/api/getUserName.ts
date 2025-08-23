import User from "@/shared/model/schemas/User";
import { cache } from "react";
import createDbConnection from "../lib/mongoose";

export const getDbUserName = cache(async (email: string) => {
  if (!email) return null;

  await createDbConnection();

  const user = await User.findOne({ email });
  return user?.username ?? null;
});
