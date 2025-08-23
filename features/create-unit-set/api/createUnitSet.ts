"use server";

import { withError } from "@/shared/utils/auth/withError";
import { getUserId } from "@/shared/lib/session";
import { UNIT_SET_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import UnitSetSchema from "@/shared/model/schemas/UnitSet";
import User from "@/shared/model/schemas/User";
import { TypeUnit } from "@/shared/model/types/unit";
import createDbConnection from "@/shared/lib/mongoose";
import axios from "axios";
import { normalizeEngWord } from "@/shared/utils/unit-set/normalizeTerm";
import { BaseFields } from "@/shared/model/types/forms";
import { translateText } from "@/shared/api/translateText";

const ERRORS = UNIT_SET_ERROR_MESSAGES;

export const createUnitSet = async <T extends BaseFields>(
  prevState: Awaited<T>,
  form: FormData
): Promise<T> => {
  try {
    await createDbConnection();

    const title = form.get("title");

    if (!title) {
      return withError<T>(prevState, ERRORS.MISSING_TITLE);
    }

    const description = form.get("description");

    const entries = [...form.entries()];

    if (!entries) {
      return withError<T>(prevState, ERRORS.MISSING_FIELDS);
    }

    const units: Omit<
      TypeUnit,
      "_id" | "meanings" | "phonetics" | "proposedOption"
    >[] = [];

    const maxCards = 30;

    for (let i = 0; i < maxCards; i++) {
      const term = form.get(`card[${i}].term`) as string;
      const definition = form.get(`card[${i}].definition`) as string;

      if (!term && !definition) continue;

      if (!term || !definition) {
        return withError<T>(
          prevState,
          `Картка №${i + 1} має бути повністю заповнена`
        );
      }

      units.push({ termNumber: i + 1, term, definition });
    }

    if (units.length === 0) {
      return withError<T>(prevState, ERRORS.MISSING_CARDS);
    }

    const relatedUserId = await getUserId();

    if (!relatedUserId) return withError<T>(prevState, ERRORS.USERNAME_MISSING);

    const userDoc = await User.findById({ _id: relatedUserId });
    if (!userDoc) return withError<T>(prevState, ERRORS.USERNAME_MISSING);

    const authorsName = userDoc.username;
    const unitSetType = prevState.unitSetType;

    const updatedUnits = await Promise.all(
      units.map(async (unit) => {
        let meanings = [] as unknown[];
        let phonetic = "";
        let audio = "";
        // let cleanedUnit = null;

        const termLang = form.get("termLang");
        const definitionLang = form.get("definitionLang");

        const unitFields = [termLang, definitionLang];

        const engFieldIndex = unitFields.indexOf("ENG");
        const uaWordIndex = unitFields.indexOf("UA");

        if (engFieldIndex === -1) {
          return { ...unit, audio, phonetic, meanings };
        }

        const engWord = engFieldIndex === 0 ? unit.term : unit.definition;

        // cleanedUnit = {
        //   ...unit,
        //   ...(engFieldIndex === 0
        //     ? { term: normalizeTerm(unit.term) }
        //     : { definition: normalizeTerm(unit.definition) }),
        // };

        if (termLang === "ENG" || definitionLang === "ENG") {
          try {
            const res = await axios.get(
              `https://api.dictionaryapi.dev/api/v2/entries/en/${normalizeEngWord(
                engWord
              )}`,
              { timeout: 5000 }
            );

            if (
              !res.data ||
              !Array.isArray(res.data) ||
              res.data.length === 0
            ) {
              throw new Error("Invalid API response");
            }

            meanings = res.data[0].meanings;

            // if (uaWordIndex !== -1) {
            //   meanings = await Promise.all(
            //     meanings.map(async (item) => {
            //       if (!item?.definitions) return item;

            //       const translatedDefs = await Promise.all(
            //         item?.definitions?.map(async (def) => {
            //           if (!def.definition) return def;

            //           const uaWord = await translateText({
            //             text: def.definition,
            //             source: "ru",
            //             target: "uk",
            //           });

            //           return {
            //             ...def,
            //             definition: uaWord,
            //           };
            //         })
            //       );

            //       return { ...item, definitions: translatedDefs };
            //     })
            //   );
            // }

            let phonetics = res.data[0].phonetics;

            for (const p of phonetics) {
              if (!phonetic && p.text) {
                phonetic = p.text;
              }
              if (!audio && p.audio) {
                audio = p.audio;
              }
              if (phonetic && audio) break;
            }

            return {
              ...unit,
              audio,
              phonetic,
              meanings,
            };
          } catch (error: any) {
            console.error(`Помилка для слова ${unit.term}:`, error.message);
            return { ...unit };
          }
        }
      })
    );

    await UnitSetSchema.create({
      relatedUserId,
      title,
      description,
      unitSetType,
      authorsName,
      units: updatedUnits,
    });

    return {
      ...prevState,
      error: "",
      operationType: "SUCCESS",
    };
  } catch (error) {
    console.error("Помилка при створенні набору", error);
    return withError<T>(prevState, ERRORS.SERVER_ERROR);
  }
};
