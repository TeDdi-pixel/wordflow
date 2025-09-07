import { deleteUnit } from "@/features/delete-saved-unit/api/deleteUnit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { useEffect, useMemo, useState } from "react";
import { saveUnit } from "../api/saveUnit";
import { getSavedUnitsIds } from "../api/getSavedUnitsIds";

const useBookmark = (unitSetId: string, unitId?: string) => {
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [hasChecked, setHasChecked] = useState(false);

  const setSavedUnitsCount = usePracticeStore(
    (state) => state.setSavedUnitsCount
  );

  const currentUnitId = usePracticeStore(
    (state) => state.currentUnitId ?? unitId
  );
  const handleSave = async () => {
    if (!currentUnitId) return;

    let res = null;

    if (savedWords.includes(currentUnitId)) {
      res = await deleteUnit(unitSetId, currentUnitId);
    } else {
      res = await saveUnit(unitSetId, currentUnitId);
    }

    if (!res) return;

    if (res.ok) {
      setSavedUnitsCount(res.newSavedUnitsCount);
      setSavedWords((prev) =>
        savedWords.includes(currentUnitId)
          ? prev.filter((wordId) => wordId !== currentUnitId)
          : [...prev, currentUnitId]
      );
    }
  };

  useEffect(() => {
    if (!currentUnitId || hasChecked) return;

    (async () => {
      const res = await getSavedUnitsIds(unitSetId);

      if (res.ok) setSavedWords(res.savedUnitsIds);
      setHasChecked(true);
    })();
  }, [currentUnitId, hasChecked]);

  const isSaved = useMemo(() => {
    return currentUnitId && savedWords.includes(currentUnitId);
  }, [currentUnitId, savedWords]);

  return { isSaved, handleSave };
};

export default useBookmark;
