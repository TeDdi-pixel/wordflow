"use client";

import TipButton from "@/shared/components/buttons/TipButton";
import { TypeUnit } from "@/shared/model/types/unit";
import { useUnitPracticeStore } from "@/store/useUnitPracticeStore";
import { useEffect } from "react";
import { IoPlaySkipForward } from "react-icons/io5";

type Props = {
  units: TypeUnit[];
  unitLength: number;
};

const SkipButton = ({ unitLength, units }: Props) => {
  const skipTerm = useUnitPracticeStore((state) => state.skipTerm);
  const setNextTerm = useUnitPracticeStore((state) => state.setNextTerm);
  const setNewAnswer = useUnitPracticeStore((state) => state.setNewAnswer);
  const currentUnitId = useUnitPracticeStore((state) => state.currentUnitId);
  const isUnitSetCompleted = useUnitPracticeStore(
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
