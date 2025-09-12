"use client";

import MainTitle from "@/shared/ui/MainTitle";
import Form from "next/form";
import SubmitButton from "@/shared/ui/buttons/SubmitButton";
import useToastLoading from "../../../../shared/hooks/useToastLoading";
import { createUnitSet } from "@/features/create-unit-set/api/createUnitSet";
import { initialForm } from "../model/config";
import { usePathname } from "next/navigation";
import { TypeInitialForm } from "../model/types";
import { TitleInput } from "./TitleInput";
import { DescriptionInput } from "./DescriptionInput";
import useActionForm from "@/shared/hooks/useActionForm";
import { FormUnitList } from "@/features/drag-form-units";
import LanguageSelect from "./LanguageSelect";
import { useEffect, useRef } from "react";
import { useTempStore } from "@/shared/store/useTempStore";
import toast from "react-hot-toast";

export const UnitSetForm = () => {
  const pathname = usePathname();
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const previousPending = useRef<boolean>(false);

  const resetTempStore = useTempStore((state) => state.resetTempStore);

  const { state, action, pending } = useActionForm<TypeInitialForm>(
    createUnitSet,
    initialForm(pathname)
  );

  useEffect(() => {
    if (previousPending.current && !pending && !state.error) {
      resetTempStore();
      toast.success("Набір успішно створений");
    }

    previousPending.current = pending;
  }, [pending, resetTempStore]);

  useToastLoading(pending);

  return (
    <Form action={action} className="max-w-[935px] w-full flex flex-col">
      <MainTitle text="Створити список карток" />

      <TitleInput
        placeholder="Створіть назву для вашої картки, наприклад, “Verbs”."
        defaultValue={state.title}
      />

      <DescriptionInput
        placeholder="Додайте опис... (не обо'язково)"
        defaultValue={state.description}
      />

      <div className="flex w-full gap-[32px]">
        <LanguageSelect
          defaultLanguage="ENG"
          id={"source"}
          label="Мова терінів:"
        />
        <LanguageSelect
          defaultLanguage="UA"
          id={"target"}
          label="Мова визначень:"
        />
      </div>

      <div className="flex flex-col">
        <div className="mb-[18px]">
          <FormUnitList />
        </div>

        <div className="flex justify-center w-full gap-4">
          <input
            ref={hiddenInputRef}
            type="hidden"
            name="isPrivate"
            value="false"
          />

          <SubmitButton
            setHiddenInputValue={(val) => {
              hiddenInputRef.current!.value = val;
            }}
            isPrivate={false}
            text="Створити набір"
            pending={pending}
          />

          <SubmitButton
            setHiddenInputValue={(val) => {
              hiddenInputRef.current!.value = val;
            }}
            isPrivate={true}
            text="Створити приватний набір"
            pending={pending}
          />
        </div>
      </div>
    </Form>
  );
};

export default UnitSetForm;
