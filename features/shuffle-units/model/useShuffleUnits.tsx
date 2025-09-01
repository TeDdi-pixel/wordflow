import { TypeUnit } from "@/shared/model/types/unit";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

export const useShuffleUnits = (units: TypeUnit[]) => {
  const termNumber = usePracticeStore((state) => state.termNumber);
  const setCurrentUnitId = usePracticeStore((state) => state.setCurrentUnitId);
  const isShuffled = usePracticeStore((state) => state.isShuffled);
  const resetIsShuffled = usePracticeStore((state) => state.resetIsShuffled);
  const path = usePathname();

  const shuffledUnits = useMemo(() => {
    if (!isShuffled) return units;

    return [...units]
      .map((unit) => ({ unit, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ unit }) => unit);
  }, [units, isShuffled]);

  useEffect(() => {
    if (!units.length) return;

    let unitId;
    if (!isShuffled) {
      unitId = units[termNumber]?._id;
    } else if (shuffledUnits.length > 0) {
      unitId = shuffledUnits[termNumber]?._id;
    } else {
      return;
    }

    setCurrentUnitId(unitId);
  }, [termNumber, units, isShuffled, shuffledUnits, setCurrentUnitId]);

  const currentUnit = shuffledUnits[termNumber];

  useEffect(() => {
    setCurrentUnitId(currentUnit?._id);
  }, [currentUnit, setCurrentUnitId]);

  useEffect(() => {
    resetIsShuffled();
  }, [path]);

  return currentUnit;
};
