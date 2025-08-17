import { TableBottom, TBody, THead } from "@/entities/results-table";
import { TypeUserTermItem } from "@/shared/model/types/user-terms";

type Props = {
  unitSet: TypeUserTermItem[];
  unitSetId: string;
};

export const ResultTable = async ({ unitSetId, unitSet }: Props) => {
  const numberOfCorrectAnswers =
    unitSet?.filter((term) => term.status === "learned").length ?? 0;

  const correctAnswers = `${numberOfCorrectAnswers}/${unitSet.length}`;

  const colWidths = [
    "w-[25%]", // Термін
    "w-[5px]",
    "w-[25%]", // Визначення
    "w-[5px]",
    "w-[25%]", // Моя відповідь
    "w-[5px]",
    "w-[10%]", // Статус
    "w-[5px]",
    "w-[10%]", // Дії
  ];

  return (
    <>
      <table className="w-full border-separate border-spacing-y-2 table-fixed">
        <colgroup>
          {colWidths.map((cls, i) => (
            <col key={`col-${i}`} className={cls} />
          ))}
        </colgroup>
        <THead />
        <TBody unitSet={unitSet} />
      </table>
      <TableBottom id={unitSetId} correctAnswers={correctAnswers} />
    </>
  );
};
