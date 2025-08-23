"use client";

import useHandleInput from "@/features/create-unit-set/model/useHandleInput";
import { useTempStore } from "@/shared/store/useTempStore";

type Props = {
  name: string;
  label: string;
  unitId: string;
  fieldType: "term" | "definition";
};

export const UnitInput = ({ unitId, name, label, fieldType }: Props) => {
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
        value={value ?? ""}
        onChange={handleChange}
        autoComplete="off"
        className="border-b-2 border-accent-bg focus:outline-none text-[16px] mb-2 focus:border-accent"
      />

      <div
        onClick={() => {
          setUnitDefinition(unitId, proposedOption);
          setProposedOption(unitId, "");
        }}
        className={`min-w-[45px] h-[28px] bg-bg-accent-2 py-0.5 px-2 rounded-default absolute text-fg z-50 cursor-pointer hover:text-text-2 transition-all ${
          fieldType === "definition" &&
          proposedOption &&
          !isDefinitionSet(unitId)
            ? "hover:opacity-100 opacity-60 pointer-events-auto scale-100 top-0 -translate-y-[9px]"
            : "opacity-0 pointer-events-none scale-0 translate-y-0"
        }`}
      >
        {proposedOption}
      </div>

      <label className="text-[12px] uppercase font-bold mb-[38px]">
        {label}
      </label>
    </div>
  );
};
