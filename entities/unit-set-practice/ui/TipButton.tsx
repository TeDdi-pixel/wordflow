"use client";

import IconButton from "@/shared/components/buttons/IconButton";
import TipIcon from "@/shared/icons/unit/TipIcon";
import { usePracticeStore } from "@/store/usePracticeStore";

export const TipButton = () => {
  const toggleFeature = usePracticeStore((state) => state.toggleFeature);

  const handleClick = () => {
    toggleFeature("tip");
  };
  return <IconButton icon={<TipIcon />} handleClick={handleClick} />;
};
