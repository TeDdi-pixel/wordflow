import React from "react";
import TipButton from "@/shared/components/buttons/TipButton";
import { FaClipboardList } from "react-icons/fa";
import { TypeUnit } from "@/shared/model/types/unit";
import { UnitNavButtons } from "@/entities/unit-set-practice";
import SkipButton from "@/entities/unit-set-practice/ui/SkipButton";
import CheckButton from "@/entities/unit-set-practice/ui/CheckButton";

type Props = {
  units: TypeUnit[];
  unitSetId: string;
};

export const PracticeBoardControls = ({ units, unitSetId }: Props) => {
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
