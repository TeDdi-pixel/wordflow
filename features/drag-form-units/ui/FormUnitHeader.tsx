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
        <span>#{termNumber}</span>
        <div className="flex items-center gap-4">
          <span
            ref={setActivatorNodeRef}
            {...attributes}
            {...listeners}
            onMouseDown={() => setCurrentUnitId(unitId)}
            onMouseUp={() => setCurrentUnitId("")}
            suppressHydrationWarning
            className="transition-colors text-text cursor-grab active:cursor-grabbing hover:text-accent w-[24px] h-[24px]"
          >
            <MdDragHandle className="w-[24px] h-[24px]" />
          </span>

          <button onClick={handleClick} type="button">
            <LuTrash2 className="text-text w-[20px] h-[20px] cursor-pointer hover:text-error transition-colors" />
          </button>
        </div>
      </div>
    );
  }
);
