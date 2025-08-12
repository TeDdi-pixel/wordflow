"use client";

import { usePracticeStore } from "@/store/usePracticeStore";
import { distance } from "fastest-levenshtein";
import { TypeUnit } from "@/shared/model/types/unit";
import { useEffect, useRef } from "react";
import { TypeCompletedUnit } from "../model/types/practice-store";

const MAX_ALLOWED_DISTANCE = 2;

export const useCheckAnswer = (units: TypeUnit[]) => {
  const newAnswer = usePracticeStore((state) => state.newAnswer);
  const resetNewAnswer = usePracticeStore((state) => state.resetNewAnswer);
  const termNumber = usePracticeStore((state) => state.termNumber);
  const setNextTerm = usePracticeStore((state) => state.setNextTerm);
  const completedTerms = usePracticeStore((state) => state.completedTerms);
  const setCompletedTerms = usePracticeStore(
    (state) => state.setCompletedTerms
  );
  const setCheckStatus = usePracticeStore((state) => state.setCheckStatus);
  const resetCheckStatus = usePracticeStore((state) => state.resetCheckStatus);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const checkAnswer = () => {
    const isTermCompleted = completedTerms.some(
      (term: TypeCompletedUnit) =>
        term.termId === units[termNumber]._id &&
        term.checkStatus === "CORRECTNESS"
    );
    if (isTermCompleted) {
      setNextTerm(units.length);
      resetNewAnswer();
      return;
    }

    const correctDefinition = units[termNumber]?.definition
      .toLowerCase()
      .trim();
    const trimmedAnswer = newAnswer?.trim();
    if (!trimmedAnswer) return;
    const levenshteinDistance = distance(trimmedAnswer, correctDefinition);
    const isCorrect = levenshteinDistance <= MAX_ALLOWED_DISTANCE;

    if (isCorrect) {
      setCheckStatus("CORRECTNESS");
      setCompletedTerms(
        units,
        units[termNumber]._id,
        "CORRECTNESS",
        newAnswer ?? ""
      );
      resetNewAnswer();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (units.length - (termNumber + 1) !== 0) setNextTerm(units.length);
        resetCheckStatus();
        timeoutRef.current = null;
      }, 1500);
    } else {
      setCheckStatus("MISTAKE");
      setCompletedTerms(
        units,
        units[termNumber]._id,
        "MISTAKE",
        newAnswer ?? ""
      );
    }
  };

  return { checkAnswer };
};
