import Link from "next/link";
import { AccentSquare } from "./ui/AccentSquare";
import { Title } from "./ui/Title";
import { Description } from "./ui/Description";
import { TermsCount } from "./ui/TermsCount";
import { CardTypeIcon } from "./ui/CardTypeIcon";
import { AuthorsName } from "./ui/AuthorsName";
import { LikesCount } from "./ui/LikesCount";
import { TypeCardSetProps } from "./model/types";
import CursorFollower from "@/shared/ui/CursorFollower";
import Languages from "./ui/Languages";

export const UnitSetCover = ({
  unitSetId,
  unitSetType,
  title,
  termsCount,
  authorsName,
  description,
  likesCount,
  source,
  target,
}: TypeCardSetProps) => {
  return (
    <Link
      id={`unit-set-cover-${unitSetId}`}
      href={`/card-set/${unitSetId}`}
      className="group relative max-w-[371px] hover:scale-105 hover:shadow-2xl h-[196px] rounded-default w-full flex flex-col justify-between bg-fg border-3 border-transparent p-[16px] text-[14px] overflow-hidden transition-all duration-[215ms]"
    >
      <CursorFollower unitSetId={unitSetId} />

      <AccentSquare />

      <div className="flex flex-col gap-[16px] z-10">
        <Title title={title} />

        {description && <Description description={description} />}

        <div className="flex items-center gap-2">
          <TermsCount termsCount={termsCount} />

          <Languages target={target} source={source} />
        </div>
      </div>

      <div className="flex justify-between items-center h-[32px] z-10">
        <div className="flex items-center gap-2 ">
          <CardTypeIcon unitSetType={unitSetType} />

          <AuthorsName authorsName={authorsName} />

          <LikesCount likesCount={likesCount} />
        </div>
      </div>
    </Link>
  );
};
