import {
  LikeButton,
  BookmarkButton,
  TipButton,
} from "@/entities/unit-set-practice";
import { SoundButton } from "@/shared/components/buttons/SoundButton";
import { TypeUnit } from "@/shared/model/types/unit";

export const ActionBar = ({ units }: { units: TypeUnit[] }) => {
  return (
    <div className="flex justify-between w-full">
      <TipButton />

      <div className="flex gap-4">
        <SoundButton units={units} />

        <LikeButton />

        <BookmarkButton />
      </div>
    </div>
  );
};
