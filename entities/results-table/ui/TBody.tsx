import { TypeUserTermItem } from "@/shared/model/types/user-terms";
import { getStatusIcon } from "@/shared/utils/results-table/getStatusIcon";
import Separator from "../../../shared/components/table/Separator";
import Td from "../../../shared/components/table/Td";
import { TextWithExpand } from "./TextWithExpand";
import { BookmarkButton } from "@/entities/unit-set-practice";
import { SoundButton } from "@/shared/components/buttons/SoundButton";

type Props = { unitSet: TypeUserTermItem[] };

export const TBody = ({ unitSet }: Props) => {
  return (
    <tbody>
      {unitSet?.map((unit: TypeUserTermItem) => (
        <tr key={unit._id} className="bg-foreground h-[57px]">
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
                <SoundButton resultUnit={unit} />

                <BookmarkButton />
              </div>
            }
          />
        </tr>
      ))}
    </tbody>
  );
};
