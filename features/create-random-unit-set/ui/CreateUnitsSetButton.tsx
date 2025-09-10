"use client";

import { useState } from "react";
import { createRandomUnitsSet } from "../api/createRandomUnitsSet";
import { IoCreate } from "react-icons/io5";
import { useSavedUnitsStore } from "@/shared/store/useSavedUnitsStore";

export const CreateUnitsSetButton = () => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const randomUnitsCounter = useSavedUnitsStore(
    (state) => state.randomUnitsCounter
  );
  const unSelectAll = useSavedUnitsStore((state) => state.unSelectAll);
  const selectedUnits = useSavedUnitsStore((state) => state.selectedUnits);

  const handleClick = async () => {
    setIsPending(true);

    const res = await createRandomUnitsSet(randomUnitsCounter, selectedUnits);

    if (res) {
      setIsPending(false);
      unSelectAll();
    }
  };

  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 transition-all cursor-pointer rounded-default ${
        isPending
          ? "bg-fg text-disabled"
          : "hover:scale-95 bg-bg-accent-2 text-text-2"
      }`}
      disabled={isPending}
      onClick={handleClick}
    >
      <span>Створити набір</span>

      <IoCreate className="text-[24px]" />
    </button>
  );
};
