import LikeIcon from "@/shared/icons/unit/LikeIcon";

export const LikesCount = ({ likesCount }: { likesCount: number }) => {
  return (
    likesCount > 0 && (
      <div className="flex items-center gap-1">
        <LikeIcon />

        <span>{likesCount}</span>
      </div>
    )
  );
};
