"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import { useUnitPracticeStore } from "@/store/useUnitPracticeStore";
import { useEffect } from "react";

export const UnitTerm = ({ units }: { units: TypeUnit[] }) => {
  const termNumber = useUnitPracticeStore((state) => state.termNumber);
  const setCurrentUnitId = useUnitPracticeStore(
    (state) => state.setCurrentUnitId
  );

  useEffect(() => {
    setCurrentUnitId(units[termNumber]._id);
  }, [termNumber]);

  return (
    <div className="w-full flex justify-center">
      <span className="text-[32px]">{units[termNumber]?.term}</span>
    </div>
  );
};
