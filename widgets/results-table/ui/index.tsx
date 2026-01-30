import { getScoreSummary } from "../model/getLearnedTermsCount";
import { ResultTableProps } from "../model/types";
import { MobileResultCard } from "./MobileResultCard";
import { TableBottom } from "./TableBottom";
import { TBody } from "./TBody";
import { THead } from "./THead";

export const ResultTable = async ({
  unitSetId,
  resultSetTerms,
}: ResultTableProps) => {
  const scoreSummary = getScoreSummary(resultSetTerms);

  return (
    <>
      <div className="hidden md:block">
        <table className="w-full border-separate table-fixed border-spacing-y-2">
          <THead />
          <TBody resultSetTerms={resultSetTerms} unitSetId={unitSetId} />
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {resultSetTerms.map((term) => (
          <MobileResultCard
            key={term._id}
            userResultTerm={term}
            unitSetId={unitSetId}
          />
        ))}
      </div>

      <TableBottom id={unitSetId} scoreSummary={scoreSummary} />
    </>
  );
};
