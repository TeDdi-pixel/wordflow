"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import { useUnitStore } from "@/store/useUnitStore";

export const UnitTerm = ({ units }: { units: TypeUnit[] }) => {
  const termNumber = useUnitStore((state) => state.termNumber);

  return (
    <div className="w-full flex justify-center">
      <span className="text-[32px]">{units[termNumber]?.term}</span>
    </div>
  );
};
