"use client";

import useHandleInput from "@/features/create-unit-set/model/useHandleInput";
import { useTempStore } from "@/shared/store/useTempStore";
import { TranslatedHint } from "./TranslatedHint";

type Props = {
  name: string;
  label: string;
  unitId: string;
  fieldType: "term" | "definition";
};

export const UnitInput = ({ unitId, name, label, fieldType }: Props) => {
  const isDefinitionSet = useTempStore((state) => state.isDefinitionSet);
  const setUnitDefinition = useTempStore((state) => state.setUnitDefinition);
  const setProposedOption = useTempStore((state) => state.setProposedOption);
  const value = useTempStore((state) => {
    const item = state.units.find((unit) => unit._id === unitId);
    return fieldType === "term" ? item?.term : item?.definition;
  });

  const proposedOption = useTempStore((state) =>
    state.getProposedOption(unitId)
  );

  const handleHintClick = () => {
    setUnitDefinition(unitId, proposedOption);
    setProposedOption(unitId, "");
  };

  const handleChange = useHandleInput({ unitId, fieldType });

  const handleInputFocus = () => setProposedOption(unitId, "");

  const isHintVisible =
    fieldType === "definition" && !!proposedOption && !isDefinitionSet(unitId);

  return (
    <div className="flex flex-col w-full relative">
      <input
        type="text"
        name={name}
        value={value ?? ""}
        onChange={handleChange}
        onFocus={handleInputFocus}
        autoComplete="off"
        className="border-b-2 border-accent-bg focus:outline-none text-[16px] mb-2 focus:border-accent"
      />

      <TranslatedHint
        handleHintClick={handleHintClick}
        isHintVisible={isHintVisible}
        hintText={proposedOption}
      />

      <label className="text-[12px] uppercase font-bold mb-[38px]">
        {label}
      </label>
    </div>
  );
};
