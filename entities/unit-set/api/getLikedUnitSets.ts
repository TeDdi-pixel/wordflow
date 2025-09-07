import createDbConnection from "@/shared/lib/mongoose";
import Like from "@/shared/model/schemas/Like";
import mongoose from "mongoose";
import { toPlain } from "@/shared/utils/unit-set/toPlain";
import { TypeUnitSet } from "@/shared/model/types/unit";

export const getLikedUnitSets = async (
  userId: string
): Promise<(TypeUnitSet & { unitsCount: number })[]> => {
  await createDbConnection();

  const likedUnitSets = await Like.aggregate([
    {
      $match: {
        relatedUserId: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: "unit_sets",
        localField: "unitSetId",
        foreignField: "_id",
        as: "unitSet",
      },
    },
    { $unwind: "$unitSet" },
    {
      $addFields: {
        "unitSet.unitsCount": { $size: "$unitSet.units" },
      },
    },
    { $project: { "unitSet.units": 0 } },
    { $replaceRoot: { newRoot: "$unitSet" } },
  ]);

  return toPlain(likedUnitSets) || [];
};
