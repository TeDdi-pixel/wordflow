"use client";

import MainTitle from "@/shared/ui/MainTitle";
import TitleInput from "@/shared/ui/TitleInput";
import { useActionState } from "react";
import { TypeUnitForm, UnitSetType } from "@/shared/model/types/unit";
import Description from "@/shared/ui/Description";
import { createUnitSet } from "../action/createUnitSet";
import Form from "next/form";
import { UnitList } from "./UnitList";
import UnitSubmitButton from "@/shared/ui/unit/UnitSubmitButton";
import UnitSetError from "@/shared/ui/unit/UnitSetError";
import { usePathname } from "next/navigation";

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
      <TitleInput
        placeholder="Впишіть назву, наприклад, “Verbs”"
        defaultValue={state.title}
      />
      <Description
        placeholder="Додайте опис..."
        defaultValue={state.description}
      />
      <div className="flex flex-col">
        <UnitList />
        <UnitSetError error={state.error} />
        <div className="flex justify-center w-full">
          <UnitSubmitButton
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
