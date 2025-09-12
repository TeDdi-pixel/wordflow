"use client";

import { usePathname, useRouter } from "next/navigation";
import { LuTrash2 } from "react-icons/lu";
import { deleteUnitSet } from "../api/deleteUnitSet";

export const DeleteButton = ({ unitSetId }: { unitSetId: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const res = await deleteUnitSet(unitSetId);

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    pathname.includes("/my-card-sets") && (
      <button
        className="z-10 transition-colors cursor-pointer hover:text-error"
        onClick={handleClick}
      >
        <LuTrash2 className="text-[24px]" />
      </button>
    )
  );
};
