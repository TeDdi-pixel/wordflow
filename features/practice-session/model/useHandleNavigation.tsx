import { useEffect, useCallback, useMemo } from "react";
import { useUnitPracticeStore } from "@/store/useUnitPracticeStore";
import { TypeUnit } from "@/shared/model/types/unit";

type Params = {
  units: TypeUnit[];
  unitSetId: string;
};

export const useHandleNavigation = ({ units, unitSetId }: Params) => {
  const termNumber = useUnitPracticeStore((state) => state.termNumber);
  const setUnitSetId = useUnitPracticeStore((state) => state.setUnitSetId);
  const setCurrentUnitId = useUnitPracticeStore(
    (state) => state.setCurrentUnitId
  );
  const setNewAnswer = useUnitPracticeStore((state) => state.setNewAnswer);
  const setPrevTerm = useUnitPracticeStore((state) => state.setPrevTerm);
  const setNextTerm = useUnitPracticeStore((state) => state.setNextTerm);
  const resetTermNumber = useUnitPracticeStore(
    (state) => state.resetTermNumber
  );
  const resetCheckStatus = useUnitPracticeStore(
    (state) => state.resetCheckStatus
  );

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
