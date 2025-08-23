import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { SkipButtonProps } from "./types";

const useSkipTerm = ({ units, unitLength }: SkipButtonProps) => {
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

  return handleSkip;
};

export default useSkipTerm;
