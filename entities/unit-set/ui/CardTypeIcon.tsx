import { UnitSetType } from "@/shared/model/types/unit";
import { unitTypeIcon } from "@/shared/utils/unit-set-card/getUnitTypeIcon";

export const CardTypeIcon = ({ unitSetType }: { unitSetType: UnitSetType }) => {
  return (
    <span className="group-hover:text-white transition-colors duration-300">
      {unitTypeIcon(unitSetType)}
    </span>
  );
};
