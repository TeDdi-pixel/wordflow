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
    <div className="w-full flex justify-center">
      <span className="text-[32px]">{units[termNumber]?.term}</span>
    </div>
  );
};
