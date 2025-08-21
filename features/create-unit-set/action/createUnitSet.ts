"use server";

import { withError } from "@/shared/utils/auth/withError";
import { getUserId } from "@/shared/lib/session";
import { UNIT_SET_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import UnitSetSchema from "@/shared/model/schemas/UnitSet";
import User from "@/shared/model/schemas/User";
import { TypeUnit, TypeUnitSetForm } from "@/shared/model/types/unit";
import createDbConnection from "@/shared/lib/mongoose";
import axios from "axios";
import { normalizeTerm } from "@/shared/utils/unit-set/normalizeTerm";

const ERRORS = UNIT_SET_ERROR_MESSAGES;

export const createUnitSet = async (
  prevState: TypeUnitSetForm,
  form: FormData
): Promise<TypeUnitSetForm> => {
  try {
    await createDbConnection();

    const title = form.get("title");

    if (!title) {
      return withError<TypeUnitSetForm>(prevState, ERRORS.MISSING_TITLE);
    }

    const description = form.get("description");

    const entries = [...form.entries()];

    if (!entries) {
      return withError<TypeUnitSetForm>(prevState, ERRORS.MISSING_FIELDS);
    }

    const units: Omit<TypeUnit, "_id" | "meanings" | "phonetics">[] = [];

    const maxCards = 30;

    for (let i = 0; i < maxCards; i++) {
      const term = form.get(`card[${i}].term`) as string;
      const definition = form.get(`card[${i}].definition`) as string;

      if (!term && !definition) continue;

      if (!term || !definition) {
        return withError<TypeUnitSetForm>(
          prevState,
          `Картка №${i + 1} має бути повністю заповнена`
        );
      }

      units.push({ termNumber: i + 1, term, definition });
    }

    if (units.length === 0) {
      return withError<TypeUnitSetForm>(prevState, ERRORS.MISSING_CARDS);
    }

    const relatedUserId = await getUserId();

    if (!relatedUserId)
      return withError<TypeUnitSetForm>(prevState, ERRORS.USERNAME_MISSING);

    const userDoc = await User.findById({ _id: relatedUserId });
    if (!userDoc)
      return withError<TypeUnitSetForm>(prevState, ERRORS.USERNAME_MISSING);

    const authorsName = userDoc.username;
    const unitSetType = prevState.unitSetType;

    const updatedUnits = await Promise.all(
      units.map(async (unit) => {
        const cleanedUnit = {
          ...unit,
          term: normalizeTerm(unit.term),
        };

        try {
          const res = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${cleanedUnit.term}`,
            { timeout: 5000 }
          );

          if (!res.data || !Array.isArray(res.data) || res.data.length === 0) {
            throw new Error("Invalid API response");
          }

          const meanings = res.data[0].meanings || [];
          const phonetics = res.data[0].phonetics || [];

          let audio = undefined as string | undefined;
          let phonetic = undefined as string | undefined;

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
      type: "SUCCESS",
    };
  } catch (error) {
    console.error("Помилка при створенні набору", error);
    return withError<TypeUnitSetForm>(prevState, ERRORS.SERVER_ERROR);
  }
};
