/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
"use client";

import { useTempStore } from "@/shared/store/useTempStore";
import { memo } from "react";
import { LuTrash2 } from "react-icons/lu";
import useRemoveFormUnit from "@/features/remove-form-unit/model/useRemoveFormUnit";
import { MdDragHandle } from "react-icons/md";

type Props = {
  termNumber: number;
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  attributes?: Record<string, any>;
  listeners?: Record<string, any>;
  unitId: string;
};

export const FormUnitHeader = memo(
  ({
    termNumber,
    unitId,
    setActivatorNodeRef,
    attributes,
    listeners,
  }: Props) => {
    const setCurrentUnitId = useTempStore((state) => state.setCurrentUnitId);

    const handleClick = useRemoveFormUnit(unitId);

    return (
      <div className="relative flex items-center justify-between w-full mb-2">
        <span className="text-[14px] md:text-[16px]">#{termNumber}</span>
        <div className="flex items-center gap-4">
          <span
            ref={setActivatorNodeRef}
            {...attributes}
            {...listeners}
            onMouseDown={() => setCurrentUnitId(unitId)}
            onMouseUp={() => setCurrentUnitId("")}
            suppressHydrationWarning
            className="touch-none transition-colors text-text cursor-grab active:cursor-grabbing hover:text-accent w-5 md:w-6 h-5 md:h-6"
          >
            <MdDragHandle className="w-5 md:w-6 h-5 md:h-6" />
          </span>

          <button onClick={handleClick} type="button">
            <LuTrash2 className="text-text w-4 md:w-5 h-4 md:h-5 cursor-pointer hover:text-error transition-colors" />
          </button>
        </div>
      </div>
    );
  },
);
