import { PracticeBoardProps } from "../model/types";
import { PracticeBoard } from "./Board";
import { PracticeBoardControls } from "./Controls";

export const PracticeBoardBlock = ({ unitSetId }: PracticeBoardProps) => {
  return (
    <div className="max-w-[821px] w-full max-h-max">
      <PracticeBoard unitSetId={unitSetId} />

      <PracticeBoardControls unitSetId={unitSetId} />
    </div>
  );
};
