import { SoundButton } from "@/features/play-pronunciation";
import { BookmarkButton } from "@/features/save-unit";
import { UserResultTerm } from "@/shared/model/types/user-results";
import Row from "@/shared/ui/table/Row";
import { getStatusIcon } from "@/shared/utils/results-table/getStatusIcon";

export const MobileResultCard = ({
  userResultTerm,
  unitSetId,
}: {
  userResultTerm: UserResultTerm;
  unitSetId: string;
}) => {
  return (
    <div className="bg-fg rounded-default p-4 space-y-3">
      <Row label="Термін" value={userResultTerm.term} />
      <Row label="Транскрипція" value={userResultTerm.phonetic} />
      <Row label="Визначення" value={userResultTerm.definition} />
      <Row label="Моя відповідь" value={userResultTerm.lastAnswer} />

      <div className="flex items-center justify-between pt-2">
        {getStatusIcon(userResultTerm.status)}

        <div className="flex gap-3">
          <SoundButton resultUnit={userResultTerm} />

          <BookmarkButton unitSetId={unitSetId} unitId={userResultTerm._id} />
        </div>
      </div>
    </div>
  );
};
