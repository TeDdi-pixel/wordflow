"use client";

import IconButton from "@/shared/ui/buttons/IconButton";
import TipIcon from "@/shared/icons/unit/TipIcon";
import TipActiveIcon from "@/shared/icons/unit/TipActiveIcon";
import { usePracticeStore } from "@/shared/store/usePracticeStore";

export const HintButton = ({}) => {
  const setIsHintOpen = usePracticeStore((state) => state.setIsHintOpen);
  const isHintOpen = usePracticeStore((state) => state.isHintOpen);

  return (
    <IconButton
      handleClick={() => setIsHintOpen(!isHintOpen)}
      icon={isHintOpen ? <TipActiveIcon /> : <TipIcon />}
    />
  );
};
