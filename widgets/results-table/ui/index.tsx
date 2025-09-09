import { colWidths } from "../model/config";
import { getScoreSummary } from "../model/getLearnedTermsCount";
import { ResultTableProps } from "../model/types";
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
      <table className="w-full border-separate table-fixed border-spacing-y-2">
        <colgroup>
          {colWidths.map((cls, i) => (
            <col key={`col-${i}`} className={cls} />
          ))}
        </colgroup>

        <THead />

        <TBody resultSetTerms={resultSetTerms} unitSetId={unitSetId} />
      </table>

      <TableBottom id={unitSetId} scoreSummary={scoreSummary} />
    </>
  );
};
