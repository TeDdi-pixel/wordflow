import { ReactNode } from "react";

export const AdditionalEntrance = ({ icon }: { icon: ReactNode }) => {
  return (
    <button
      type="button"
      className="cursor-pointer w-805:max-w-[128px] h-[36px] w-full text-accent-text text-[18px] py-2 bg-button flex items-center justify-center rounded-[8px] hover:bg-button-accent hover:text-background transition-colors duration-150"
    >
      {icon}
    </button>
  );
};
