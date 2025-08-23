"use client";

import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { TypeUnit } from "@/shared/model/types/unit";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import useDragLogic from "../model/useDrag";
import { memo } from "react";
import { useTempStore } from "@/store/useTempStore";
import { FormUnit } from "./FormUnit";

export const FormUnitList = memo(() => {
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
          <FormUnit
            key={unit._id}
            unitId={unit._id}
            termNumber={unit.termNumber}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
});
