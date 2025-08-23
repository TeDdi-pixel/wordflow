"use client";

import { translateText } from "@/shared/api/translateText";
import { useTempStore } from "@/shared/store/useTempStore";
import { normalizeEngWord } from "@/shared/utils/unit-set/normalizeEngWord";
import axios from "axios";
import { ChangeEvent, useCallback, useRef } from "react";

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

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCurrentUnitId(unitId);

      if (fieldType === "term") {
        setUnitTerm(value);

        if (termLang === "ENG") {
          if (debounceRef.current) clearTimeout(debounceRef.current);

          debounceRef.current = setTimeout(async () => {
            if (!value.trim()) {
              setProposedOption(unitId, "");
              return;
            }

            try {
              const engWord = normalizeEngWord(value);
              if (!engWord) {
                setProposedOption(unitId, "");
                return;
              }

              const res = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${engWord}`,
                { timeout: 5000 }
              );

              const word = res.data?.[0]?.word;
              if (!word) return;

              const targetLang = definitionLang === "UA" ? "uk" : "ru";

              const translated = await translateText({
                text: word,
                source: "en",
                target: targetLang,
              });

              if (!translated) {
                setProposedOption(unitId, "");
                return;
              }

              const cleaned = translated
                .trim()
                .replace(/[^a-zа-яёіїєґ'-]/gi, "")
                .replace(/\s+/g, " ")
                .toLowerCase();

              setProposedOption(unitId, cleaned);
            } catch (err) {
              setProposedOption(unitId, "");
            }
          }, 1000);
        }
      } else {
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
      definitionLang,
    ]
  );

  return handleChange;
};

export default useHandleInput;
