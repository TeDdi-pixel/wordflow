"use client";

import { useSavedUnitsStore } from "@/shared/store/useSavedUnitsStore";
import { PiBookmarksSimpleFill } from "react-icons/pi";

export const SavedUnitsCount = ({
  unitSetId,
  initialSavedUnitCount,
}: {
  initialSavedUnitCount: number;
  unitSetId: string;
}) => {
  const savedUnitsCount = useSavedUnitsStore(
    (state) =>
      state.savedUnitsCounts.find((item) => item.unitSetId === unitSetId)
        ?.count || initialSavedUnitCount
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
