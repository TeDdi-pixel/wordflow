import { TypeUserTermItem } from "@/shared/model/types/user-terms";
import { getUserTermsForClient } from "@/shared/utils/unit-set/getUserTermsForClient";

export async function getSpecificUnitSet(
  unitSetId: string
): Promise<TypeUserTermItem[]> {
  const userTerms = await getUserTermsForClient();

  if (!userTerms?.terms) {
    return [];
  }

  console.log("unitSetId param:", unitSetId);
  console.log(
    "unitSetIds from DB:",
    userTerms.terms.map((t) => t.unitSetId)
  );
  return userTerms.terms.filter((term) => term.unitSetId === unitSetId);
}
