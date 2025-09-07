import createDbConnection from "@/shared/lib/mongoose";
import { SORT_TYPE } from "@/shared/model/constants/sort";
import SavedUnit from "@/shared/model/schemas/SavedUnit";
import { toPlain } from "@/shared/utils/unit-set/toPlain";
import mongoose from "mongoose";

export const getSavedUnits = async (relatedUserId: string) => {
  await createDbConnection();

  const savedUnits = await SavedUnit.aggregate([
    {
      $match: {
        relatedUserId: new mongoose.Types.ObjectId(relatedUserId),
      },
    },
    {
      $sort: SORT_TYPE["createdAsc"] as any,
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
        target: "$unitSet.target",
        source: "$unitSet.source",
        title: "$unitSet.title",
        unitSetType: "$unitSet.unitSetType",
        unit: {
          $first: {
            $map: {
              input: {
                $filter: {
                  input: "$unitSet.units",
                  as: "u",
                  cond: { $eq: ["$$u._id", { $toObjectId: "$unitId" }] },
                },
              },
              as: "u",
              in: {
                _id: "$$u._id",
                term: "$$u.term",
                definition: "$$u.definition",
                audio: "$$u.audio",
                phonetic: "$$u.phonetic",
              },
            },
          },
        },
      },
    },
    { $project: { unitSet: 0, relatedUserId: 0, unitId: 0 } },
  ]);

  return toPlain(savedUnits) || [];
};
