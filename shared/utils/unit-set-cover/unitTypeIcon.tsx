import { ReactNode } from "react";
import { UnitSetType } from "../../model/types/unit";
import CardsIcon from "../../icons/unit/CardsIcon";

const unitTypeIconMap = new Map<UnitSetType, ReactNode>([
  ["cards", <CardsIcon />],
]);

export const unitTypeIcon = (unitSetType: UnitSetType) =>
  unitTypeIconMap.get(unitSetType) ?? null;
