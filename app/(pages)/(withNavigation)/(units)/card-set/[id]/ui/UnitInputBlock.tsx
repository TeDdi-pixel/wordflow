"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import UnitInput from "@/shared/ui/unit/UnitInput";
import { useUnitStore } from "@/store/useUnitStore";
import React from "react";
import { IoSend } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import MistakeIcon from "@/shared/icons/unit/MistakeIcon";
import { distance } from "fastest-levenshtein";

const MAX_ALLOWED_DISTANCE = 2;

const UnitInputBlock = ({ units }: { units: TypeUnit[] }) => {
  const answer = useUnitStore((state) => state.answer);
  const resetAnswer = useUnitStore((state) => state.resetAnswer);
  const termNumber = useUnitStore((state) => state.termNumber);
  const unitsLength = useUnitStore((state) => state.unitsLength);
  const setNextTerm = useUnitStore((state) => state.setNextTerm);
  const checkStatus = useUnitStore((state) => state.checkStatus);
  const setCheckStatus = useUnitStore((state) => state.setCheckStatus);
  const resetCheckStatus = useUnitStore((state) => state.resetCheckStatus);

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
      <UnitInput handleKeyDown={handleKeyDown} />
      <button
        className={`absolute top-1/2 right-0 -translate-y-1/2 text-[20px] ${
          isDisabled ? "cursor-not-allowed" : "cursor-pointer "
        }`}
        onClick={handleCheckAnswer}
        disabled={isDisabled}
      >
        {checkStatus === "MISTAKE" && <MistakeIcon />}
        {checkStatus === "CORRECTNESS" && (
          <FaCheck className="text-[#67FFB3]" />
        )}
        {!checkStatus && <IoSend />}
      </button>
    </div>
  );
};

export default UnitInputBlock;
