"use client";

import ToLanguageIcon from "@/shared/icons/unit/ToLanguageIcon";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";

export const Languages = ({ unitSet }: { unitSet: TypeUnitSet }) => {
  const currentUnitId = usePracticeStore((state) => state.currentUnitId);

  const source =
    unitSet.source ??
    unitSet.units.find((unit) => unit._id === currentUnitId)?.source;

  const target =
    unitSet.target ??
    unitSet.units.find((unit) => unit._id === currentUnitId)?.target;

  return (
    <div className="flex items-center gap-3 text-accent">
      <span className="w-[29px] text-[16px]">{source}</span>

      <ToLanguageIcon />

      <span className="w-[29px] text-[16px]">{target}</span>
    </div>
  );
};
