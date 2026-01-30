"use client";

import { useEffect, useState } from "react";
import { TypeSavedUnit } from "@/shared/model/types/saved-unit";
import { TableBottom } from "./TableBottom";
import { notFound } from "next/navigation";
import { DesktopTable } from "./DesktopTable";
import { MobileCards } from "./MobileCards";

export const SavedWordsClient = ({
  initialUnits,
}: {
  initialUnits: TypeSavedUnit[];
}) => {
  const [docs, setDocs] = useState<TypeSavedUnit[]>(initialUnits);

  useEffect(() => {
    if (!docs.length) notFound();
  }, [docs.length]);

  const handleDeleteUnit = (unitId: string) => {
    setDocs((prev) => prev.filter((d) => d.unit._id !== unitId));
  };

  return (
    <>
      <div className="hidden md:block">
        <DesktopTable docs={docs} onDelete={handleDeleteUnit} />
      </div>

      <div className="md:hidden space-y-3">
        <MobileCards docs={docs} onDelete={handleDeleteUnit} />
      </div>

      <TableBottom />
    </>
  );
};
