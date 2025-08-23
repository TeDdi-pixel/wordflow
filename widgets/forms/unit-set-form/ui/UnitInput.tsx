"use client";

import useHandleInput from "@/features/create-unit-set/model/useHandleInput";
import { useTempStore } from "@/shared/store/useTempStore";
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
  const proposedOption = useTempStore((state) =>
    state.getProposedOption(unitId)
  );
  const isDefinitionSet = useTempStore((state) => state.isDefinitionSet);

  const setUnitDefinition = useTempStore((state) => state.setUnitDefinition);
  const setProposedOption = useTempStore((state) => state.setProposedOption);

  const handleChange = useHandleInput({ unitId, fieldType });

  return (
    <div className="flex flex-col w-full relative">
      <input
        type="text"
        name={name}
        value={value || ""}
        onChange={handleChange}
        autoComplete="off"
        className="border-b-2 border-accent-bg focus:outline-none text-[16px] mb-2 focus:border-accent"
      />

      {fieldType === "definition" && (
        <div
          onClick={() => {
            setUnitDefinition(proposedOption);
            setProposedOption("");
          }}
          className={`bg-bg-accent-2 py-0.5 px-2 rounded-default absolute text-fg top-0 -translate-y-[9px] z-50 transition-all cursor-pointer ${
            !isDefinitionSet(unitId) && proposedOption
              ? "opacity-40 hover:opacity-100 pointer-events-auto hover:text-text-2 hover:scale-90"
              : "pointer-events-none opacity-0"
          }`}
        >
          {proposedOption}
        </div>
      )}

      <label className="text-[12px] uppercase font-bold mb-[38px]">
        {label}
      </label>
    </div>
  );
});
