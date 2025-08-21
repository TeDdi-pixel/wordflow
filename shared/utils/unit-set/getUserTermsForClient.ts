import createDbConnection from "@/shared/lib/mongoose";
import { getUserId } from "@/shared/lib/session";
import UserTerms from "@/shared/model/schemas/UserTerms";
import {
  TypeUserTermItem,
  TypeUserTerms,
} from "@/shared/model/types/user-terms";

export const getUserTermsForClient = async () => {
  const relatedUserId = await getUserId();
  await createDbConnection();

  const userTermsDoc = await UserTerms.findOne({
    relatedUserId,
  }).lean<TypeUserTerms>();

  if (!userTermsDoc) {
    return null;
  }

  return {
    relatedUserId: userTermsDoc.relatedUserId.toString(),
    terms: userTermsDoc.terms.map((term: TypeUserTermItem) => ({
      _id: term._id.toString(),
      term: term.term,
      definition: term.definition,
      status: term.status,
      unitSetId: term.unitSetId.toString(),
      lastAnswer: term.lastAnswer,
      audio: term.audio,
      phonetic: term.phonetic,
    })),
  };
};
