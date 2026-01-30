"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { unitTypeIcon } from "@/shared/utils/unit-set-cover/unitTypeIcon";
import { SoundButton } from "@/features/play-pronunciation";
import { DeleteUnitButton } from "@/features/delete-saved-unit";
import { TextWithExpand } from "@/widgets/results-table";
import NotProvidedIcon from "@/shared/icons/unit/NotProvidedIcon";
import { TypeSavedUnit } from "@/shared/model/types/saved-unit";
import { useSavedUnitsStore } from "@/shared/store/useSavedUnitsStore";
import { FaCheck } from "react-icons/fa";
import { ReactNode, useState } from "react";

export const SavedWordCard = ({
  doc,
  index,
  onDelete,
}: {
  doc: TypeSavedUnit;
  index: number;
  onDelete: (unitId: string) => void;
}) => {
  const selectedUnits = useSavedUnitsStore((s) => s.selectedUnits);
  const checkSelectedUnit = useSavedUnitsStore((s) => s.checkSelectedUnit);

  const isUnitSelected = (docId: string) => {
    return selectedUnits.find((d) => d.docId === docId)?.checked || false;
  };

  return (
    <div className="relative bg-fg rounded-default p-4 space-y-3 group/checkbox">
      <div className="flex items-center justify-between relative">
        <span className="text-sm sm:text-[16px] text-accent">#{index + 1}</span>

        <label
          htmlFor={`savedUnit-${doc._id}`}
          className="relative w-5 h-5 cursor-pointer"
        >
          <input
            id={`savedUnit-${doc._id}`}
            type="checkbox"
            onChange={() => checkSelectedUnit(doc._id)}
            checked={isUnitSelected(doc._id)}
            className={`absolute inset-0 bg-accent w-5 h-5 appearance-none rounded-[4px] transition-all`}
          />

          <FaCheck
            className={`absolute inset-0 m-auto text-text-2 text-[12px] transition-all ${
              isUnitSelected(doc._id)
                ? "opacity-100 scale-100"
                : "opacity-0 scale-80"
            }`}
          />
        </label>
      </div>

      <Row label="Термін">{doc.unit.term}</Row>

      <Row label="Транскрипція">
        {doc.unit.phonetic ? (
          <TextWithExpand text={doc.unit.phonetic} />
        ) : (
          <NotProvidedIcon />
        )}
      </Row>

      <Row label="Визначення">
        <TextWithExpand text={doc.unit.definition} />
      </Row>

      <div className="flex justify-between gap-4 pt-2">
        <Link
          href={`/card-set/${doc.unitSetId}`}
          className="flex items-center text-accent gap-2"
        >
          {unitTypeIcon(doc.unitSetType, doc.unitSetId)}
          <span className="truncate">{doc.title}</span>

          <FiExternalLink className="text-[22px]" />
        </Link>

        <div className="flex items-center gap-2">
          <SoundButton savedUnit={doc.unit} />
          <DeleteUnitButton
            handleDeleteUnit={onDelete}
            unitSetId={doc.unitSetId}
            unitId={doc.unit._id}
          />
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div>
    <p className="text-xs sm:text-[14px] text-muted mb-1">{label}</p>

    <div className="text-sm sm:text-[16px] text-accent">{children}</div>
  </div>
);
