"use client";

import { useSavedUnitsStore } from "@/shared/store/useSavedUnitsStore";
import { memo } from "react";

const RandomUnitsCounterInput = memo(({ label }: { label: string }) => {
  const randomUnitsCounter = useSavedUnitsStore(
    (state) => state.randomUnitsCounter
  );
  const setRandomUnitsCounter = useSavedUnitsStore(
    (state) => state.setRandomUnitsCounter
  );

  return (
    <div className="flex items-center gap-2.5">
      <label htmlFor="counter">{label}</label>

      <input
        id="counter"
        type="number"
        min={1}
        max={30}
        step={1}
        value={randomUnitsCounter}
        placeholder="30"
        className="border-2 rounded-default px-4 py-1.5 text-accent bg-fg transition-colors focus:border-accent border-transparent focus:outline-none"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRandomUnitsCounter(Number(e.target.value))
        }
      />
    </div>
  );
});

export default RandomUnitsCounterInput;
