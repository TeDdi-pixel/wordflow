import Link from "next/link";
import { AccentSquare } from "./ui/AccentSquare";
import { Title } from "./ui/Title";
import { Description } from "./ui/Description";
import { TermsCount } from "./ui/TermsCount";
import { CardTypeIcon } from "./ui/CardTypeIcon";
import { AuthorsName } from "./ui/AuthorsName";
import { LikesCount } from "./ui/LikesCount";
import { TypeCardSetProps } from "./model/types";

export const UnitSetCover = ({
  unitSetId,
  unitSetType,
  title,
  termsCount,
  authorsName,
  description,
  likesCount,
}: TypeCardSetProps) => {
  return (
    <Link
      href={`/card-set/${unitSetId}`}
      className="group relative shadow-none hover:shadow-xl hover:scale-105 scale-100 max-w-[371px] h-[210px] rounded-default w-full flex flex-col justify-between bg-fg border-3 border-transparent p-[16px] text-[14px] overflow-hidden transition-all duration-[215ms]"
    >
      <AccentSquare />

      <div className="flex flex-col gap-[16px]">
        <Title title={title} />

        {description && <Description description={description} />}

        <TermsCount termsCount={termsCount} />
      </div>

      <div className="flex justify-between items-center h-[32px]">
        <div className="flex items-center gap-2 ">
          <CardTypeIcon unitSetType={unitSetType} />

          <AuthorsName authorsName={authorsName} />

          <LikesCount likesCount={likesCount} />
        </div>
      </div>
    </Link>
  );
};
