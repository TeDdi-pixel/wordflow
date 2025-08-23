import { LikeButton } from "@/features/like-unit-set";
import { BookmarkButton } from "@/features/save-unit-term/ui/BookmarkButton";
import { HintButton } from "@/features/show-hint";
import { SoundButton } from "@/shared/ui/buttons/SoundButton";
import { TypeUnit } from "@/shared/model/types/unit";

export const ActionBar = ({ units }: { units: TypeUnit[] }) => {
  return (
    <div className="flex justify-between w-full">
      <HintButton />

      <div className="flex gap-4">
        <SoundButton units={units} />

        <LikeButton />

        <BookmarkButton />
      </div>
    </div>
  );
};
