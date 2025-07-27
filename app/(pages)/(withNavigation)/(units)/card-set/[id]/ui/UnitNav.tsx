"use client";

import { TypeUnit } from "@/shared/model/types/unit";
import UnitNavButton from "@/shared/ui/unit/UnitNavButton";
import { useUnitStore } from "@/store/useUnitStore";
import React, { useEffect, useMemo } from "react";

const UnitNav = ({ units }: { units: TypeUnit[] }) => {
  const termNumber = useUnitStore((state) => state.termNumber);
  const setPrevTerm = useUnitStore((state) => state.setPrevTerm);
  const setNextTerm = useUnitStore((state) => state.setNextTerm);
  const setUnitsLength = useUnitStore((state) => state.setUnitsLength);

  useEffect(() => {
    setUnitsLength(units.length);
  }, [units.length, setUnitsLength]);

  const isDisabledLeft = useMemo(() => {
    return termNumber === 0;
  }, [termNumber]);

  const isDisabledRight = useMemo(() => {
    return termNumber >= units.length - 1;
  }, [termNumber]);

  return (
    <div className="w-full flex max-w-[163px] gap-[8px] items-center ml-[4px]">
      <UnitNavButton left onClick={setPrevTerm} isDisabled={isDisabledLeft} />
      <div>{termNumber + 1 + "/" + units.length}</div>
      <UnitNavButton onClick={setNextTerm} isDisabled={isDisabledRight} />
    </div>
  );
};

export default UnitNav;
