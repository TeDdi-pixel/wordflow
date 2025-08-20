"use client";

import { TbCirclePlusFilled } from "react-icons/tb";

const AddUnitButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer absolute top-0 rounded-full overflow-hidden w-[48px] h-[48px] -translate-y-1/2 z-[10] scale-0 group-hover:scale-100 transition-all duration-200 ease-out flex items-center justify-center"
    >
      <TbCirclePlusFilled className="w-full h-full text-[48px] bg-background-accent-2 hover:bg-accent text-foreground hover:text-text-2 transition-all duration-200 ease-out" />
    </button>
  );
};

export default AddUnitButton;
