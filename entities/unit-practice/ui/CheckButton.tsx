"use client";

import { useTermsHandling } from "@/features/practice-session/model/useTermsHandling";
import { useCheckAnswer } from "@/shared/hooks/useCheckAnswer";
import { TypeUnit } from "@/shared/model/types/unit";
import { FaClipboardQuestion } from "react-icons/fa6";
import { RiUploadCloud2Fill } from "react-icons/ri";

const CheckButton = ({ units }: { units: TypeUnit[] }) => {
  const { checkAnswer } = useCheckAnswer(units);

  const { isDisabled, saveResults } = useTermsHandling({
    checkAnswer,
  });

  return (
    <button
      type="button"
      onClick={saveResults}
      className="relative group cursor-pointer bg-foreground hover:bg-background-accent w-full h-[44px] py-[16px] px-[24px] rounded-default flex justify-center items-center overflow-hidden unit-button-shadow transition-all duration-150 ease-out"
    >
      <div className="z-10 flex items-center justify-center gap-2 transition-all duration-150 ease-out group-hover:text-accent">
        <div className="w-[24px] h-[24px] flex">
          {isDisabled ? (
            <div className="w-[24px] h-[24px] border-4 border-t-transparent border-accent rounded-full animate-spin" />
          ) : (
            <>
              <span className="transition-all duration-150 ease-out translate-x-0 group-hover:translate-x-[24px] opacity-100 group-hover:opacity-0">
                <FaClipboardQuestion className="w-[24px] h-[24px]" />
              </span>
              <span className="transition-all duration-150 ease-out translate-x-0 group-hover:-translate-x-[24px] opacity-0 group-hover:opacity-100">
                <RiUploadCloud2Fill className="w-[24px] h-[24px] text-accent" />
              </span>
            </>
          )}
        </div>
        <span>Перевірити</span>
      </div>
    </button>
  );
};

export default CheckButton;
