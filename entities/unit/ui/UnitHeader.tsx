import { useTempStore } from "@/features/create-unit-set/store";
import DragIcon from "@/shared/icons/unit/DragIcon";
import { memo } from "react";
import { LuTrash2 } from "react-icons/lu";

export const UnitHeader = memo(({ id }: { id: number }) => {
  const removeUnit = useTempStore((state) => state.removeUnit);
  const handleClick = () => {
    removeUnit(id);
  };
  return (
    <div className="w-full flex items-center justify-between mb-2">
      {id}
      <div className="flex items-center gap-4">
        <span className="text-accent-text cursor-">
          <DragIcon />
        </span>
        <button onClick={handleClick}>
          <LuTrash2 className="text-accent-text text-[18px] cursor-pointer" />
        </button>
      </div>
    </div>
  );
});
