import { useTempStore } from "@/shared/store/useTempStore";
import { useCallback } from "react";
import { getTranslatedHint } from "../api/getTranslatedHint";

const useTranslatedHint = (unitId: string) => {
  const isDefinitionSet = useTempStore((state) => state.isDefinitionSet);
  const target = useTempStore((state) => state.target);
  const setProposedOption = useTempStore((state) => state.setProposedOption);

  const setTranslatedHint = useCallback(
    async (word: string) => {
      try {
        if (isDefinitionSet(unitId)) return;

        const targetLang = target === "UA" ? "uk" : "ru";
        const translatedHint = await getTranslatedHint(word, targetLang);

        setProposedOption(unitId, translatedHint || "");
      } catch {
        setProposedOption(unitId, "");
      }
    },
    [target, unitId, setProposedOption, isDefinitionSet]
  );
  return setTranslatedHint;
};

export default useTranslatedHint;
