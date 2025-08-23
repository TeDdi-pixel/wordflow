import TipButton from "@/shared/ui/buttons/TipButton";
import { FaClipboardList } from "react-icons/fa";
import { ControlsProps } from "../model/types";
import { getUnitSetForClient } from "@/shared/utils/unit-set/getUnitSetForClient";
import { SaveResultButton } from "@/features/save-unit-set-results";
import { SkipButton } from "@/features/skip-term";
import { NavButtons } from "./NavButtons";

export const PracticeBoardControls = async ({ unitSetId }: ControlsProps) => {
  const unitSet = await getUnitSetForClient(unitSetId);

  const units = unitSet?.units || [];
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <NavButtons units={units} unitSetId={unitSetId} />

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

        <SaveResultButton />
      </div>
    </div>
  );
};
