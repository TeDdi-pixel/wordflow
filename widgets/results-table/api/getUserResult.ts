import createDbConnection from "@/shared/lib/mongoose";
import UsersResults from "@/shared/model/schemas/UsersResults";
import { TypeTermStatus, TypeUnit } from "@/shared/model/types/unit";
import { UserResultTerm } from "@/shared/model/types/user-results";
import { Types } from "mongoose";

export type TypeUserResult = {
  _id: Types.ObjectId;
  lastAnswer: string;
  status: TypeTermStatus;
};

export const getUserResultTerms = async (
  userId: string,
  unitSetId: string
): Promise<UserResultTerm[] | []> => {
  await createDbConnection();

  const userResult = await UsersResults.findOne({
    relatedUserId: new Types.ObjectId(userId),
    unitSetId: new Types.ObjectId(unitSetId),
  }).populate({
    path: "unitSetId",
    model: "UnitSet",
    select: "title units",
  });

  if (!userResult) return [];

  const terms: TypeUserResult[] = userResult.terms;

  return terms
    ?.map((term) => {
      const unitTerm = userResult.unitSetId.units.find((u: TypeUnit) => {
        return u._id.toString() === term._id.toString();
      });

      if (!unitTerm) return null;

      return {
        _id: term._id.toString(),
        term: unitTerm.term,
        definition: unitTerm.definition,
        audio: unitTerm.audio,
        phonetic: unitTerm.phonetic,
        status: term.status,
        lastAnswer: term.lastAnswer || "",
        unitSetId: userResult.unitSetId._id.toString(),
      } as UserResultTerm;
    })
    .filter(Boolean) as UserResultTerm[];
};
