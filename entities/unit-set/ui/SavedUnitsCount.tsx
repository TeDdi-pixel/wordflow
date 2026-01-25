import { PiBookmarksSimpleFill } from "react-icons/pi";

export const SavedUnitsCount = ({
  savedUnitCount,
}: {
  savedUnitCount: number;
}) => {
  return (
    savedUnitCount > 0 && (
      <div className="flex items-center gap-1">
        <PiBookmarksSimpleFill className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]" />

        <span className="max-w-[25px] truncate text-[12px] md:text-[14px]">
          {savedUnitCount}
        </span>
      </div>
    )
  );
};
