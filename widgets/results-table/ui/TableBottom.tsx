import TryAgainButton from "@/shared/ui/buttons/TryAgainButton";
import { ScoreSummary } from "./ScoreSummary";
import { TableBottomProps } from "../model/types";

export const TableBottom = ({ id, scoreSummary }: TableBottomProps) => {
  return (
    <div className="bg-fg px-5 py-3 rounded-lg font-semibold">
      <div className="w-full flex items-center justify-between">
        <ScoreSummary scoreSummary={scoreSummary} />

        <TryAgainButton id={id} />
      </div>
    </div>
  );
};
