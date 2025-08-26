import { LikeButton } from "@/features/like-unit-set";
import { BookmarkButton } from "@/features/save-unit-term/ui/BookmarkButton";
import { HintButton } from "@/features/show-hint";
import { SoundButton } from "@/shared/ui/buttons/SoundButton";
import { TypeUnit } from "@/shared/model/types/unit";
import { Language } from "@/shared/model/types/temp-store";
import ChangeLangButton from "./ChangeLangButton";
import { Languages } from "./Languages";

export const ActionBar = ({
  units,
  target,
  source,
}: {
  units: TypeUnit[];
  target: Language;
  source: Language;
}) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-4 items-center">
        <HintButton units={units} target={target} source={source} />

        <Languages target={target} source={source} />
      </div>

      <div className="flex gap-4">
        <ChangeLangButton />

        <SoundButton units={units} target={target} />

        <LikeButton />

        <BookmarkButton />
      </div>
    </div>
  );
};
