import { Language } from "@/shared/model/types/temp-store";
import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useEffect } from "react";

const Hint = ({
  source,
  target,
  units,
}: {
  source: Language;
  units: TypeUnit[];
  target: Language;
}) => {
  const currentTermLang = usePracticeStore((state) => state.currentTermLang);
  const currentUnitId = usePracticeStore((state) => state.currentUnitId);
  const isHintOpen = usePracticeStore((state) => state.isHintOpen);
  const activePartOfSpeech = usePracticeStore(
    (state) => state.activePartOfSpeech
  );
  const setActivePartOfSpeech = usePracticeStore(
    (state) => state.setActivePartOfSpeech
  );
  const setIsHintOpen = usePracticeStore((state) => state.setIsHintOpen);

  const meanings = units?.find((unit) => unit._id === currentUnitId)?.meanings;
  const isHintExists =
    meanings && meanings !== undefined && meanings.length > 0;

  const partsOfSpeech = meanings?.map((meaning) => meaning.partOfSpeech);
  const specificMeaning = meanings?.find(
    (meaning) => meaning.partOfSpeech === activePartOfSpeech
  );

  useEffect(() => {
    setIsHintOpen(false);
  }, []);

  useEffect(() => {
    if (partsOfSpeech) setActivePartOfSpeech(partsOfSpeech[0]);
  }, [currentUnitId]);

  const synonyms = specificMeaning?.synonyms;
  const hasSynonyms = synonyms && synonyms.length > 0;
  const antonyms = specificMeaning?.antonyms;
  const hasAntonyms = antonyms && antonyms.length > 0;
  const definition = specificMeaning?.definitions[0].definition;
  const hasDefinitions = definition && definition.length > 0;
  const example = specificMeaning?.definitions[0].example;
  const hasExample = example && example.length > 0;

  return (
    source === "ENG" &&
    isHintExists && (
      <div
        className={`flex gap-4 items-center justify-between w-[757px] h-fit bg-bg-accent-2 text-text-2 rounded-default shadow-2xl transition-all top-[39px] ${
          isHintOpen
            ? "pointer-events-auto opacity-100 scale-100 p-4 max-h-[1000px] mt-[16px]"
            : "pointer-events-none opacity-0 scale-80 h-0 max-h-0"
        }`}
      >
        <div className="items-start w-full h-full">
          <div className="flex items-center gap-2 mb-4 w-fit">
            {partsOfSpeech?.map((partOfSpeech, index) => (
              <button
                key={index}
                type="button"
                className={`cursor-pointer py-1 px-2 transition-all rounded-full border-2 ${
                  activePartOfSpeech === partOfSpeech
                    ? "bg-bg-accent text-accent border-bg-accent"
                    : "bg-transparent border-bg-accent"
                }`}
                onClick={() => setActivePartOfSpeech(partOfSpeech)}
              >
                <span>{partOfSpeech}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {hasSynonyms && (
              <div className="flex">
                <span className="mr-2 font-extrabold">Синоніми:</span>
                <div className="flex flex-wrap gap-1">
                  {synonyms.toSpliced(5).join(", ")}
                </div>
              </div>
            )}

            {hasAntonyms && (
              <div className="flex">
                <span className="mr-2 font-extrabold">Антоніми:</span>
                <div className="flex flex-wrap gap-1">
                  {antonyms.toSpliced(5).join(", ")}
                </div>
              </div>
            )}

            {hasDefinitions && (
              <div className="flex">
                <span className="mr-2 font-extrabold">Визначення:</span>
                <span>{definition}</span>
              </div>
            )}

            {hasExample &&
              (currentTermLang === "source" || target === "ENG") && (
                <div className="flex ">
                  <span className="mr-2 font-extrabold">Приклад:</span>
                  <span>{example}</span>
                </div>
              )}
          </div>
        </div>
      </div>
    )
  );
};

export default Hint;
