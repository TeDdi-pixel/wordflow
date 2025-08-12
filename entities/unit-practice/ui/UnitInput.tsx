"use client";

import SendButton from "@/shared/components/buttons/SendButton";
import { getIcon } from "@/shared/utils/getIcons";
import PracticeInput from "@/shared/components/inputs/UnitPracticeInput";
import { useCheckAnswer } from "@/shared/hooks/useCheckAnswer";
import { TypeUnit } from "@/shared/model/types/unit";
import { useTermsHandling } from "@/features/practice-session/model/useTermsHandling";
import useSetInputData from "@/shared/hooks/useSetInputData";
import { usePracticeStore } from "@/store/usePracticeStore";

export const UnitInput = ({ units }: { units: TypeUnit[] }) => {
  const checkStatus = usePracticeStore((state) => state.checkStatus);
  const { checkAnswer } = useCheckAnswer(units);

  const { isDisabled, onEnterPress } = useTermsHandling({
    checkAnswer,
  });

  useSetInputData();

  return (
    <div className="max-w-[485px] w-full relative">
      <PracticeInput
        handleKeyDown={onEnterPress}
        disabledInput={isDisabled || checkStatus === "CORRECTNESS"}
      />
      <SendButton
        isDisabled={
          isDisabled ||
          ["MISTAKE", "EXCLUDED", "CORRECTNESS"].includes(checkStatus)
        }
        onClick={() => {
          if (!isDisabled) checkAnswer();
        }}
        icon={getIcon(checkStatus)}
      />
    </div>
  );
};
