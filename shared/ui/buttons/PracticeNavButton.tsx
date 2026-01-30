"use client";

import ArrowIcon from "../../icons/unit/ArrowIcon";

type Props = {
  side?: "left" | "right";
  onClick: () => void;
  isDisabled: boolean;
};

const PracticeNavButton = ({ side = "right", onClick, isDisabled }: Props) => {
  return (
    <button
      disabled={isDisabled}
      type="button"
      onClick={onClick}
      className={`group w-[44px] h-[44px] bg-fg md:hover:bg-bg-accent hover:text-accent flex items-center justify-center rounded-default transition-all ease-in-out ${
        side === "left" ? "rotate-180" : ""
      } ${
        isDisabled
          ? "bg-transparent hover:bg-transparent unit-button-shadow-disabled cursor-not-allowed"
          : "unit-button-shadow cursor-pointer "
      }`}
    >
      <ArrowIcon />
    </button>
  );
};

export default PracticeNavButton;
