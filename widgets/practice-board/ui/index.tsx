import { PracticeBoard } from "@/features/practice-session";
import { PracticeBoardControls } from "@/features/practice-session/ui/PracticeBoardControls";

type Props = {
  unitSetId: string;
};

export const PracticeBoardBlock = ({ unitSetId }: Props) => {
  return (
    <div className="max-w-[821px] w-full">
      <PracticeBoard unitSetId={unitSetId} />
      <PracticeBoardControls unitSetId={unitSetId} />
    </div>
  );
};
