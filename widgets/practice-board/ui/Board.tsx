import { ActionBar } from "./ActionBar";
import { PracticeBoardInput } from "@/features/answer-term";
import { Term } from "./Term";
import { getUnitSet } from "@/entities/unit-set/api/getUnitSet";
import { notFound } from "next/navigation";

export const PracticeBoard = async ({ unitSetId }: { unitSetId: string }) => {
  const unitSet = await getUnitSet(unitSetId);

  if (!unitSet) return notFound();

  return (
    <div className="mx-auto min-h-[506px] w-full bg-fg rounded-lg p-8 flex flex-col items-center justify-between mb-4">
      <ActionBar
        units={unitSet.units}
        target={unitSet?.target}
        source={unitSet?.source}
        unitSetId={unitSetId}
      />

      <Term
        units={unitSet.units}
        source={unitSet?.source}
        target={unitSet?.target}
      />

      <PracticeBoardInput units={unitSet.units} />
    </div>
  );
};
