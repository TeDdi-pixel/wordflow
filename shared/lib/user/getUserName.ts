import createDbConnection from "@/shared/lib/mongoose";
import User from "@/shared/model/schemas/User";
import { cache } from "react";

export const getUserName = cache(async (userId: string) => {
  await createDbConnection();
  const user = await User.findById(userId).select("username -_id");
  return user?.username ?? null;
});
