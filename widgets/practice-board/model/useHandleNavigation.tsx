import { useEffect, useCallback, useMemo } from "react";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { TypeUnit } from "@/shared/model/types/unit";

type Params = {
  units: TypeUnit[];
  unitSetId: string;
};

export const useHandleNavigation = ({ units, unitSetId }: Params) => {
  const termNumber = usePracticeStore((state) => state.termNumber);
  const setUnitSetId = usePracticeStore((state) => state.setUnitSetId);
  const setCurrentUnitId = usePracticeStore((state) => state.setCurrentUnitId);
  const setNewAnswer = usePracticeStore((state) => state.setNewAnswer);
  const setPrevTerm = usePracticeStore((state) => state.setPrevTerm);
  const setNextTerm = usePracticeStore((state) => state.setNextTerm);
  const resetTermNumber = usePracticeStore((state) => state.resetTermNumber);
  const resetCheckStatus = usePracticeStore((state) => state.resetCheckStatus);

  useEffect(() => {
    setUnitSetId(unitSetId);
    resetTermNumber();
  }, [unitSetId, resetTermNumber, setUnitSetId]);

  const isDisabledLeft = useMemo(() => termNumber === 0, [termNumber]);
  const isDisabledRight = useMemo(
    () => termNumber >= units.length - 1,
    [termNumber, units.length]
  );
  const range = useMemo(
    () => `${termNumber + 1}/${units.length}`,
    [termNumber, units.length]
  );
  const currentUnitId = useMemo(
    () => units[termNumber]?._id,
    [termNumber, units]
  );

  const handleClick = useCallback(
    (direction: "left" | "right") => {
      resetCheckStatus();
      if (currentUnitId) setCurrentUnitId(currentUnitId);
      setNewAnswer("");

      if (direction === "left") {
        setPrevTerm();
      } else if (direction === "right") {
        setNextTerm(units.length);
      }
    },
    [
      currentUnitId,
      setCurrentUnitId,
      resetCheckStatus,
      setNewAnswer,
      setPrevTerm,
      setNextTerm,
      units.length,
    ]
  );

  return {
    isDisabledLeft,
    isDisabledRight,
    range,
    handleClick,
  };
};
