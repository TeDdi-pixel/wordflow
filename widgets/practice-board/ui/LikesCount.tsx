"use client";

import LikeIcon from "@/shared/icons/unit/LikeIcon";
import { useLikesStore } from "@/shared/store/useLikesStore";

export const LikesCount = ({
  initialLikesCount,
  unitSetId,
}: {
  initialLikesCount: number;
  unitSetId: string;
}) => {
  const likesCount = useLikesStore(
    (state) =>
      state.likesCounts.find((item) => item.unitSetId === unitSetId)?.count ||
      initialLikesCount
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
