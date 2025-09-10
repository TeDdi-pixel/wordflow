"use client";

import { useSavedUnitsStore } from "@/shared/store/useSavedUnitsStore";
import { FaCheck } from "react-icons/fa";

export const TdFirst = ({
  docIndex,
  docId,
}: {
  docIndex: number;
  docId: string;
}) => {
  const selectedUnits = useSavedUnitsStore((state) => state.selectedUnits);

  const checkSelectedUnit = useSavedUnitsStore(
    (state) => state.checkSelectedUnit
  );

  const isUnitSelected = (docId: string) => {
    return selectedUnits.find((doc) => doc.docId === docId)?.checked || false;
  };

  return (
    <td className="relative px-4 py-2 text-center truncate first rounded-l-default">
      <span className="absolute transition-opacity -translate-x-1/2 -translate-y-1/2 pointer-events-auto left-1/2 top-1/2 text-accent group-hover:opacity-0 group-hover:pointer-events-none">
        {String(docIndex + 1)}
      </span>

      <label
        htmlFor={`savedUnit-${docId}`}
        className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
      >
        <input
          id={`savedUnit-${docId}`}
          type="checkbox"
          onChange={() => checkSelectedUnit(docId)}
          checked={isUnitSelected(docId)}
          className={`relative top-1/2 left-1/2 cursor-pointer -translate-x-1/2 bg-accent -translate-y-1/2 w-5 h-5 appearance-none rounded-[4px] flex items-center justify-center transition-all ${
            isUnitSelected(docId)
              ? "opacity-100 z-10 scale-100"
              : selectedUnits.length >= 30
              ? "opacity-0 z-0 pointer-events-none scale-80"
              : "opacity-0 z-0 group-hover/checkbox:opacity-100 group-hover/checkbox:pointer-events-auto group-hover/checkbox:scale-100 scale-80 pointer-events-none"
          }`}
        />

        <FaCheck
          className={`absolute -translate-x-1/2 top-1/2 -translate-y-1/2 text-text-2 left-1/2 text-[12px] transition-all ${
            isUnitSelected(docId)
              ? "scale-100 opacity-100 z-10"
              : "scale-80 opacity-0 z-0"
          }`}
        />
      </label>
    </td>
  );
};
