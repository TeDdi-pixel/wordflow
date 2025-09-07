"use client";

import { deleteUnit } from "@/features/delete-saved-unit/api/deleteUnit";
import LoadingText from "@/shared/ui/LoadingText";
import { memo } from "react";
import toast from "react-hot-toast";
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
        onClick={() => {
          toast
            .promise(deleteUnit(unitSetId, unitId), {
              loading: <LoadingText text="Видаляємо..." />,
              success: "Термін був успішно видалений",
              error: "Сталася помилка при видаленні слова",
            })
            .then((res) => {
              if (res?.data?.ok) handleDeleteUnit(unitId);
            });
        }}
      />
    );
  }
);
