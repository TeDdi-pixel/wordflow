"use client";

import SendButton from "@/shared/ui/buttons/SendButton";
import { getIcon } from "@/shared/utils/unit-set-practice/getIcons";
import PracticeInput from "@/shared/ui/inputs/UnitPracticeInput";
import { TypeUnit } from "@/shared/model/types/unit";
import useSetInputData from "@/shared/hooks/useSetInputData";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import useAnswerTerm from "../model/useAnswerTerm";
import { useCheckAnswer } from "../model/useCheckAnswer";

export const PracticeBoardInput = ({ units }: { units: TypeUnit[] }) => {
  const checkStatus = usePracticeStore((state) => state.checkStatus);
  const isPending = usePracticeStore((state) => state.isPending);
  const { checkAnswer } = useCheckAnswer(units);

  const onEnterPress = useAnswerTerm(checkAnswer);

  useSetInputData();

  return (
    <div className="max-w-[485px] w-full relative overflow-hidden px-[16px] mt-[32px]">
      <PracticeInput
        handleKeyDown={onEnterPress}
        disabledInput={isPending || checkStatus === "CORRECTNESS"}
      />
      <SendButton
        isDisabled={
          isPending ||
          ["MISTAKE", "EXCLUDED", "CORRECTNESS"].includes(checkStatus)
        }
        onClick={() => {
          if (!isPending) checkAnswer();
        }}
        icon={getIcon(checkStatus)}
        animationKey={checkStatus}
      />
    </div>
  );
};
