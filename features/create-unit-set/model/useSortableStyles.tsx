import { TypeUnit } from "@/shared/model/types/unit";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const useSortableStyles = ({ unitId }: { unitId: string }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
    isDragging,
  } = useSortable({
    id: unitId,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    willChange: "transform, scale",
    transition: isDragging
      ? "scale 150ms cubic-bezier(0.25, 1, 0.5, 1)"
      : `${transition}, scale 150ms cubic-bezier(0.25, 1, 0.5, 1)`,
    zIndex: isDragging ? 1000 : "auto",
    scale: isDragging ? 1.05 : 1,
  };

  return {
    attributes,
    listeners,
    setNodeRef,
    style,
    setActivatorNodeRef,
    isDragging,
  };
};

export default useSortableStyles;
