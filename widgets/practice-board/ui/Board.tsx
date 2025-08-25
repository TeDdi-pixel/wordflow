import { ActionBar } from "./ActionBar";
import { getUnitSetForClient } from "@/shared/utils/unit-set/getUnitSetForClient";
import { PracticeBoardInput } from "@/features/answer-term";
import { Term } from "./Term";

export const PracticeBoard = async ({ unitSetId }: { unitSetId: string }) => {
  const unitSet = await getUnitSetForClient(unitSetId);

  const units = unitSet?.units || [];

  const target = unitSet?.target;

  return (
    <div className="mx-auto h-[506px] w-full bg-fg rounded-lg p-8 flex flex-col items-center justify-between mb-4">
      <ActionBar units={units} target={target} />
      <Term units={units} />
      <PracticeBoardInput units={units} />
    </div>
  );
};
