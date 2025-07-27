import BookmarkIcon from "@/shared/icons/unit/BookmarkIcon";
import SoundIcon from "@/shared/icons/unit/SoundIcon";
import StarIcon from "@/shared/icons/unit/StarIcon";
import TipIcon from "@/shared/icons/unit/TipIcon";

export const UnitHeader = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-2">
        <TipIcon /> <span>Показати підказку</span>
      </div>
      <div className="flex gap-4">
        <SoundIcon />
        <StarIcon />
        <BookmarkIcon />
      </div>
    </div>
  );
};
