"use client";

import { Language } from "@/shared/model/types/temp-store";
import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import Hint from "./Hint";
import { useShuffleUnits } from "@/features/shuffle-units/model/useShuffleUnits";

export const Term = ({
  units,
  source,
  target,
}: {
  units: TypeUnit[];
  source: Language;
  target: Language;
}) => {
  const currentTermLang = usePracticeStore((state) => state.currentTermLang);
  const currentUnit = useShuffleUnits(units);

  return (
    <div className="w-full flex flex-col items-center gap-2.5 transition-transform">
      <Hint units={units} source={source} target={target} />

      <span className="text-[38px] leading-[1]">
        {currentTermLang === "source"
          ? currentUnit?.term.toLowerCase()
          : currentUnit?.definition.toLowerCase()}
      </span>

      {currentUnit?.phonetic && currentTermLang === "source" && (
        <span className="text-[22px] leading-[1.1] text-accent rounded-default hover:scale-125 transition-transform">
          {currentUnit.phonetic}
        </span>
      )}
    </div>
  );
};
