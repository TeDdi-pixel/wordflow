import { UserResultTerm } from "@/shared/model/types/user-results";

export const getScoreSummary = (unitSet: UserResultTerm[]): string => {
  const learnedCount =
    unitSet?.filter((term) => term.status === "learned").length ?? 0;

  const scoreSummary = `${learnedCount}/${unitSet.length}`;

  return scoreSummary;
};
