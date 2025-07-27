"use client";

import { useUnitStore } from "@/store/useUnitStore";

const UnitInput = ({
  handleKeyDown,
}: {
  handleKeyDown: (e: React.KeyboardEvent) => void;
}) => {
  const answer = useUnitStore((state) => state.answer);
  const setAnswer = useUnitStore((state) => state.setAnswer);
  const resetCheckStatus = useUnitStore((state) => state.resetCheckStatus);
  return (
    <input
      value={answer}
      onKeyDown={handleKeyDown}
      onChange={(e) => {
        setAnswer(e.target.value);
        resetCheckStatus();
      }}
      type="text"
      placeholder="Відповідь"
      className="w-full border-b-[2px] border-border pb-[5px] text-[14px] focus:outline-none"
    />
  );
};

export default UnitInput;
