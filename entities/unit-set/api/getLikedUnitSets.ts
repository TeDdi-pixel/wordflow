import createDbConnection from "@/shared/lib/mongoose";
import Like from "@/shared/model/schemas/Like";
import { TypeLike } from "@/shared/model/types/like";
import { TypeUnitSet } from "@/shared/model/types/unit";

export const getLikedUnitSets = async (userId: string) => {
  await createDbConnection();

  const likedDoc = await Like.find<TypeLike<TypeUnitSet>>({
    relatedUserId: userId,
  }).populate("unitSetId");

  const unitSets = likedDoc.map((like) => like.unitSetId).filter(Boolean);

  return unitSets || [];
};
