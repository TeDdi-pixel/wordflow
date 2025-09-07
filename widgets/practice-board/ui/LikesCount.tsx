"use client";

import LikeIcon from "@/shared/icons/unit/LikeIcon";
import { usePracticeStore } from "@/shared/store/usePracticeStore";

export const LikesCount = ({
  initialLikesCount,
}: {
  initialLikesCount: number;
}) => {
  const likesCount = usePracticeStore(
    (state) => state.likesCount || initialLikesCount
  );

  return (
    likesCount > 0 && (
      <div className="flex items-center gap-1">
        <LikeIcon />

        <span>{likesCount}</span>
      </div>
    )
  );
};
