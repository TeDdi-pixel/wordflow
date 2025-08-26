"use client";

import IconButton from "@/shared/ui/buttons/IconButton";
import TipIcon from "@/shared/icons/unit/TipIcon";
import TipActiveIcon from "@/shared/icons/unit/TipActiveIcon";
import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useEffect } from "react";
import { Language } from "@/shared/model/types/temp-store";

export const HintButton = ({
  units,
  target,
  source,
}: {
  units: TypeUnit[];
  target: Language;
  source: Language;
}) => {
  const currentUnitId = usePracticeStore((state) => state.currentUnitId);
  const setIsHintOpen = usePracticeStore((state) => state.setIsHintOpen);
  const isHintOpen = usePracticeStore((state) => state.isHintOpen);
  const showNextMeaning = usePracticeStore((state) => state.showNextMeaning);
  const showPrevMeaning = usePracticeStore((state) => state.showPrevMeaning);
  const meaningNumber = usePracticeStore((state) => state.meaningNumber);
  const activePartOfSpeech = usePracticeStore(
    (state) => state.activePartOfSpeech
  );
  const setActivePartOfSpeech = usePracticeStore(
    (state) => state.setActivePartOfSpeech
  );

  const meanings = units?.find((unit) => unit._id === currentUnitId)?.meanings;
  const partsOfSpeech = meanings?.map((meaning) => meaning.partOfSpeech);

  const specificMeaning = meanings?.find(
    (meaning) => meaning.partOfSpeech === activePartOfSpeech
  );
  const currentTermLang = usePracticeStore((state) => state.currentTermLang);

  useEffect(() => {
    if (partsOfSpeech) setActivePartOfSpeech(partsOfSpeech[0]);
  }, [currentUnitId]);

  useEffect(() => {
    console.log(specificMeaning);
  }, [specificMeaning]);

  const synonyms = specificMeaning?.synonyms;

  const hasSynonyms = synonyms && synonyms.length > 0;

  const definition = specificMeaning?.definitions[0].definition;

  const hasDefinitions = definition && definition.length > 0;

  const example = specificMeaning?.definitions[0].example;

  const hasExample = example && example.length > 0;

  return (
    <IconButton
      handleClick={() => setIsHintOpen(!isHintOpen)}
      icon={isHintOpen ? <TipActiveIcon /> : <TipIcon />}
    />
  );
};
