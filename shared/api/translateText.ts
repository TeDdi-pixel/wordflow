import axios from "axios";
import { TranslateOptions } from "../model/types/translate-api";

export const translateText = async ({
  text,
  source,
  target,
  email,
}: TranslateOptions) => {
  try {
    const response = await axios.get(
      "https://api.mymemory.translated.net/get",
      {
        params: {
          q: text,
          langpair: `${source}|${target}`,
          ...(email ? { de: email } : {}),
        },
        timeout: 10000,
      }
    );

    return response.data.responseData.translatedText;
  } catch (error) {
    console.error("Ошибка при переводе:", error);
    return null;
  }
};
