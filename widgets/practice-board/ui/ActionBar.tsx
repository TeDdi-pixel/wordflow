import { LikeButton } from "@/features/like-unit-set";
import { BookmarkButton } from "@/features/save-unit/ui/BookmarkButton";
import { HintButton } from "@/features/show-hint";
import { TypeUnit } from "@/shared/model/types/unit";
import { Language } from "@/shared/model/types/temp-store";
import ChangeLangButton from "./ChangeLangButton";
import { Languages } from "./Languages";
import { ShuffleButton } from "@/features/shuffle-units";
import { SoundButton } from "@/features/play-pronunciation";

export const ActionBar = ({
  units,
  target,
  source,
  unitSetId,
}: {
  units: TypeUnit[];
  target: Language;
  source: Language;
  unitSetId: string;
}) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center gap-4">
        <HintButton units={units} />

        <Languages target={target} source={source} />
      </div>

      <div className="flex gap-4">
        <ShuffleButton />

        <ChangeLangButton />

        <SoundButton units={units} target={target} />

        <LikeButton />

        <BookmarkButton unitSetId={unitSetId} />
      </div>
    </div>
  );
};
