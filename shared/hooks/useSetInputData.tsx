"use client";

import { useUnitPracticeStore } from "@/store/useUnitPracticeStore";
import { useEffect } from "react";

const useSetInputData = () => {
  const completedTerms = useUnitPracticeStore((state) => state.completedTerms);
  const currentUnitId = useUnitPracticeStore((state) => state.currentUnitId);
  const setOldAnswer = useUnitPracticeStore((state) => state.setOldAnswer);
  const setCheckStatus = useUnitPracticeStore((state) => state.setCheckStatus);
  const resetCheckStatus = useUnitPracticeStore(
    (state) => state.resetCheckStatus
  );
  const setHasNewAnswer = useUnitPracticeStore(
    (state) => state.setHasNewAnswer
  );

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
