"use client";

import ArrowIcon from "../../icons/unit/ArrowIcon";

type Props = {
  left?: boolean;
  onClick: () => void;
  isDisabled: boolean;
};

const UnitNavButton = ({ left, onClick, isDisabled }: Props) => {
  return (
    <button
      disabled={isDisabled}
      type="button"
      onClick={onClick}
      className={`group max-w-[44px] w-full h-[44px] bg-button hover:bg-button-accent flex items-center justify-center rounded-default transition-all ease-in-out duration-150 ${
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
