import { ReactNode } from "react";
import { UnitSetType } from "../../model/types/unit";
import CardsIcon from "../../icons/unit/CardsIcon";

const unitTypeIconMap = new Map<UnitSetType, (id: string) => ReactNode>([
  ["cards", (id: string) => <CardsIcon key={id} />],
]);

export const unitTypeIcon = (unitSetType: UnitSetType, unitSetId: string) =>
  unitTypeIconMap.get(unitSetType)?.(unitSetId) ?? null;
