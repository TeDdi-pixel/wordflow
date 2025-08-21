"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/store/usePracticeStore";
import { useEffect } from "react";

export const UnitTerm = ({ units }: { units: TypeUnit[] }) => {
  const termNumber = usePracticeStore((state) => state.termNumber);
  const setCurrentUnitId = usePracticeStore((state) => state.setCurrentUnitId);

  useEffect(() => {
    if (units[termNumber]) setCurrentUnitId(units[termNumber]._id);
  }, [termNumber, units, setCurrentUnitId]);

  return (
    <div className="w-full flex flex-col items-center">
      <span className="text-[38px]">{units[termNumber]?.term}</span>
      {units[termNumber]?.phonetic && (
        <span className="text-[24px] text-accent bg-background rounded-default p-2 hover:scale-125 transition-transform ease-out duration-150">
          [{units[termNumber]?.phonetic.replaceAll("/", "")}]
        </span>
      )}
    </div>
  );
};
