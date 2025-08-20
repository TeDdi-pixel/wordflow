"use client";

import MainTitle from "@/shared/components/MainTitle";
import { useActionState, useEffect, useRef } from "react";
import { TypeUnitSetForm, UnitSetType } from "@/shared/model/types/unit";
import Form from "next/form";
import { usePathname } from "next/navigation";
import SubmitButton from "@/shared/components/buttons/SubmitButton";
import { UnitSetDescription, UnitSetTitleInput } from "@/entities/unit-set";
import { createUnitSet } from "@/features/create-unit-set/action/createUnitSet";
import { UnitList } from "@/features/create-unit-set";
import toast from "react-hot-toast";
import LoadingText from "@/shared/components/LoadingText";

const typeMap = new Map<string, string>([["/create-card-set", "cards"]]);

export const UnitSetForm = () => {
  const pathname = usePathname();

  const initialForm = {
    title: "",
    type: "",
    description: "",
    units: [],
    unitSetType: typeMap.get(pathname) as UnitSetType,
    error: "",
    errorId: "",
  };
  const toastIdRef = useRef<string | undefined>(undefined);

  const [state, action, pending] = useActionState<TypeUnitSetForm, FormData>(
    createUnitSet,
    initialForm
  );

  useEffect(() => {
    if (state.type === "ERROR" && state.errorId) {
      toast.error(state.error, { id: state.errorId });
    }
  }, [state.type, state.errorId, state.error]);

  useEffect(() => {
    if (pending) {
      toastIdRef.current = toast.loading(
        <LoadingText text="Завантаження..." />,
        {
          duration: Infinity,
        }
      );
    } else if (toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
      toastIdRef.current = undefined;
    }
  }, [pending]);

  return (
    <Form action={action} className="max-w-[935px] w-full flex flex-col">
      <MainTitle text="Створити список карток" />

      <UnitSetTitleInput
        placeholder="Створіть назву для вашої картки, наприклад, “Verbs”."
        defaultValue={state.title}
      />

      <UnitSetDescription
        placeholder="Додайте опис... (не обо'язково)"
        defaultValue={state.description}
      />

      <div className="flex flex-col">
        <div className="mb-[18px]">
          <UnitList />
        </div>

        <div className="flex justify-center w-full">
          <SubmitButton
            text="Створити список"
            pending={pending}
            pendingText="Створюємо список..."
            error={state.error}
          />
        </div>
      </div>
    </Form>
  );
};

export default UnitSetForm;
