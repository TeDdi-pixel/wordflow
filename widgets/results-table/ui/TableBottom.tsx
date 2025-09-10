import TryAgainButton from "@/shared/ui/buttons/TryAgainButton";
import { ScoreSummary } from "./ScoreSummary";
import { TableBottomProps } from "../model/types";

export const TableBottom = ({ id, scoreSummary }: TableBottomProps) => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 rounded-default bg-fg">
      <ScoreSummary scoreSummary={scoreSummary} />

      <TryAgainButton id={id} />
    </div>
  );
};
