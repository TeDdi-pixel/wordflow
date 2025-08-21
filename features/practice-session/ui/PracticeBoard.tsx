import { ActionBar } from "./ActionBar";
import { UnitInput, UnitTerm } from "@/entities/unit-set-practice";
import { getUnitSetForClient } from "@/shared/utils/unit-set/getUnitSetForClient";

export const PracticeBoard = async ({ unitSetId }: { unitSetId: string }) => {
  const unitSet = await getUnitSetForClient(unitSetId);

  const units = unitSet?.units || [];
  return (
    <div className="mx-auto h-[506px] w-full bg-foreground rounded-lg p-8 flex flex-col items-center justify-between mb-4">
      <ActionBar units={units} />
      <UnitTerm units={units} />
      <UnitInput units={units} />
    </div>
  );
};
