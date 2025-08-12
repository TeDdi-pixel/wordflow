import { usePracticeStore } from "@/store/usePracticeStore";

const PracticeInput = ({
  handleKeyDown,
  disabledInput,
}: {
  handleKeyDown: (e: React.KeyboardEvent) => void;
  disabledInput: boolean;
}) => {
  const setNewAnswer = usePracticeStore((state) => state.setNewAnswer);
  const newAnswer = usePracticeStore((state) => state.newAnswer);
  const oldAnswer = usePracticeStore((state) => state.oldAnswer);
  const hasNewAnswer = usePracticeStore((state) => state.hasNewAnswer);
  const resetCheckStatus = usePracticeStore((state) => state.resetCheckStatus);

  return (
    <input
      onKeyDown={handleKeyDown}
      onChange={(e) => {
        if (!disabledInput) {
          setNewAnswer(e.target.value);
          resetCheckStatus();
        }
      }}
      value={hasNewAnswer ? newAnswer || "" : oldAnswer}
      type="text"
      placeholder="Відповідь"
      disabled={disabledInput}
      className="w-full border-b-[2px] border-background-accent-2 pb-[5px] text-[14px] focus:outline-none focus:border-accent transition-colors ease-out duration-150"
    />
  );
};

export default PracticeInput;
