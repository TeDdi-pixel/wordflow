import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { updateUserResults } from "../api/updateUserResults";
import { useUnitPracticeStore } from "@/store/useUnitPracticeStore";

type Params = {
  checkAnswer: () => void;
};

export const useTermsHandling = ({ checkAnswer }: Params) => {
  const router = useRouter();

  const unitSetId = useUnitPracticeStore((state) => state.unitSetId);
  const completedTerms = useUnitPracticeStore((state) => state.completedTerms);
  const isPending = useUnitPracticeStore((state) => state.isPending);
  const setIsPending = useUnitPracticeStore((state) => state.setIsPending);
  const resetCompletedTerms = useUnitPracticeStore(
    (state) => state.resetCompletedTerms
  );

  useEffect(() => {
    resetCompletedTerms();
  }, []);

  const handleSave = useCallback(async () => {
    if (!unitSetId || isPending) return false;
    if (completedTerms.length === 0) return false;

    setIsPending(true);

    try {
      const success = await updateUserResults(unitSetId, completedTerms);

      if (success) {
        router.push(`/card-set/${unitSetId}/results?refresh=${Date.now()}`);
      }
      return success;
    } catch {
      return false;
    } finally {
      setIsPending(false);
    }
  }, [unitSetId, completedTerms, isPending, setIsPending, router]);

  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isPending) checkAnswer();
  };

  return {
    isDisabled: isPending,
    onEnterPress,
    saveResults: handleSave,
  };
};
