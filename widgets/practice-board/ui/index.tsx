import { PracticeBoard } from "@/features/practice-session";
import { PracticeBoardControls } from "@/features/practice-session/ui/PracticeBoardControls";
import { TypeUnit } from "@/shared/model/types/unit";

type Props = {
  units: TypeUnit[];
  id: string;
};

export const PracticeBoardBlock = ({ units, id }: Props) => {
  return (
    <div className="max-w-[821px] w-full">
      <PracticeBoard units={units} />
      <PracticeBoardControls units={units} unitSetId={id} />
    </div>
  );
};
