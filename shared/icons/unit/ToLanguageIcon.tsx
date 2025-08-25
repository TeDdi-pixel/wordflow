"use client";

import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { FaArrowRightLong } from "react-icons/fa6";

const ToLanguageIcon = () => {
  const currentTermLang = usePracticeStore((state) => state.currentTermLang);

  return (
    <FaArrowRightLong
      className={`transition-transform text-[18px] ${
        currentTermLang === "source" ? "" : "rotate-180"
      }`}
    />
  );
};

export default ToLanguageIcon;
