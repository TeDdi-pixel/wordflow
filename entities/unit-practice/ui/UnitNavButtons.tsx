"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import PracticeNavButton from "@/shared/components/buttons/PracticeNavButton";
import { useHandleNavigation } from "@/features/practice-session/model/useHandleNavigation";

type Props = {
  units: TypeUnit[];
  unitSetId: string;
};

export const UnitNavButtons = ({ units, unitSetId }: Props) => {
  const { isDisabledLeft, isDisabledRight, range, handleClick } =
    useHandleNavigation({ units, unitSetId });

  return (
    <div className="flex w-[159px] gap-4 items-center ml-[4px]">
      <PracticeNavButton
        side="left"
        onClick={() => handleClick("left")}
        isDisabled={isDisabledLeft}
      />
      <div>{range}</div>
      <PracticeNavButton
        side="right"
        onClick={() => handleClick("right")}
        isDisabled={isDisabledRight}
      />
    </div>
  );
};
