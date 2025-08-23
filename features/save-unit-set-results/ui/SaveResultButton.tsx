"use client";

import { useSaveUnitSetResult } from "@/features/save-unit-set-results/model/useSaveUnitSetResult";
import { FaClipboardQuestion } from "react-icons/fa6";
import { RiUploadCloud2Fill } from "react-icons/ri";

export const SaveResultButton = () => {
  const { saveResults } = useSaveUnitSetResult();

  return (
    <button
      type="button"
      onClick={saveResults}
      className="relative group cursor-pointer bg-fg hover:bg-bg-accent w-full h-[44px] py-[16px] px-[24px] rounded-default flex justify-center items-center overflow-hidden unit-button-shadow transition-all"
    >
      <div className="z-10 flex items-center justify-center gap-2 transition-all group-hover:text-accent">
        <div className="w-[24px] h-[24px] flex">
          <span className="transition-all translate-x-0 group-hover:translate-x-[24px] opacity-100 group-hover:opacity-0">
            <FaClipboardQuestion className="w-[24px] h-[24px]" />
          </span>

          <span className="transition-all translate-x-0 group-hover:-translate-x-[24px] opacity-0 group-hover:opacity-100">
            <RiUploadCloud2Fill className="w-[24px] h-[24px] text-accent" />
          </span>
        </div>

        <span>Перевірити</span>
      </div>
    </button>
  );
};
