import { ScoreSummaryProps } from "../model/types";

export const ScoreSummary = ({ scoreSummary }: ScoreSummaryProps) => {
  return (
    <div className="flex gap-4 items-center">
      Правильних відповідей:{" "}
      <span className="block font-extrabold py-1 px-2 rounded-default bg-bg-accent-2 text-text-2">
        {scoreSummary}
      </span>
    </div>
  );
};
