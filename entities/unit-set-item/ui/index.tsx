"use client";

import { UnitHeader } from "./UnitHeader";
import { memo } from "react";
import AddUnitButton from "@/shared/components/buttons/AddUnitButton";
import { UnitInput } from "./UnitInput";
import useSortableStyles from "../../../features/create-unit-set/model/useSortableStyles";
import { useTempStore } from "@/store/useTempStore";
import toast from "react-hot-toast";
import { MAX_ITEMS_LENGTH } from "@/shared/model/constants/units";

export const Unit = memo(
  ({ unitId, termNumber }: { unitId: string; termNumber: number }) => {
    const {
      isDragging,
      setNodeRef,
      style,
      listeners,
      attributes,
      setActivatorNodeRef,
    } = useSortableStyles({ unitId });
    const setCurrentUnitId = useTempStore((state) => state.setCurrentUnitId);
    const addUnit = useTempStore((state) => state.addUnit);
    const getUnits = useTempStore((state) => state.getUnits);

    const handleClick = () => {
      if (getUnits().length >= MAX_ITEMS_LENGTH) {
        toast.error("Ви досягли максимальної кількості карток", {
          position: "top-center",
          id: crypto.randomUUID(),
        });
      }
      setCurrentUnitId(unitId);
      addUnit();
    };

    return (
      <div ref={setNodeRef} style={style} suppressHydrationWarning>
        <div
          className={`
            relative group w-full bg-foreground rounded-lg py-3 px-6
            ${isDragging ? "shadow-2xl" : "shadow-sm"}
          `}
        >
          <UnitHeader
            termNumber={termNumber}
            setActivatorNodeRef={setActivatorNodeRef}
            listeners={listeners}
            unitId={unitId}
            attributes={attributes}
          />

          <span className="flex w-full h-[2px] bg-accent-text absolute left-0"></span>

          <div className="flex w-full gap-8 mt-[46px] mb-40px font-normal">
            <UnitInput
              unitId={unitId}
              fieldType="term"
              name={`card[${termNumber - 1}].term`}
              label="Термін"
            />

            <UnitInput
              unitId={unitId}
              fieldType="definition"
              name={`card[${termNumber - 1}].definition`}
              label="Визначення"
            />
          </div>
        </div>

        <div className="relative h-[32px] flex items-center justify-center group">
          <AddUnitButton handleClick={handleClick} />
        </div>
      </div>
    );
  }
);
