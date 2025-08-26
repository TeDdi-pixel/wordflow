"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import PracticeNavButton from "@/shared/ui/buttons/PracticeNavButton";
import { useHandleNavigation } from "@/widgets/practice-board/model/useHandleNavigation";

type Props = {
  units: TypeUnit[];
  unitSetId: string;
};

export const NavButtons = ({ units, unitSetId }: Props) => {
  const { isDisabledLeft, isDisabledRight, range, handleClick } =
    useHandleNavigation({ units, unitSetId });
  const setIsHintOpen = usePracticeStore((state) => state.setIsHintOpen);

  return (
    <div className="flex w-fit gap-4 items-center ml-[4px]">
      <PracticeNavButton
        side="left"
        onClick={() => {
          setIsHintOpen(false);
          handleClick("left");
        }}
        isDisabled={isDisabledLeft}
      />
      <div className="w-[49px] text-center">{range}</div>
      <PracticeNavButton
        side="right"
        onClick={() => {
          setIsHintOpen(false);
          handleClick("right");
        }}
        isDisabled={isDisabledRight}
      />
    </div>
  );
};
