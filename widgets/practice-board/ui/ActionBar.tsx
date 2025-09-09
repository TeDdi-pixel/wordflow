import { LikeButton } from "@/features/like-unit-set";
import { BookmarkButton } from "@/features/save-unit/ui/BookmarkButton";
import { HintButton } from "@/features/show-hint";
import { TypeUnit, TypeUnitSet } from "@/shared/model/types/unit";
import ChangeLangButton from "./ChangeLangButton";
import { Languages } from "./Languages";
import { ShuffleButton } from "@/features/shuffle-units";
import { SoundButton } from "@/features/play-pronunciation";

export const ActionBar = ({
  units,
  unitSet,
}: {
  units: TypeUnit[];
  unitSet: TypeUnitSet;
}) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center gap-4">
        <HintButton units={units} />

        <Languages unitSet={unitSet} />
      </div>

      <div className="flex gap-4">
        <ShuffleButton />

        <ChangeLangButton />

        <SoundButton units={units} unitSet={unitSet} />

        {!unitSet.randomSavedUnitsSet && <LikeButton />}

        {!unitSet.randomSavedUnitsSet && (
          <BookmarkButton unitSetId={unitSet._id} />
        )}
      </div>
    </div>
  );
};
