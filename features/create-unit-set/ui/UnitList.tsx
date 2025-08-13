"use client";

import { Unit } from "@/entities/unit-set-item";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { TypeUnit } from "@/shared/model/types/unit";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import useDragLogic from "../model/useDragLogic";
import { memo } from "react";
import { useTempStore } from "@/store/useTempStore";

export const UnitList = memo(() => {
  const units = useTempStore((state) => state.units);
  const { sensors, handleDragEnd, itemIds } = useDragLogic();

  return (
    <DndContext
      modifiers={[restrictToVerticalAxis]}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
        {units.map((unit: TypeUnit) => (
          <Unit key={unit._id} unitId={unit._id} termNumber={unit.termNumber} />
        ))}
      </SortableContext>
    </DndContext>
  );
});
