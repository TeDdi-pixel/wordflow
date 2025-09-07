import { notFound } from "next/navigation";
import { getSavedUnits } from "../api/getSavedUnits";
import { colWidths } from "../model/config";
import { TBody } from "./TBody";
import { THead } from "./THead";
import { getUserId } from "@/shared/lib/session";

export const SavedWordsTable = async () => {
  const relatedUserId = await getUserId();

  const savedUnits = await getSavedUnits(relatedUserId);

  if (savedUnits.length === 0) return notFound();

  return (
    <>
      <table className="w-full border-separate table-fixed border-spacing-y-2">
        <colgroup>
          {colWidths.map((cls, i) => (
            <col key={`col-${i}`} className={cls} />
          ))}
        </colgroup>

        <THead />

        <TBody dbSavedUnits={savedUnits} />
      </table>
    </>
  );
};
