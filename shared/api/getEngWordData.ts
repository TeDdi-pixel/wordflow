import axios from "axios";
import { normalizeEngWord } from "../utils/unit-set/normalizeEngWord";

export const getEngWordData = async (word: string): Promise<string | null> => {
  if (!word) return null;

  const clearedWord = normalizeEngWord(word);

  const res = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${clearedWord}`,
    { timeout: 5000 }
  );
  return res?.data[0]?.word || null;
};

export default getEngWordData;
