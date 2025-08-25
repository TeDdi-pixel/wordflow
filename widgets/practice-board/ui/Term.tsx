"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useEffect } from "react";

export const Term = ({ units }: { units: TypeUnit[] }) => {
  const termNumber = usePracticeStore((state) => state.termNumber);
  const setCurrentUnitId = usePracticeStore((state) => state.setCurrentUnitId);
  const currentTermLang = usePracticeStore((state) => state.currentTermLang);

  useEffect(() => {
    if (units[termNumber]) setCurrentUnitId(units[termNumber]._id);
  }, [termNumber, units, setCurrentUnitId]);

  return (
    <div className="w-full flex flex-col items-center gap-2.5">
      <span className="text-[38px] leading-[1]">
        {currentTermLang === "source"
          ? units[termNumber]?.term.toLowerCase()
          : units[termNumber]?.definition.toLowerCase()}
      </span>

      {units[termNumber]?.phonetic && (
        <span className="text-[22px] leading-[1.1] text-accent rounded-default hover:scale-125 transition-transform">
          {currentTermLang === "source" ? units[termNumber]?.phonetic : null}
        </span>
      )}
    </div>
  );
};
