import getEngWordData from "@/shared/api/getEngWordData";
import { translateText } from "@/shared/api/translateText";
import { cleanEngWord } from "@/shared/utils/unit-set/cleanEngWord";

export const getTranslatedHint = async (
  word: string,
  targetLang: "uk" | "ru"
) => {
  const apiWord = await getEngWordData(word);

  if (!apiWord) return null;

  const translatedWord = await translateText({
    text: apiWord,
    source: "en",
    target: targetLang,
  });
  if (!translatedWord) return null;

  return cleanEngWord(translatedWord);
};
