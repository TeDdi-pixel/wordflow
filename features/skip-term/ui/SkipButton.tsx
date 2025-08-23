"use client";

import TipButton from "@/shared/ui/buttons/TipButton";
import SkipIcon from "@/shared/icons/unit/SkipIcon";
import { SkipButtonProps } from "../model/types";
import useSkipTerm from "../model/useSkipTerm";

export const SkipButton = ({ unitLength, units }: SkipButtonProps) => {
  const handleSkip = useSkipTerm({ units, unitLength });

  return (
    <TipButton
      onClick={handleSkip}
      icon={<SkipIcon />}
      tipText="Пропустити термін"
      side="left"
    />
  );
};
