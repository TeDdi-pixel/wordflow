import { ActionBar } from "./ActionBar";
import { getUnitSetForClient } from "@/shared/utils/unit-set/getUnitSetForClient";
import { PracticeBoardInput } from "@/features/answer-term";
import { Term } from "./Term";

export const PracticeBoard = async ({ unitSetId }: { unitSetId: string }) => {
  const unitSet = await getUnitSetForClient(unitSetId);

  const units = unitSet?.units || [];

  const target = unitSet?.target;
  const source = unitSet?.source;

  return (
    <div className="mx-auto min-h-[506px] w-full bg-fg rounded-lg p-8 flex flex-col items-center justify-between mb-4">
      <ActionBar units={units} target={target} source={source} />

      <Term units={units} source={source} target={target} />

      <PracticeBoardInput units={units} />
    </div>
  );
};
