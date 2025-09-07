"use client";

import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { PiBookmarksSimpleFill } from "react-icons/pi";

export const SavedUnitCount = ({
  initialSavedUnitCount,
}: {
  initialSavedUnitCount: number;
}) => {
  const savedUnitsCount = usePracticeStore(
    (state) => state.savedUnitsCount || initialSavedUnitCount
  );

  return (
    savedUnitsCount > 0 && (
      <div className="flex items-center gap-1">
        <PiBookmarksSimpleFill className="text-[24px]" />

        <span>{savedUnitsCount}</span>
      </div>
    )
  );
};
