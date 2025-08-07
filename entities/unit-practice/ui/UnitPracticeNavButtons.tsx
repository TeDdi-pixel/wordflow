"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import PracticeNavButton from "@/shared/components/buttons/PracticeNavButton";
import { useUnitPracticeStore } from "@/store/useUnitPracticeStore";
import { useEffect, useMemo } from "react";

export const UnitPracticeNavButtons = ({ units }: { units: TypeUnit[] }) => {
  const termNumber = useUnitPracticeStore((state) => state.termNumber);
  const setPrevTerm = useUnitPracticeStore((state) => state.setPrevTerm);
  const setNextTerm = useUnitPracticeStore((state) => state.setNextTerm);
  const setUnitsLength = useUnitPracticeStore((state) => state.setUnitsLength);

  useEffect(() => {
    setUnitsLength(units.length);
  }, [units.length, setUnitsLength]);

  const isDisabledLeft = useMemo(() => {
    return termNumber === 0;
  }, [termNumber]);

  const isDisabledRight = useMemo(() => {
    return termNumber >= units.length - 1;
  }, [termNumber]);

  const range = termNumber + 1 + "/" + units.length;

  return (
    <div className="w-full flex max-w-[163px] gap-[8px] items-center ml-[4px]">
      <PracticeNavButton
        side="left"
        onClick={setPrevTerm}
        isDisabled={isDisabledLeft}
      />
      <div>{range}</div>
      <PracticeNavButton onClick={setNextTerm} isDisabled={isDisabledRight} />
    </div>
  );
};
