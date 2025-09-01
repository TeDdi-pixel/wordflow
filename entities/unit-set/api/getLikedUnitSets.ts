import createDbConnection from "@/shared/lib/mongoose";
import Like from "@/shared/model/schemas/Like";
import mongoose from "mongoose";

export const getLikedUnitSets = async (userId: string) => {
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
    {
      $unwind: "$unitSet",
    },
    {
      $addFields: {
        "unitSet.unitsCount": { $size: "$unitSet.units" },
      },
    },
    {
      $project: {
        "unitSet.units": 0,
      },
    },
    {
      $replaceRoot: { newRoot: "$unitSet" },
    },
  ]);

  return likedUnitSets || [];
};
