"use client";

import { FormUnitHeader } from "./FormUnitHeader";
import { memo } from "react";
import AddUnitButton from "@/shared/ui/buttons/AddUnitButton";
import useSortableStyles from "../model/useSortableStyles";
import { UnitInput } from "../../../widgets/forms/unit-set-form/ui/UnitInput";
import useAddFormUnit from "@/features/add-form-unit/model/useAddFormUnit";

export const FormUnit = memo(
  ({ unitId, termNumber }: { unitId: string; termNumber: number }) => {
    const {
      isDragging,
      setNodeRef,
      style,
      listeners,
      attributes,
      setActivatorNodeRef,
    } = useSortableStyles({ unitId });

    const handleClick = useAddFormUnit(unitId);

    return (
      <div ref={setNodeRef} style={style} suppressHydrationWarning>
        <div
          className={`
            relative group w-full bg-fg rounded-lg py-3 px-6
            ${isDragging ? "shadow-2xl" : "shadow-sm"}
          `}
        >
          <FormUnitHeader
            termNumber={termNumber}
            setActivatorNodeRef={setActivatorNodeRef}
            listeners={listeners}
            unitId={unitId}
            attributes={attributes}
          />

          <span className="flex w-full h-[2px] bg-text absolute left-0"></span>

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
