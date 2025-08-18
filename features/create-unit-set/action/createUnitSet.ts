"use server";

import { withError } from "@/shared/utils/auth/withError";
import { getUserId } from "@/shared/lib/session";
import { UNIT_SET_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import UnitSetSchema from "@/shared/model/schemas/UnitSet";
import User from "@/shared/model/schemas/User";
import { TypeUnit, TypeUnitSetForm } from "@/shared/model/types/unit";
import createDbConnection from "@/shared/lib/mongoose";
import { auth } from "@/auth";

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

    const units: Omit<TypeUnit, "_id">[] = [];

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
    console.log(relatedUserId);

    if (!relatedUserId)
      return withError<TypeUnitSetForm>(prevState, ERRORS.USERNAME_MISSING);

    const userDoc = await User.findById({ _id: relatedUserId });
    if (!userDoc)
      return withError<TypeUnitSetForm>(prevState, ERRORS.USERNAME_MISSING);

    const authorsName = userDoc.username;
    const unitSetType = prevState.unitSetType;

    await UnitSetSchema.create({
      relatedUserId,
      title,
      description,
      units,
      unitSetType,
      authorsName,
    });

    return {
      ...prevState,
      error: "",
      type: "SUCCESS",
    };
  } catch (error) {
    console.error("Error in createUnitSet:", error);
    return withError<TypeUnitSetForm>(prevState, ERRORS.SERVER_ERROR);
  }
};
