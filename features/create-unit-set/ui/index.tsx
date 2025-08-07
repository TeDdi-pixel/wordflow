"use client";

import MainTitle from "@/shared/components/MainTitle";
import { useActionState } from "react";
import { TypeUnitForm, UnitSetType } from "@/shared/model/types/unit";
import { createUnitSet } from "../action/createUnitSet";
import Form from "next/form";
import { UnitList } from "./UnitList";
import { usePathname } from "next/navigation";
import Error from "@/shared/components/errors/Error";
import SubmitButton from "@/shared/components/buttons/SubmitButton";
import { UnitSetDescription, UnitSetTitleInput } from "@/entities/unit-set";

const typeMap = new Map<string, string>([["/create-card-set", "cards"]]);

export const UnitForm = () => {
  const pathname = usePathname();

  const initialForm = {
    title: "",
    type: "",
    description: "",
    units: [],
    unitSetType: typeMap.get(pathname) as UnitSetType,
    error: "",
  };

  const [state, action, pending] = useActionState<TypeUnitForm, FormData>(
    createUnitSet,
    initialForm
  );

  return (
    <Form action={action} className="max-w-[935px] w-full flex flex-col">
      <MainTitle text="Створити список карток" />
      <UnitSetTitleInput
        placeholder="Впишіть назву, наприклад, “Verbs”"
        defaultValue={state.title}
      />
      <UnitSetDescription
        placeholder="Додайте опис..."
        defaultValue={state.description}
      />
      <div className="flex flex-col">
        <UnitList />
        <Error error={state.error} />
        <div className="flex justify-center w-full">
          <SubmitButton
            text="Створити список"
            pending={pending}
            error={state.error}
          />
        </div>
      </div>
    </Form>
  );
};

export default UnitForm;
