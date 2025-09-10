"use client";

import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useSavedUnitsStore } from "@/shared/store/useSavedUnitsStore";
import { PiBookmarksSimpleFill } from "react-icons/pi";

export const SavedUnitsCount = ({
  unitSetId,
  initialSavedUnitCount,
}: {
  initialSavedUnitCount: number;
  unitSetId: string;
}) => {
  const currentUnitId = usePracticeStore((state) => state.currentUnitId);

  const savedCount = useSavedUnitsStore(
    (state) =>
      state.savedUnitsCounts.find((item) => item.unitSetId === unitSetId)
        ?.count || initialSavedUnitCount
  );
  const savedUnits = useSavedUnitsStore((state) => state.savedUnits);

  return (
    savedCount > 0 && (
      <div className="flex items-center gap-1">
        <PiBookmarksSimpleFill className="text-[24px]" />

        <span>{currentUnitId ? savedCount : savedUnits.length}</span>
      </div>
    )
  );
};
