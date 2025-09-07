"use client";

import { UnitSetCover } from "@/entities/unit-set";
import { TypeSort } from "@/shared/model/types/types";
import { TypeUnitSet } from "@/shared/model/types/unit";
import LoadingText from "@/shared/ui/LoadingText";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

type Props = {
  initialUnitSets: (Omit<TypeUnitSet, "units"> & {
    unitsCount: number;
    savedUnitsCount: number;
  })[];
  sort: TypeSort;
  totalDocsCount: number;
};

export const UnitSets = ({ initialUnitSets, sort, totalDocsCount }: Props) => {
  const [unitSets, setUnitSets] = useState<
    (Omit<TypeUnitSet, "units"> & {
      unitsCount: number;
      savedUnitsCount: number;
    })[]
  >(initialUnitSets);
  const [limit, setLimit] = useState(initialUnitSets.length);
  const [loading, setLoading] = useState(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setUnitSets(initialUnitSets);
    setLimit(initialUnitSets.length);
  }, [initialUnitSets, sort]);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && limit < totalDocsCount && !loading) {
          setLoading(true);

          const res = await axios.get(
            `/api/unit-sets?sort=${sort}&limit=${limit + 9}`
          );

          setUnitSets(res.data.unitSets);
          setLimit((prev) => prev + 9);
          setLoading(false);
        }
      },
      { threshold: 1 }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, [limit, sort, totalDocsCount, loading]);

  return (
    <>
      <div className="grid w-full grid-cols-3 gap-4">
        {unitSets.map((unitSet) => (
          <UnitSetCover
            key={unitSet._id}
            unitSetType={unitSet.unitSetType}
            description={unitSet.description}
            authorsName={unitSet.authorsName}
            unitsCount={unitSet.unitsCount}
            title={unitSet.title}
            target={unitSet.target}
            source={unitSet.source}
            unitSetId={unitSet._id}
            likesCount={unitSet.likesCount}
            savedUnitsCount={unitSet.savedUnitsCount}
          />
        ))}
      </div>

      <div ref={sentinelRef} className="h-1" />

      {loading && (
        <div className="flex flex-col items-center justify-center w-full gap-2 mt-[50px]">
          <div className="w-[36px] h-[36px] rounded-full border-dashed border-4 border-bg-accent-2 border-t-bg-accent animate-spin"></div>
          <LoadingText text="Завантаження..." />
        </div>
      )}
    </>
  );
};
