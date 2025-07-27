"use client";

import { useUnitStore } from "@/store/useUnitStore";
import ArrowIcon from "../../icons/unit/ArrowIcon";
import { useMemo } from "react";

type Props = {
  left?: boolean;
  onClick: () => void;
  isDisabled: boolean;
};

const UnitNavButton = ({ left, onClick, isDisabled }: Props) => {
  const termNumber = useUnitStore((state) => state.termNumber);
  const unitsLength = useUnitStore((state) => state.unitsLength);

  return (
    <button
      disabled={isDisabled}
      type="button"
      onClick={onClick}
      className={`group max-w-[44px] w-full h-[44px] bg-button-default hover:bg-active-nav-item flex items-center justify-center rounded-[8px] transition-all ease-in-out duration-150 ${
        left ? "rotate-180" : ""
      } ${
        isDisabled
          ? "bg-transparent hover:bg-transparent unit-button-shadow-disabled cursor-not-allowed"
          : "unit-button-shadow  cursor-pointer"
      }`}
    >
      <ArrowIcon isDisabled={isDisabled} />
    </button>
  );
};

export default UnitNavButton;
