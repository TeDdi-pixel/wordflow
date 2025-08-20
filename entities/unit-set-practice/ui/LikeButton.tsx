"use client";

import IconButton from "@/shared/components/buttons/IconButton";
import LikeIcon from "@/shared/icons/unit/LikePlusIcon";
import LikeIconActive from "@/shared/icons/unit/LikeActiveIcon";
import useLike from "@/features/practice-session/model/useLike";

export const LikeButton = () => {
  const { handleClick, liked, isReady, isLoading } = useLike();
  return (
    <IconButton
      icon={liked ? <LikeIconActive /> : <LikeIcon />}
      handleClick={handleClick}
      disabled={!isReady || isLoading}
    />
  );
};
