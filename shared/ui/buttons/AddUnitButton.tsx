"use client";

import { TbCirclePlusFilled } from "react-icons/tb";

const AddUnitButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer absolute top-0 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden scale-100 md:scale-0 md:group-hover:scale-100 transition-transform duration-200 flex items-center justify-center"
    >
      <TbCirclePlusFilled className="w-full h-full text-[48px] bg-bg-accent-2 text-fg hover:bg-accent hover:text-text-2 transition-colors duration-200" />
    </button>
  );
};

export default AddUnitButton;
