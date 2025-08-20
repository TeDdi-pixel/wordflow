"use client";

import IconButton from "@/shared/components/buttons/IconButton";
import SoundIcon from "@/shared/icons/unit/SoundIcon";
import { usePracticeStore } from "@/store/usePracticeStore";

export const SoundButton = () => {
  const toggleFeature = usePracticeStore((state) => state.toggleFeature);

  const handleClick = () => {
    toggleFeature("sound");
  };
  return <IconButton icon={<SoundIcon />} handleClick={handleClick} />;
};
