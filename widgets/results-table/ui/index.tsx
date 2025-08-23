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
      <table className="w-full border-separate border-spacing-y-2 table-fixed">
        <colgroup>
          {colWidths.map((cls, i) => (
            <col key={`col-${i}`} className={cls} />
          ))}
        </colgroup>

        <THead />

        <TBody resultSetTerms={resultSetTerms} />
      </table>

      <TableBottom id={unitSetId} scoreSummary={scoreSummary} />
    </>
  );
};
