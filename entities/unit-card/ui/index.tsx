import { getTermsLabel } from "@/shared/utils/getTermsLabel";
import { unitTypeIcon } from "@/shared/utils/getUnitTypeIcon";
import { UnitSetType } from "@/shared/model/types/unit";
import UnitSetOpenButton from "@/shared/components/buttons/UnitSetOpenButton";

type Props = {
  unitSetId: string;
  title: string;
  termsCount: number;
  authorsName: string;
  description: string;
  unitSetType: UnitSetType;
};

export const UnitCard = ({
  unitSetId,
  unitSetType,
  title,
  termsCount,
  authorsName,
  description,
}: Props) => {
  return (
    <div className="group relative max-w-[371px] h-[210px] rounded-default w-full flex flex-col justify-between bg-foreground border-2 border-transparent hover:border-accent p-[16px] text-[14px] overflow-hidden transition-colors ease-out duration-150">
      <span className="absolute top-0 right-0 w-[16px] group-hover:translate-0 translate-x-[16px] -translate-y-[16px] h-[16px] bg-background-accent rounded-[2px] transition-transform ease-out duration-150"></span>
      <div className="flex flex-col gap-[16px]">
        <h4 className="text-[18px] truncate">{title}</h4>
        {description && <h6 className="truncate">{description}</h6>}
        <div className="flex ">
          <p className="rounded-default px-[8px] py-[4px] bg-background-accent-2 text-hover-nav-text">
            {termsCount} {getTermsLabel(termsCount)}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center h-[32px]">
        <div className="flex gap-2 items-center ">
          <span>{unitTypeIcon(unitSetType)}</span>
          <span>by {authorsName}</span>
        </div>
        <UnitSetOpenButton id={unitSetId} />
      </div>
    </div>
  );
};
