"use client";

import useChangeInput from "@/features/create-unit-set/model/useChangeInput";
import { useTempStore } from "@/store/useTempStore";
import { memo } from "react";

type Props = {
  name: string;
  label: string;
  unitId: string;
  fieldType: "term" | "definition";
};

export const UnitInput = memo(({ unitId, name, label, fieldType }: Props) => {
  const value = useTempStore((state) => {
    const item = state.units.find((unit) => unit._id === unitId);
    return fieldType === "term" ? item?.term : item?.definition;
  });

  const handleChange = useChangeInput({ unitId, fieldType });

  return (
    <div className="flex flex-col w-full">
      <input
        type="text"
        name={name}
        value={value || ""}
        onChange={handleChange}
        autoComplete="off"
        className="border-b-2 border-accent-border focus:outline-none text-[16px] mb-2 focus:border-accent"
      />
      <label className="text-[12px] uppercase font-bold mb-[38px]">
        {label}
      </label>
    </div>
  );
});
