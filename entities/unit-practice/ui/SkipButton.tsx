"use client";

import TipButton from "@/shared/components/buttons/TipButton";
import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/store/usePracticeStore";
import { useEffect } from "react";
import { IoPlaySkipForward } from "react-icons/io5";

type Props = {
  units: TypeUnit[];
  unitLength: number;
};

const SkipButton = ({ unitLength, units }: Props) => {
  const skipTerm = usePracticeStore((state) => state.skipTerm);
  const setNextTerm = usePracticeStore((state) => state.setNextTerm);
  const setNewAnswer = usePracticeStore((state) => state.setNewAnswer);
  const currentUnitId = usePracticeStore((state) => state.currentUnitId);
  const isUnitSetCompleted = usePracticeStore(
    (state) => state.isUnitSetCompleted
  );

  const handleSkip = () => {
    if (!currentUnitId) return;
    skipTerm(currentUnitId, units);
    setNextTerm(unitLength);
    setNewAnswer("");
  };

  return (
    <TipButton
      onClick={handleSkip}
      isDisabled={isUnitSetCompleted}
      icon={<IoPlaySkipForward className="w-[24px] h-[24px]" />}
      tipText="Пропустити термін"
      side="left"
    />
  );
};

export default SkipButton;
