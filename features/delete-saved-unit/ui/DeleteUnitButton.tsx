"use client";

import { deleteUnit } from "@/features/delete-saved-unit/api/deleteUnit";
import { memo } from "react";
import { LuTrash2 } from "react-icons/lu";

type Props = {
  unitSetId: string;
  unitId: string;
  handleDeleteUnit: (unitId: string) => void;
};

export const DeleteUnitButton = memo(
  ({ unitSetId, unitId, handleDeleteUnit }: Props) => {
    return (
      <LuTrash2
        className="text-accent text-[22px] cursor-pointer hover:text-error transition-colors"
        onClick={async () => {
          await deleteUnit(unitSetId, unitId).then((res) => {
            if (res.ok) handleDeleteUnit(unitId);
          });
        }}
      />
    );
  }
);
