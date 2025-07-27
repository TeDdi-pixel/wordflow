"use server";

import { withError } from "@/shared/helpers/withError";
import createDbConnection from "@/shared/lib/mongoose";
import { getUserId } from "@/shared/lib/session";
import { UNIT_SET_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnit, TypeUnitForm } from "@/shared/model/types/unit";

const ERRORS = UNIT_SET_ERROR_MESSAGES;

export const createUnitSet = async (
  prevState: TypeUnitForm,
  form: FormData
) => {
  const title = form.get("title");

  if (!title) return withError<TypeUnitForm>(prevState, ERRORS.MISSING_TITLE);

  const description = form.get("description");

  const entries = [...form.entries()];

  if (!entries)
    return withError<TypeUnitForm>(prevState, ERRORS.MISSING_FIELDS);

  const units: TypeUnit[] = [];

  const maxCards = 30;

  for (let i = 0; i < maxCards; i++) {
    const term = form.get(`card[${i}].term`) as string;
    const definition = form.get(`card[${i}].definition`) as string;

    if (!term && !definition) continue;

    if (!term || !definition) {
      return withError<TypeUnitForm>(
        prevState,
        `Картка №${i + 1} має бути повністю заповнена`
      );
    }

    units.push({ unitId: i + 1, term, definition });
  }

  if (units.length === 0) {
    return withError<TypeUnitForm>(prevState, ERRORS.MISSING_CARDS);
  }

  const relatedUserId = await getUserId();

  await createDbConnection();

  await UnitSet.create({
    relatedUserId,
    title,
    description,
    units,
  });

  return {
    ...prevState,
    type: "SUCCESS",
  };
};
