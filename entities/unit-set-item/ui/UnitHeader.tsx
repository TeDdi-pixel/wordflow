"use client";

import { useTempStore } from "@/store/useTempStore";
import DragIcon from "@/shared/icons/unit/DragIcon";
import { memo } from "react";
import { LuTrash2 } from "react-icons/lu";

type Props = {
  termNumber: number;
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  attributes?: Record<string, any>;
  listeners?: Record<string, any>;
  unitId: string;
};

export const UnitHeader = memo(
  ({
    termNumber,
    unitId,
    setActivatorNodeRef,
    attributes,
    listeners,
  }: Props) => {
    const removeUnit = useTempStore((state) => state.removeUnit);
    const setCurrentUnitId = useTempStore((state) => state.setCurrentUnitId);

    const handleClick = () => {
      setCurrentUnitId(unitId);
      removeUnit();
    };

    return (
      <div className="relative w-full flex items-center justify-between mb-2">
        #{termNumber}
        <div className="flex items-center gap-4">
          <span
            ref={setActivatorNodeRef}
            {...attributes}
            {...listeners}
            onMouseDown={() => setCurrentUnitId(unitId)}
            onMouseUp={() => setCurrentUnitId("")}
            suppressHydrationWarning
            className="text-accent-text cursor-grab active:cursor-grabbing hover:text-text-2 transition-colors ease-out duration-150"
          >
            <DragIcon />
          </span>
          <button onClick={handleClick} type="button">
            <LuTrash2 className="text-accent-text text-[18px] cursor-pointer hover:text-text-2 transition-colors ease-out duration-150" />
          </button>
        </div>
      </div>
    );
  }
);
