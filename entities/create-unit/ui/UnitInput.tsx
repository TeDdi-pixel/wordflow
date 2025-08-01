"use client";
import { useTempStore } from "@/store/useTempStore";
import { ChangeEvent, memo, useCallback } from "react";

type Props = {
  unitId: number;
  name: string;
  label: string;
  fieldType: "term" | "definition";
};

export const UnitInput = memo(({ unitId, name, label, fieldType }: Props) => {
  const value = useTempStore((state) => {
    const item = state.items.find((i) => i.unitId === unitId);
    return fieldType === "term" ? item?.term : item?.definition;
  });

  const setUnitTerm = useTempStore((state) => state.setUnitTerm);
  const setUnitDefinition = useTempStore((state) => state.setUnitDefinition);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (fieldType === "term") setUnitTerm(unitId, e.target.value);
      else setUnitDefinition(unitId, e.target.value);
    },
    [unitId, fieldType, setUnitTerm, setUnitDefinition]
  );

  return (
    <div className="flex flex-col w-full">
      <input
        type="text"
        name={name}
        value={value || ""}
        onChange={handleChange}
        className="border-b-2 border-accent-border focus:outline-none text-[16px] mb-2 focus:border-accent"
      />
      <label className="text-[12px] uppercase font-bold mb-[38px]">
        {label}
      </label>
    </div>
  );
});

UnitInput.displayName = "UnitInput";
