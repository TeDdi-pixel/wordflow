import { Language } from "@/shared/model/types/temp-store";
import { UserResultTerm } from "@/shared/model/types/user-results";

export type ResultTableProps = {
  resultSetTerms: UserResultTerm[];
  unitSetId: string;
};

export type TableBottomProps = { id: string; scoreSummary: string };

export type TBodyProps = {
  resultSetTerms: UserResultTerm[];
  target: Language;
  unitSetId: string;
};

export type ScoreSummaryProps = {
  scoreSummary: string;
};
