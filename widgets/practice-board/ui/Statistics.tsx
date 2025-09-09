import { StatisticsProps } from "../model/types";
import { LikesCount } from "./LikesCount";
import { SavedUnitsCount } from "./SavedUnitsCount";

export const Statistics = ({
  likesCount,
  savedUnitsCount,
  unitSetId,
}: StatisticsProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <LikesCount initialLikesCount={likesCount} unitSetId={unitSetId} />

      <SavedUnitsCount
        initialSavedUnitCount={savedUnitsCount}
        unitSetId={unitSetId}
      />
    </div>
  );
};
