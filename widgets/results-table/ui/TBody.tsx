import { UserResultTerm } from "@/shared/model/types/user-results";
import { getStatusIcon } from "@/shared/utils/results-table/getStatusIcon";
import Separator from "../../../shared/ui/table/Separator";
import Td from "../../../shared/ui/table/Td";
import { TextWithExpand } from "./TextWithExpand";
import { TBodyProps } from "../model/types";
import { BookmarkButton } from "@/features/save-unit/ui/BookmarkButton";
import NotProvidedIcon from "@/shared/icons/unit/NotProvidedIcon";
import { SoundButton } from "@/features/play-pronunciation";

export const TBody = ({ resultSetTerms, unitSetId }: TBodyProps) => {
  return (
    <tbody>
      {resultSetTerms?.map((unit: UserResultTerm) => (
        <tr key={unit._id} className="bg-fg h-[57px]">
          <Td first text={unit.term} />

          <Separator />

          <td className="relative px-4 py-2 text-center">
            {unit.phonetic ? (
              <TextWithExpand text={unit.phonetic} />
            ) : (
              <NotProvidedIcon />
            )}
          </td>

          <Separator />

          <td className="relative px-4 py-2 text-center">
            <TextWithExpand text={unit.definition} />
          </td>

          <Separator />

          <td className="relative px-4 py-2 text-center">
            {unit.lastAnswer ? (
              <TextWithExpand text={unit.lastAnswer} />
            ) : (
              <NotProvidedIcon />
            )}
          </td>

          <Separator />

          <Td
            icon={
              <div className="flex items-center justify-center h-full">
                {getStatusIcon(unit.status)}
              </div>
            }
          />

          <Separator />

          <Td
            last
            icon={
              <div className="flex items-center justify-center h-full gap-4">
                <SoundButton resultUnit={unit} />

                <BookmarkButton unitSetId={unitSetId} unitId={unit._id} />
              </div>
            }
          />
        </tr>
      ))}
    </tbody>
  );
};
