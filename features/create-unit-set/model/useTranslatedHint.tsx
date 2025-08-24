import { useTempStore } from "@/shared/store/useTempStore";
import { useCallback } from "react";
import { getTranslatedHint } from "../api/getTranslatedHint";

const useTranslatedHint = (unitId: string) => {
  const isDefinitionSet = useTempStore((state) => state.isDefinitionSet);
  const definitionLang = useTempStore((state) => state.definitionLang);
  const setProposedOption = useTempStore((state) => state.setProposedOption);

  const setTranslatedHint = useCallback(
    async (word: string) => {
      try {
        if (isDefinitionSet(unitId)) return;

        const targetLang = definitionLang === "UA" ? "uk" : "ru";
        const translatedHint = await getTranslatedHint(word, targetLang);

        setProposedOption(unitId, translatedHint || "");
      } catch {
        setProposedOption(unitId, "");
      }
    },
    [definitionLang, unitId, setProposedOption, isDefinitionSet]
  );
  return setTranslatedHint;
};

export default useTranslatedHint;
