"use client";

import MainTitle from "@/shared/ui/MainTitle";
import TitleInput from "@/shared/ui/TitleInput";
import { useActionState } from "react";
import { TypeUnitForm } from "@/shared/model/types/unit";
import Description from "@/shared/ui/Description";
import { createUnitSet } from "../action/createUnitSet";
import AddUnitButton from "./AddUnitButton";
import Form from "next/form";
import { UnitList } from "./UnitList";

const initialForm = {
  title: "",
  type: "",
  description: "",
  units: [],
  error: "",
};

export const UnitForm = () => {
  const [state, action, pending] = useActionState<TypeUnitForm, FormData>(
    createUnitSet,
    initialForm
  );

  return (
    <Form action={action} className="max-w-[935px] w-full flex flex-col">
      <MainTitle text="Створити список карток" />
      <TitleInput placeholder="Впишіть назву, наприклад, “Verbs”" />
      <Description placeholder="Додайте опис..." />
      <div className="flex gap-[32px] flex-col">
        <UnitList />
        <div>{state.error}</div>
        <AddUnitButton />
        <button type="submit" className="cursor-pointer">
          {pending ? "loading..." : "create card"}
        </button>
      </div>
    </Form>
  );
};

export default UnitForm;
