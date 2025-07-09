import User from "@/shared/model/schemas/User";
import createDbConnection from "@/shared/lib/mongoose";

export const getUserById = async (userId: string) => {
    await createDbConnection();
    const user = await User.findById(userId)
    return user ?? null;
}