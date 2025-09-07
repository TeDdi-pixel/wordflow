import { LikesCount } from "./LikesCount";
import { SavedUnitCount } from "./UnitCount";

type Props = {
  likesCount: number;
  savedUnitsCount: number;
};

export const Statistics = ({ likesCount, savedUnitsCount }: Props) => {
  return (
    <div className="flex items-center gap-2.5">
      <LikesCount initialLikesCount={likesCount} />

      <SavedUnitCount initialSavedUnitCount={savedUnitsCount} />
    </div>
  );
};
