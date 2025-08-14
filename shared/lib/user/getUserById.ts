import User from "@/shared/model/schemas/User";
import createDbConnection from "../mongoose";

export const getUserById = async (userId: string) => {
  await createDbConnection();
  const user = await User.findById(userId);
  return user ?? null;
};
