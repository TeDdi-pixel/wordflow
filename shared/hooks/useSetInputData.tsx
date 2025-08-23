"use client";

import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useEffect } from "react";

const useSetInputData = () => {
  const completedTerms = usePracticeStore((state) => state.completedTerms);
  const currentUnitId = usePracticeStore((state) => state.currentUnitId);
  const setOldAnswer = usePracticeStore((state) => state.setOldAnswer);
  const setCheckStatus = usePracticeStore((state) => state.setCheckStatus);
  const resetCheckStatus = usePracticeStore((state) => state.resetCheckStatus);
  const setHasNewAnswer = usePracticeStore((state) => state.setHasNewAnswer);

  useEffect(() => {
    setHasNewAnswer(false);

    const term = completedTerms.find((t) => t.termId === currentUnitId);

    if (term) {
      setOldAnswer(term.lastAnswer);
      setCheckStatus(term.checkStatus);
    } else {
      setOldAnswer("");
      resetCheckStatus();
    }
  }, [
    currentUnitId,
    completedTerms,
    setOldAnswer,
    setCheckStatus,
    resetCheckStatus,
    setHasNewAnswer,
  ]);
};

export default useSetInputData;
