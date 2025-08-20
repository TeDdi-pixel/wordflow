"use client";

import IconButton from "@/shared/components/buttons/IconButton";
import BookmarkIcon from "@/shared/icons/unit/BookmarkIcon";
import { usePracticeStore } from "@/store/usePracticeStore";

export const BookmarkButton = () => {
  const toggleFeature = usePracticeStore((state) => state.toggleFeature);

  const handleClick = () => {
    toggleFeature("bookmark");
  };
  return <IconButton icon={<BookmarkIcon />} handleClick={handleClick} />;
};
