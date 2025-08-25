"use client";

import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useState } from "react";
import SwitchLanguageIcon from "@/shared/icons/unit/SwitchLanguageIcon";
import IconButton from "@/shared/ui/buttons/IconButton";

const ChangeLangButton = () => {
  const [lang, setLang] = useState<"source" | "target">("source");
  const setCurrentTermLang = usePracticeStore(
    (state) => state.setCurrentTermLang
  );

  return (
    <IconButton
      icon={<SwitchLanguageIcon />}
      handleClick={() => {
        setCurrentTermLang(lang === "source" ? "target" : "source");
        setLang(lang === "source" ? "target" : "source");
      }}
    />
  );
};

export default ChangeLangButton;
