import LanguageIcon from "@/shared/icons/unit/LanguageIcon";
import { Language } from "@/shared/model/types/temp-store";
import React from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";

const Languages = ({
  source,
  target,
}: {
  source: Language;
  target: Language;
}) => {
  return (
    <div className="flex items-center gap-2">
      <LanguageIcon />

      <div className="flex gap-1 items-center">
        <span>{source}</span>

        <CgArrowsExchangeAlt className="text-[20px]" />

        <span>{target}</span>
      </div>
    </div>
  );
};

export default Languages;
