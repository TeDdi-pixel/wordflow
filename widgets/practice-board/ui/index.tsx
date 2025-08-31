import { getUnitSetTitle } from "../api/getUnitSetTitle";
import { PracticeBoardProps } from "../model/types";
import { PracticeBoard } from "./Board";
import { PracticeBoardControls } from "./Controls";

export const PracticeBoardBlock = async ({ unitSetId }: PracticeBoardProps) => {
  const title = await getUnitSetTitle(unitSetId);

  return (
    <div className="max-w-[821px] w-full max-h-max">
      <h2 className="text-[28px] flex gap-2 items-center mb-[32px]">{title}</h2>
      <PracticeBoard unitSetId={unitSetId} />

      <PracticeBoardControls unitSetId={unitSetId} />
    </div>
  );
};
