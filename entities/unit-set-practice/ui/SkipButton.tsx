"use client";

import TipButton from "@/shared/components/buttons/TipButton";
import SkipIcon from "@/shared/icons/unit/SkipIcon";
import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/store/usePracticeStore";

type Props = {
  units: TypeUnit[];
  unitLength: number;
};

const SkipButton = ({ unitLength, units }: Props) => {
  const skipTerm = usePracticeStore((state) => state.skipTerm);
  const setNextTerm = usePracticeStore((state) => state.setNextTerm);
  const setNewAnswer = usePracticeStore((state) => state.setNewAnswer);
  const currentUnitId = usePracticeStore((state) => state.currentUnitId);

  const handleSkip = () => {
    if (!currentUnitId) return;
    skipTerm(currentUnitId, units);
    setNextTerm(unitLength);
    setNewAnswer("");
  };

  return (
    <TipButton
      onClick={handleSkip}
      icon={<SkipIcon />}
      tipText="Пропустити термін"
      side="left"
    />
  );
};

export default SkipButton;
