import {
  FeatureConfig,
  features,
} from "@/features/practice-session/config/features";
import { TypeUserTermItem } from "@/shared/model/types/user-terms";
import { getStatusIcon } from "@/shared/utils/getStatusIcon";
import IconButton from "../../../shared/components/buttons/IconButton";
import Separator from "../../../shared/components/table/Separator";
import Td from "../../../shared/components/table/Td";
import { TextWithExpand } from "./TextWithExpand";

type Props = { unitSet: TypeUserTermItem[] };

export const TBody = ({ unitSet }: Props) => {
  return (
    <tbody>
      {unitSet?.map((unit: TypeUserTermItem) => (
        <tr key={unit._id} className="bg-foreground h-[57px]">
          <Td first text={unit.term} />
          <Separator />
          {unit.definition && (
            <td className="px-4 py-2 text-center relative">
              <TextWithExpand text={unit.definition} />
            </td>
          )}
          <Separator />
          <Td text={unit.lastAnswer} />
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
                {features
                  .filter(
                    (feature) =>
                      feature.name !== "tip" && feature.name !== "star"
                  )
                  .map((feature: FeatureConfig) => (
                    <IconButton
                      key={feature.id}
                      icon={feature.icon}
                      featureName={feature.name}
                    />
                  ))}
              </div>
            }
          />
        </tr>
      ))}
    </tbody>
  );
};
