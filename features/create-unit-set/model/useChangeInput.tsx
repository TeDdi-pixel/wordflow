"use client";

import { useTempStore } from "@/store/useTempStore";
import { ChangeEvent, useCallback } from "react";

type Props = {
  unitId: string;
  fieldType: "term" | "definition";
};

const useChangeInput = ({ unitId, fieldType }: Props) => {
  const setCurrentUnitId = useTempStore((state) => state.setCurrentUnitId);
  const setUnitTerm = useTempStore((state) => state.setUnitTerm);
  const setUnitDefinition = useTempStore((state) => state.setUnitDefinition);

  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setCurrentUnitId(unitId);

      if (fieldType === "term") {
        setUnitTerm(value);
      } else {
        setUnitDefinition(value);
      }
    },
    [unitId, fieldType, setUnitTerm, setUnitDefinition, setCurrentUnitId]
  );

  return handleChange;
};

export default useChangeInput;
