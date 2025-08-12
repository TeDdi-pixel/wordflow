"use client";

import { useTempStore } from "@/store/useTempStore";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { UnitSetItem } from "@/entities/unit-set-item";
import { useCallback, useMemo } from "react";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

export const UnitList = () => {
  const items = useTempStore((state) => state.items);
  const reorderUnits = useTempStore((state) => state.reorderUnits);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  const itemIds = useMemo(() => items.map((item) => item.itemNumber), [items]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = items.findIndex(
          (item) => item.itemNumber === active.id
        );
        const newIndex = items.findIndex((item) => item.itemNumber === over.id);

        if (oldIndex !== -1 && newIndex !== -1) {
          requestAnimationFrame(() => {
            reorderUnits(oldIndex, newIndex);
          });
        }
      }
    },
    [items, reorderUnits]
  );

  return (
    <DndContext
      modifiers={[restrictToVerticalAxis]}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
        {items.map((unit) => (
          <UnitSetItem key={unit.itemNumber} itemNumber={unit.itemNumber} />
        ))}
      </SortableContext>
    </DndContext>
  );
};
