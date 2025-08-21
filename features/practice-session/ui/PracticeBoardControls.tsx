import TipButton from "@/shared/components/buttons/TipButton";
import { FaClipboardList } from "react-icons/fa";
import { UnitNavButtons } from "@/entities/unit-set-practice";
import SkipButton from "@/entities/unit-set-practice/ui/SkipButton";
import CheckButton from "@/entities/unit-set-practice/ui/CheckButton";
import { getUnitSetForClient } from "@/shared/utils/unit-set/getUnitSetForClient";

type Props = {
  unitSetId: string;
};

export const PracticeBoardControls = async ({ unitSetId }: Props) => {
  const unitSet = await getUnitSetForClient(unitSetId);

  const units = unitSet?.units || [];
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <UnitNavButtons units={units} unitSetId={unitSetId} />

        <SkipButton units={units} unitLength={units.length} />
      </div>

      <div className="mr-1 flex gap-4 items-center">
        <TipButton
          type="link"
          path={`/card-set/${unitSetId}/results`}
          tipText="Останні результати"
          icon={<FaClipboardList className="w-[24px] h-[24px]" />}
          side="right"
        />

        <CheckButton units={units} />
      </div>
    </div>
  );
};
