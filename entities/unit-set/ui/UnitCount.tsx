import { PiBookmarksSimpleFill } from "react-icons/pi";

export const SavedUnitCount = ({
  savedUnitCount,
}: {
  savedUnitCount: number;
}) => {
  return (
    savedUnitCount > 0 && (
      <div className="flex items-center gap-1">
        <PiBookmarksSimpleFill className="text-[24px]" />

        <span className="max-w-[25px] truncate">{savedUnitCount}</span>
      </div>
    )
  );
};
