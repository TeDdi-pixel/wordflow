"use server";

import { withError } from "@/shared/utils/auth/withError";
import { getUserId } from "@/shared/lib/session";
import { UNIT_SET_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import User from "@/shared/model/schemas/User";
import { TypeUnit } from "@/shared/model/types/unit";
import createDbConnection from "@/shared/lib/mongoose";
import axios from "axios";
import { BaseFields } from "@/shared/model/types/forms";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { getNormalizedEngWord } from "@/shared/utils/unit-set/getNormalizedEngWord";
import { Language } from "@/shared/model/types/temp-store";

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

    const source = form.get("source") as Language;
    const target = form.get("target") as Language;

    if (!source || !target)
      return withError<T>(prevState, ERRORS.MISSING_LANGUAGES);

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

      units.push({ termNumber: i + 1, term, definition, source, target });
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

        try {
          const engWord = getNormalizedEngWord(unit.term);

          if (!engWord) {
            return { ...unit, audio, phonetic, meanings };
          }

          const res = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${engWord}`,
            { timeout: 5000 }
          );

          if (!res.data?.[0]) {
            return { ...unit, audio, phonetic, meanings };
          }

          meanings = res.data[0].meanings;

          const phonetics = res.data[0].phonetics;

          for (const p of phonetics) {
            if (!phonetic && p.text) phonetic = p.text;
            if (!audio && p.audio) audio = p.audio;
            if (phonetic && audio) break;
          }

          return { ...unit, audio, phonetic, meanings };
        } catch (err) {
          console.error("Error fetching word", unit.term, err);
          return { ...unit, audio, phonetic, meanings };
        }
      })
    );

    await UnitSet.create({
      relatedUserId,
      title,
      description,
      unitSetType,
      authorsName,
      source,
      target,
      randomSavedUnitsSet: false,
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
