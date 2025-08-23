"use client";

import { translateText } from "@/shared/api/translateText";
import { useTempStore } from "@/shared/store/useTempStore";
import { normalizeEngWord } from "@/shared/utils/unit-set/normalizeTerm";
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

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCurrentUnitId(unitId);

      if (fieldType === "term") {
        setUnitTerm(value);

        if (termLang === "ENG") {
          if (debounceRef.current) clearTimeout(debounceRef.current);

          debounceRef.current = setTimeout(async () => {
            if (value !== "") {
              try {
                const res = await axios.get(
                  `https://api.dictionaryapi.dev/api/v2/entries/en/${normalizeEngWord(
                    value
                  )}`,
                  { timeout: 5000 }
                );

                if (definitionLang === "UA") {
                  setProposedOption(
                    await translateText({
                      text: res.data[0].word,
                      source: "en",
                      target: "uk",
                    }).then((str) =>
                      str
                        .trim()
                        .replace(/[^a-zа-яёіїєґ'-]/gi, "")
                        .replace(/\s+/g, " ")
                        .toLowerCase()
                    )
                  );
                }

                if (definitionLang === "RU") {
                  setProposedOption(
                    await translateText({
                      text: res.data[0].word,
                      source: "en",
                      target: "ru",
                    }).then((str) =>
                      str
                        .trim()
                        .replace(/[^a-zа-яёіїєґ'-]/gi, "")
                        .replace(/\s+/g, " ")
                        .toLowerCase()
                    )
                  );
                }
              } catch (err) {
                console.error(err);
              }
            }
          }, 1500);
        }
      } else {
        setProposedOption("");
        setUnitDefinition(value);
      }
    },
    [
      unitId,
      fieldType,
      setUnitTerm,
      setUnitDefinition,
      setCurrentUnitId,
      termLang,
    ]
  );

  return handleChange;
};

export default useHandleInput;
