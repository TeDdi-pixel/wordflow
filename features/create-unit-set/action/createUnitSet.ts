import { TypeUnit, TypeUnitForm } from "@/shared/model/types/unit";

export const createUnitSet = (prevState: TypeUnitForm, form: FormData) => {
  const title = form.get("title");
  const description = form.get("description");

  const entries = [...form.entries()];

  const restructuredFormData = {
    title: title,
    description: description,
  } as TypeUnitForm;

  const units: TypeUnit[] = [];

  for (let i = 0; i < entries.length; i++) {
    const term = form.get(`card[${i}].term`) as string;
    const definition = form.get(`card[${i}].definition`) as string;
    if (!term && !definition) break;
    units.push({ id: i, term: term, definition: definition });
  }
  restructuredFormData.units = units;
  return restructuredFormData;
};