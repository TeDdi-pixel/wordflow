import { useTempStore } from "@/store/useTempStore";
import {
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useCallback, useMemo } from "react";

const useDragLogic = () => {
  const units = useTempStore((state) => state.units);
  const reorderUnits = useTempStore((state) => state.reorderUnits);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  const itemIds = useMemo(() => units.map((item) => item._id), [units]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = units.findIndex((item) => item._id === active.id);
        const newIndex = units.findIndex((item) => item._id === over.id);

        if (oldIndex !== -1 && newIndex !== -1) {
          reorderUnits(oldIndex, newIndex);
        }
      }
    },
    [units, reorderUnits]
  );

  return {
    sensors,
    itemIds,
    handleDragEnd,
  };
};

export default useDragLogic;
