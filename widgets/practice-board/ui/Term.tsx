"use client";

import { Language } from "@/shared/model/types/temp-store";
import { TypeUnit, TypeUnitSet } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import Hint from "./Hint";
import { useShuffleUnits } from "@/features/shuffle-units/model/useShuffleUnits";

export const Term = ({
  units,
  unitSet,
}: {
  units: TypeUnit[];
  unitSet: TypeUnitSet;
}) => {
  const currentTermLang = usePracticeStore((state) => state.currentTermLang);
  const currentUnit = useShuffleUnits(units);
  const currentUnitId = usePracticeStore((state) => state.currentUnitId);

  const source =
    unitSet.source ??
    unitSet.units.find((unit) => unit._id === currentUnitId)?.source;

  const target =
    unitSet.target ??
    unitSet.units.find((unit) => unit._id === currentUnitId)?.target;

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
