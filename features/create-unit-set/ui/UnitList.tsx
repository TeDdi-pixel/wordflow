"use client";

import { Unit } from "@/entities/unit";
import { TypeUnit } from "@/shared/model/types/unit";
import React from "react";
import { useTempStore } from "../store";

export const UnitList = () => {
  const items = useTempStore((state) => state.items);
  return items.map((unit: TypeUnit) => <Unit key={unit.id} id={unit.id} />);
};
