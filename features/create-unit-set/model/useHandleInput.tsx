"use client";

import { useTempStore } from "@/shared/store/useTempStore";
import { normalizeEngWord } from "@/shared/utils/unit-set/normalizeEngWord";
import { ChangeEvent, useCallback, useEffect, useRef } from "react";
import useDebounce from "@/shared/hooks/useDebounce";
import useTranslatedHint from "./useTranslatedHint";

type Props = {
  unitId: string;
  fieldType: "term" | "definition";
};

const useHandleInput = ({ unitId, fieldType }: Props) => {
  const setCurrentUnitId = useTempStore((state) => state.setCurrentUnitId);
  const setUnitTerm = useTempStore((state) => state.setUnitTerm);
  const setUnitDefinition = useTempStore((state) => state.setUnitDefinition);
  const termLang = useTempStore((state) => state.termLang);
  const definitionLang = useTempStore((state) => state.definitionLang);
  const setProposedOption = useTempStore((state) => state.setProposedOption);

  const setTranslatedHint = useTranslatedHint(unitId);

  const lastEngWordRef = useRef<string>("");

  const debouncedFetch = useDebounce(setTranslatedHint, 500);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCurrentUnitId(unitId);

      switch (fieldType) {
        case "term":
          setUnitTerm(value);

          if (termLang !== "ENG") return;

          if (!value.trim()) {
            setProposedOption(unitId, "");
            return;
          }

          const engWord = normalizeEngWord(value);
          if (!engWord) {
            setProposedOption(unitId, "");
            return;
          }

          lastEngWordRef.current = engWord;
          debouncedFetch(engWord);
          break;

        case "definition":
          setProposedOption(unitId, "");
          setUnitDefinition(unitId, value);
      }
    },
    [
      unitId,
      fieldType,
      setUnitTerm,
      setUnitDefinition,
      setCurrentUnitId,
      setProposedOption,
      termLang,
      debouncedFetch,
    ]
  );

  useEffect(() => {
    if (definitionLang === "ENG") {
      setProposedOption(unitId, "");
      return;
    }
    if (definitionLang && lastEngWordRef.current) {
      setTranslatedHint(lastEngWordRef.current);
    }
  }, [definitionLang, setTranslatedHint, unitId, setProposedOption]);

  return handleChange;
};

export default useHandleInput;
