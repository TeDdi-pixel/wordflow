import TipButton from "@/shared/ui/buttons/TipButton";
import { FaClipboardList } from "react-icons/fa";
import { ControlsProps } from "../model/types";
import { SaveResultButton } from "@/features/save-unit-set-results";
import { SkipButton } from "@/features/skip-term";
import { NavButtons } from "./NavButtons";
import { notFound } from "next/navigation";
import { getControlsUnitSetData } from "@/entities/unit-set/api/getControlsUnitSetData";
import { Statistics } from "./Statistics";

export const PracticeBoardControls = async ({ unitSetId }: ControlsProps) => {
  const unitSet = await getControlsUnitSetData(unitSetId);

  if (!unitSet) return notFound();

  return (
    <div className="flex items-center justify-between mb-[32px]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <NavButtons units={unitSet.units} unitSetId={unitSetId} />

          <SkipButton units={unitSet.units} unitLength={unitSet.units.length} />

          <Statistics
            likesCount={unitSet.likesCount}
            savedUnitsCount={unitSet.savedUnitsCount}
          />
        </div>
      </div>

      <div className="flex items-center gap-4 mr-1">
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
