"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import { useUnitPracticeStore } from "@/store/useUnitPracticeStore";
import React from "react";
import { distance } from "fastest-levenshtein";
import SendButton from "@/shared/components/buttons/SendButton";
import { getIcon } from "@/shared/utils/getIcons";
import PracticeInput from "@/shared/components/inputs/UnitPracticeInput";

const MAX_ALLOWED_DISTANCE = 2;

export const UnitPracticeInput = ({ units }: { units: TypeUnit[] }) => {
  const answer = useUnitPracticeStore((state) => state.answer);
  const resetAnswer = useUnitPracticeStore((state) => state.resetAnswer);
  const termNumber = useUnitPracticeStore((state) => state.termNumber);
  const unitsLength = useUnitPracticeStore((state) => state.unitsLength);
  const setNextTerm = useUnitPracticeStore((state) => state.setNextTerm);
  const checkStatus = useUnitPracticeStore((state) => state.checkStatus);
  const setCheckStatus = useUnitPracticeStore((state) => state.setCheckStatus);
  const resetCheckStatus = useUnitPracticeStore(
    (state) => state.resetCheckStatus
  );

  const handleCheckAnswer = () => {
    const correctDefinition = units[termNumber]?.definition
      .toLowerCase()
      .trim();

    const trimmedAnswer = answer.trim();
    const levenshteinDistance = distance(trimmedAnswer, correctDefinition);
    const isCorrect = levenshteinDistance <= MAX_ALLOWED_DISTANCE;

    if (isCorrect) {
      setCheckStatus("CORRECTNESS");
      setTimeout(() => {
        resetCheckStatus();

        if (unitsLength - (termNumber + 1) !== 0) setNextTerm();

        resetAnswer();
      }, 2000);
    } else {
      setCheckStatus("MISTAKE");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCheckAnswer();
    }
  };

  const isDisabled = checkStatus === "CORRECTNESS" || checkStatus === "MISTAKE";
  return (
    <div className="max-w-[485px] w-full relative">
      <PracticeInput handleKeyDown={handleKeyDown} />
      <SendButton
        isDisabled={isDisabled}
        onClick={handleCheckAnswer}
        icon={getIcon(checkStatus)}
      />
    </div>
  );
};
