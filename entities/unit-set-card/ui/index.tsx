import { getTermsLabel } from "@/shared/utils/unit-set-card/getTermsLabel";
import { unitTypeIcon } from "@/shared/utils/unit-set-card/getUnitTypeIcon";
import { UnitSetType } from "@/shared/model/types/unit";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import LikeIcon from "@/shared/icons/unit/LikeIcon";

type Props = {
  unitSetId: string;
  title: string;
  termsCount: number;
  authorsName: string;
  description: string;
  unitSetType: UnitSetType;
  likesCount: number;
};

export const UnitSetCard = ({
  unitSetId,
  unitSetType,
  title,
  termsCount,
  authorsName,
  description,
  likesCount,
}: Props) => {
  return (
    <Link
      href={`/card-set/${unitSetId}`}
      className="group relative shadow-none hover:shadow-xl hover:scale-105 scale-100 max-w-[371px] h-[210px] rounded-default w-full flex flex-col justify-between bg-foreground border-3 border-transparent p-[16px] text-[14px] overflow-hidden transition-all ease-out duration-[215ms]"
    >
      <span className="absolute top-0 right-0 w-fit h-fit p-1 flex items-center justify-center group-hover:translate-0 translate-x-[28px] -translate-y-[28px]  bg-background-accent rounded-[4px] transition-transform ease-out duration-[215ms]">
        <FiExternalLink className="cursor-pointer w-[18px] h-[18px]" />
      </span>

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
        <div className="flex items-center gap-2 ">
          <span>{unitTypeIcon(unitSetType)}</span>

          <span>by {authorsName}</span>

          {likesCount > 0 && (
            <div className="flex gap-1 items-center">
              <LikeIcon />
              <span>{likesCount}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
