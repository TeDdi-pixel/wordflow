import { UnitSetType } from "@/shared/model/types/unit";
import { unitTypeIcon } from "@/shared/utils/unit-set-cover/unitTypeIcon";

type Props = {
  unitSetType: UnitSetType;
  unitSetId: string;
};

export const CardTypeIcon = ({ unitSetType, unitSetId }: Props) => {
  return <span>{unitTypeIcon(unitSetType, unitSetId)}</span>;
};
