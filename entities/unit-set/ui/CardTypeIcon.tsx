import { UnitSetType } from "@/shared/model/types/unit";
import { unitTypeIcon } from "@/shared/utils/unit-set-cover/getUnitTypeIcon";

export const CardTypeIcon = ({ unitSetType }: { unitSetType: UnitSetType }) => {
  return <span>{unitTypeIcon(unitSetType)}</span>;
};
