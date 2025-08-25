import { UserResultTerm } from "@/shared/model/types/user-results";
import { getStatusIcon } from "@/shared/utils/results-table/getStatusIcon";
import Separator from "../../../shared/ui/table/Separator";
import Td from "../../../shared/ui/table/Td";
import { TextWithExpand } from "./TextWithExpand";
import { SoundButton } from "@/shared/ui/buttons/SoundButton";
import { TBodyProps } from "../model/types";
import { BookmarkButton } from "@/features/save-unit-term/ui/BookmarkButton";

export const TBody = ({ resultSetTerms, target }: TBodyProps) => {
  return (
    <tbody>
      {resultSetTerms?.map((unit: UserResultTerm) => (
        <tr key={unit._id} className="bg-fg h-[57px]">
          <Td first text={unit.term} />

          <Separator />

          <td className="px-4 py-2 text-center relative">
            {unit.phonetic && <TextWithExpand text={unit.phonetic} />}
          </td>

          <Separator />

          {unit.definition && (
            <td className="px-4 py-2 text-center relative">
              <TextWithExpand text={unit.definition} />
            </td>
          )}

          <Separator />

          <td className="px-4 py-2 text-center relative">
            {unit.lastAnswer && <TextWithExpand text={unit.lastAnswer} />}
          </td>

          <Separator />

          <Td
            icon={
              <div className="flex justify-center items-center h-full">
                {getStatusIcon(unit.status)}
              </div>
            }
          />

          <Separator />

          <Td
            last
            icon={
              <div className="flex gap-4 justify-center items-center h-full">
                <SoundButton resultUnit={unit} target={target} />

                <BookmarkButton />
              </div>
            }
          />
        </tr>
      ))}
    </tbody>
  );
};
