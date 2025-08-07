"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import { useUnitPracticeStore } from "@/store/useUnitPracticeStore";

export const UnitPracticeTerm = ({ units }: { units: TypeUnit[] }) => {
  const termNumber = useUnitPracticeStore((state) => state.termNumber);

  return (
    <div className="w-full flex justify-center">
      <span className="text-[32px]">{units[termNumber]?.term}</span>
    </div>
  );
};
