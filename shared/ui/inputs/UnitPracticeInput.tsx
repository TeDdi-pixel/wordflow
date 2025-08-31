import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useEffect, useRef } from "react";

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
  const checkStatus = usePracticeStore((state) => state.checkStatus);
  const currentCardId = usePracticeStore((state) => state.currentUnitId);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [checkStatus, currentCardId]);

  return (
    <input
      ref={inputRef}
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
      autoComplete="off"
      autoFocus
      autoCorrect="off"
      spellCheck={false}
      name="practice-fg"
      id="practice-fg"
      className="w-full border-b-[2px] border-bg-accent-2 pb-[5px] text-[14px] focus:outline-none focus:border-accent transition-colors"
    />
  );
};

export default PracticeInput;
