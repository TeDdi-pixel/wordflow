"use client";

import { useTempStore } from "../../../store/useTempStore";
import { Unit } from "@/entities/create-unit";
import { TypeUnit } from "@/shared/model/types/unit";

export const UnitList = () => {
  const items = useTempStore((state) => state.items);
  return items.map((unit: TypeUnit) => (
    <Unit key={unit.unitId} unitId={unit.unitId} />
  ));
};
