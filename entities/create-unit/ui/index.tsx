"use client";

import { UnitInput } from "./UnitInput";
import { UnitHeader } from "./UnitHeader";
import { memo, useMemo } from "react";
import AddUnitButton from "@/features/create-unit-set/ui/AddUnitButton";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDndContext } from "@dnd-kit/core";

export const SortableUnit = memo(({ unitId }: { unitId: number }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({
    id: unitId,
    animateLayoutChanges: () => false,
  });
  const { active } = useDndContext();
  const isActive = active?.id === unitId;

  const style = useMemo(() => {
    if (!transform) {
      return {
        zIndex: isActive ? 1000 : 0,
        transform: isActive ? "scale(1.05)" : undefined,
        transition: isActive ? "none" : undefined,
      };
    }

    const transformWithScale = `${CSS.Transform.toString(transform)} scale(${
      isActive ? 1.05 : 1
    })`;

    return {
      transform: transformWithScale,
      transition: isActive ? "none" : transition,
      zIndex: isActive ? 1000 : 0,
    };
  }, [transform, transition, isActive]);

  const dragClassName = useMemo(
    () =>
      isActive
        ? "transition-transform duration-0"
        : "transition-all duration-200",
    [isActive]
  );

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={dragClassName}
      suppressHydrationWarning
    >
      <div className="relative group w-full bg-foreground rounded-lg py-3 px-6">
        <UnitHeader
          unitId={unitId}
          setActivatorNodeRef={setActivatorNodeRef}
          listeners={listeners}
          attributes={attributes}
        />
        <span className="flex w-full h-[2px] bg-accent-text absolute left-0"></span>
        <div className="flex w-full gap-8 mt-[46px] mb-40px font-normal">
          <UnitInput
            unitId={unitId}
            fieldType="term"
            name={`card[${unitId - 1}].term`}
            label="Термін"
          />
          <UnitInput
            unitId={unitId}
            fieldType="definition"
            name={`card[${unitId - 1}].definition`}
            label="Визначення"
          />
        </div>
      </div>
      <div className="relative h-[32px] flex items-center justify-center group">
        <AddUnitButton unitId={unitId} />
      </div>
    </div>
  );
});
