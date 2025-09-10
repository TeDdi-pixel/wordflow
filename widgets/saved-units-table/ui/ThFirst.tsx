"use client";

import { useSavedUnitsStore } from "@/shared/store/useSavedUnitsStore";
import { FaCheck } from "react-icons/fa";

export const ThFirst = () => {
  const unSelectAll = useSavedUnitsStore((state) => state.unSelectAll);
  const selectFirstThirtyUnits = useSavedUnitsStore(
    (state) => state.selectFirstThirtyUnits
  );
  const isUnitsSelected = useSavedUnitsStore(
    (state) => state.selectedUnits.length > 0
  );

  return (
    <th
      className="relative px-4 py-2 text-center text-accent group/checkbox"
      style={{ minWidth: "200px" }}
    >
      <span className="absolute transition-opacity -translate-x-1/2 -translate-y-1/2 pointer-events-auto left-1/2 top-1/2 text-accent group-hover:opacity-0 group-hover:pointer-events-none">
        #
      </span>

      <label
        htmlFor={`main-checkbox`}
        className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
      >
        <input
          id={`main-checkbox`}
          type="checkbox"
          onChange={() => {
            if (!isUnitsSelected) return selectFirstThirtyUnits();

            unSelectAll();
          }}
          checked={isUnitsSelected}
          className={`relative top-1/2 left-1/2 cursor-pointer -translate-x-1/2 bg-accent -translate-y-1/2 w-5 h-5 appearance-none rounded-[4px] flex items-center justify-center transition-all ${
            isUnitsSelected
              ? "opacity-100 z-10 scale-100"
              : "opacity-0 z-0 group-hover/checkbox:opacity-100 group-hover/checkbox:pointer-events-auto group-hover/checkbox:scale-100 scale-80 pointer-events-none"
          }`}
        />

        <FaCheck
          className={`absolute -translate-x-1/2 top-1/2 -translate-y-1/2 text-text-2 left-1/2 text-[12px] transition-all ${
            isUnitsSelected
              ? "scale-100 opacity-100 z-10"
              : "scale-80 opacity-0 z-0"
          }`}
        />
      </label>
    </th>
  );
};
