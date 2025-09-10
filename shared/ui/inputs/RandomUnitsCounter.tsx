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
  const selectedUnitsCount = useSavedUnitsStore(
    (state) => state.selectedUnits.filter((doc) => doc.checked).length
  );

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="counter">
        {selectedUnitsCount > 0 ? `Кількість обраних термінів:` : label}
      </label>

      {selectedUnitsCount > 0 ? (
        <div
          id="counter"
          className="flex items-center justify-center px-2 py-1 rounded-default text-text-2 bg-bg-accent-2"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRandomUnitsCounter(Number(e.target.value))
          }
        >
          {selectedUnitsCount}/30
        </div>
      ) : (
        <input
          id="counter"
          type="number"
          min={1}
          max={30}
          step={1}
          value={
            selectedUnitsCount > 0 ? selectedUnitsCount : randomUnitsCounter
          }
          placeholder="30"
          className="px-2 py-1 h-[32px] text-center transition-colors border-2 border-transparent rounded-default hover:border-bg-accent text-text-2 bg-bg-accent-2 focus:border-bg-accent focus:outline-none"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRandomUnitsCounter(Number(e.target.value))
          }
        />
      )}
    </div>
  );
});

export default RandomUnitsCounterInput;
