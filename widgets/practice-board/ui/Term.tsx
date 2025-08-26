"use client";

import { Language } from "@/shared/model/types/temp-store";
import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useEffect } from "react";
import Hint from "./Hint";

export const Term = ({
  units,
  source,
  target,
}: {
  units: TypeUnit[];
  source: Language;
  target: Language;
}) => {
  const termNumber = usePracticeStore((state) => state.termNumber);
  const setCurrentUnitId = usePracticeStore((state) => state.setCurrentUnitId);
  const currentTermLang = usePracticeStore((state) => state.currentTermLang);

  useEffect(() => {
    if (units[termNumber]) setCurrentUnitId(units[termNumber]._id);
  }, [termNumber, units, setCurrentUnitId]);

  return (
    <div className="w-full flex flex-col items-center gap-2.5 transition-transform">
      <Hint units={units} source={source} target={target} />

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
