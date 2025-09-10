import { deleteUnit } from "@/features/delete-saved-unit/api/deleteUnit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useEffect, useMemo, useState } from "react";
import { saveUnit } from "../api/saveUnit";
import { getSavedUnitsIds } from "../api/getSavedUnitsIds";
import { useSavedUnitsStore } from "@/shared/store/useSavedUnitsStore";

const useBookmark = (unitSetId: string, unitId?: string) => {
  const [hasChecked, setHasChecked] = useState(false);

  const currentUnitId = usePracticeStore(
    (state) => state.currentUnitId ?? unitId
  );
  const savedUnits = useSavedUnitsStore((state) => state.savedUnits);
  const setSavedUnitsCounts = useSavedUnitsStore(
    (state) => state.setSavedUnitsCounts
  );
  const removeSavedUnit = useSavedUnitsStore((state) => state.removeSavedUnit);
  const addSavedUnit = useSavedUnitsStore((state) => state.addSavedUnit);

  const handleSave = async () => {
    if (!currentUnitId) return;

    let res = null;

    if (savedUnits.includes(currentUnitId)) {
      res = await deleteUnit(unitSetId, currentUnitId);
    } else {
      res = await saveUnit(unitSetId, currentUnitId);
    }

    if (!res) return;

    if (res.ok) {
      setSavedUnitsCounts(unitSetId, res.newSavedUnitsCount);

      savedUnits.includes(currentUnitId)
        ? removeSavedUnit(currentUnitId)
        : addSavedUnit(currentUnitId);
    }
  };

  useEffect(() => {
    if (!currentUnitId || hasChecked) return;

    (async () => {
      const res = await getSavedUnitsIds(unitSetId);

      if (res.ok)
        res.savedUnitsIds.map((unitId: string) => addSavedUnit(unitId));

      setHasChecked(true);
    })();
  }, [currentUnitId, hasChecked]);

  const isSaved = useMemo(() => {
    return currentUnitId && savedUnits.includes(currentUnitId);
  }, [currentUnitId, savedUnits]);

  return { isSaved, handleSave };
};

export default useBookmark;
