"use client";

import IconButton from "@/shared/ui/buttons/IconButton";
import TipIcon from "@/shared/icons/unit/TipIcon";
import TipActiveIcon from "@/shared/icons/unit/TipActiveIcon";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { TypeUnit } from "@/shared/model/types/unit";
import { showError } from "@/shared/lib/toasts";

export const HintButton = ({ units }: { units: TypeUnit[] }) => {
  const setIsHintOpen = usePracticeStore((state) => state.setIsHintOpen);
  const isHintOpen = usePracticeStore((state) => state.isHintOpen);
  const currentUnitId = usePracticeStore((state) => state.currentUnitId);

  const meanings = units?.find((unit) => unit._id === currentUnitId)?.meanings;
  const isHintExists = meanings && meanings.length > 0;

  const handleClick = () => {
    if (!meanings || meanings.length === 0) {
      showError("Нажаль цей термін немає підказки");
      return;
    }
    setIsHintOpen(!isHintOpen);
  };

  return (
    isHintExists && (
      <IconButton
        handleClick={handleClick}
        icon={isHintOpen ? <TipActiveIcon /> : <TipIcon />}
      />
    )
  );
};
