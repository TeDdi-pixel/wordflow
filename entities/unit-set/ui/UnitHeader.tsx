import BookmarkIcon from "@/shared/icons/unit/BookmarkIcon";
import SoundIcon from "@/shared/icons/unit/SoundIcon";
import StarIcon from "@/shared/icons/unit/StarIcon";
import TipIcon from "@/shared/icons/unit/TipIcon";
import FeatureButton from "@/shared/ui/unit/FeatureButton";

export const UnitHeader = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-2 cursor-pointer">
        <FeatureButton featureName="tip" icon={<TipIcon />} />
        <span>Показати підказку</span>
      </div>
      <div className="flex gap-4">
        <FeatureButton featureName="sound" icon={<SoundIcon />} />
        <FeatureButton featureName="star" icon={<StarIcon />} />
        <FeatureButton featureName="bookmark" icon={<BookmarkIcon />} />
      </div>
    </div>
  );
};
