import TipButton from "@/shared/ui/buttons/TipButton";
import { FaClipboardList } from "react-icons/fa";
import { ControlsProps } from "../model/types";
import { getUnitSetForClient } from "@/shared/utils/unit-set/getUnitSetForClient";
import { SaveResultButton } from "@/features/save-unit-set-results";
import { SkipButton } from "@/features/skip-term";
import { NavButtons } from "./NavButtons";
import ToLanguageIcon from "@/shared/icons/unit/ToLanguageIcon";

export const PracticeBoardControls = async ({ unitSetId }: ControlsProps) => {
  const unitSet = await getUnitSetForClient(unitSetId);

  const units = unitSet?.units || [];

  const source = unitSet?.source;
  const target = unitSet?.target;

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-center">
          <NavButtons units={units} unitSetId={unitSetId} />
          <SkipButton units={units} unitLength={units.length} />
        </div>
        <div className="flex gap-3 items-center">
          <span className="w-[29px] text-[18px]">{source}</span>

          <ToLanguageIcon />

          <span className="w-[29px] text-[18px]">{target}</span>
        </div>
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
