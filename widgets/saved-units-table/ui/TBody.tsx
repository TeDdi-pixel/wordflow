"use client";

import Separator from "@/shared/ui/table/Separator";
import Td from "@/shared/ui/table/Td";
import { TextWithExpand } from "@/widgets/results-table";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { unitTypeIcon } from "@/shared/utils/unit-set-cover/unitTypeIcon";
import { DeleteUnitButton } from "@/features/delete-saved-unit";
import { TypeSavedUnit } from "@/shared/model/types/saved-unit";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import NotProvidedIcon from "@/shared/icons/unit/NotProvidedIcon";
import { SoundButton } from "@/features/play-pronunciation";
import { useSavedUnitsStore } from "@/shared/store/useSavedUnitsStore";
import { TdFirst } from "./TdFirst";

export const TBody = ({
  docs,
  onDelete,
}: {
  docs: TypeSavedUnit[];
  onDelete: (unitId: string) => void;
}) => {
  const setUnitsToSelect = useSavedUnitsStore(
    (state) => state.setUnitsToSelect,
  );

  useEffect(() => {
    if (docs.length === 0) return notFound();

    setUnitsToSelect(docs.map((unit) => unit._id));
  }, [docs]);

  return (
    <tbody>
      {docs?.map((doc, index) => (
        <tr key={doc._id} className="bg-fg h-[57px] group/checkbox">
          <TdFirst docIndex={index} docId={doc._id} />

          <Separator />

          <Td text={doc.unit.term} />

          <Separator />

          <td className="relative px-4 py-2 text-center">
            {doc.unit.phonetic ? (
              <TextWithExpand text={doc.unit.phonetic} />
            ) : (
              <NotProvidedIcon />
            )}
          </td>

          <Separator />

          <td className="relative px-4 py-2 text-center">
            <TextWithExpand text={doc.unit.definition} />
          </td>

          <Separator />

          <td className="relative px-4 py-2 text-center">
            <Link
              href={`/card-set/${doc.unitSetId}`}
              className="relative flex items-center justify-center w-full gap-2 overflow-hidden group hover:pr-[30px] transition-all"
            >
              <span className="scale-90">
                {unitTypeIcon(doc.unitSetType, doc.unitSetId)}
              </span>

              <span className="truncate">{doc.title}</span>

              <FiExternalLink className="transition-all group-hover:text-accent text-[22px] absolute -right-[22px] group-hover:right-0 scale-0 group-hover:scale-100" />
            </Link>
          </td>

          <Separator />

          <Td
            last
            icon={
              <div className="flex items-center justify-center h-full gap-4">
                <SoundButton savedUnit={doc.unit} />

                <DeleteUnitButton
                  handleDeleteUnit={onDelete}
                  unitSetId={doc.unitSetId}
                  unitId={doc.unit._id}
                />
              </div>
            }
          />
        </tr>
      ))}
    </tbody>
  );
};
