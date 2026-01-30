import { colWidths } from "../model/config";
import { THead } from "./THead";
import { TBody } from "./TBody";
import { TypeSavedUnit } from "@/shared/model/types/saved-unit";

export const DesktopTable = ({
  docs,
  onDelete,
}: {
  docs: TypeSavedUnit[];
  onDelete: (unitId: string) => void;
}) => {
  return (
    <table className="w-full border-separate table-fixed border-spacing-y-2">
      <colgroup>
        {colWidths.map((cls, i) => (
          <col key={i} className={cls} />
        ))}
      </colgroup>

      <THead />
      <TBody docs={docs} onDelete={onDelete} />
    </table>
  );
};
