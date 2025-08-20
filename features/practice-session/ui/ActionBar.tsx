import {
  LikeButton,
  BookmarkButton,
  SoundButton,
  TipButton,
} from "@/entities/unit-set-practice";

export const ActionBar = async () => {
  return (
    <div className="flex justify-between w-full">
      <TipButton />

      <div className="flex gap-4">
        <SoundButton />

        <LikeButton />

        <BookmarkButton />
      </div>
    </div>
  );
};
