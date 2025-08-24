import LikeIcon from "@/shared/icons/unit/LikeIcon";

export const LikesCount = ({ likesCount }: { likesCount: number }) => {
  return (
    likesCount > 0 && (
      <div className="flex gap-1 items-center">
        <LikeIcon />

        <span className="group-hover:text-white transition-colors duration-300">
          {likesCount}
        </span>
      </div>
    )
  );
};
