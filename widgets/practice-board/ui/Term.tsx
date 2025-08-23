"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/store/usePracticeStore";
import { useEffect } from "react";

export const Term = ({ units }: { units: TypeUnit[] }) => {
  const termNumber = usePracticeStore((state) => state.termNumber);
  const setCurrentUnitId = usePracticeStore((state) => state.setCurrentUnitId);

  useEffect(() => {
    if (units[termNumber]) setCurrentUnitId(units[termNumber]._id);
  }, [termNumber, units, setCurrentUnitId]);

  return (
    <div className="w-full flex flex-col items-center gap-0.5">
      <span className="text-[38px] leading-[1]">
        {units[termNumber]?.term.toLowerCase()}
      </span>
      {units[termNumber]?.phonetic && (
        <span className="text-[22px] leading-[1.1] text-accent rounded-default hover:scale-125 transition-transform">
          [{units[termNumber]?.phonetic.replaceAll("/", "")}]
        </span>
      )}
    </div>
  );
};
