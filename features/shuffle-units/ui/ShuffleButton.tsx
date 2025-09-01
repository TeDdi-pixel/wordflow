"use client";

import { usePracticeStore } from "@/shared/store/usePracticeStore";
import IconButton from "@/shared/ui/buttons/IconButton";
import toast from "react-hot-toast";
import { FaShuffle } from "react-icons/fa6";

export const ShuffleButton = () => {
  const switchIsShuffled = usePracticeStore((state) => state.switchIsShuffled);
  const isShuffled = usePracticeStore((state) => state.isShuffled);

  return (
    <IconButton
      icon={
        <FaShuffle
          className={`text-[20px] ${isShuffled ? "text-success" : ""}`}
        />
      }
      handleClick={() => {
        switchIsShuffled();
        toast.success(
          isShuffled
            ? "Режим перемішування деактивований"
            : "Режим перемішування активований"
        );
      }}
    />
  );
};
