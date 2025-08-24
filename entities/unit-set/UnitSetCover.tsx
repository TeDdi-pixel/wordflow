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
import {
  CARD_SQUARE_COLORS,
  SHADOW_COLORS,
} from "@/shared/model/constants/cursor-colors";

export const UnitSetCover = ({
  unitSetId,
  unitSetType,
  title,
  termsCount,
  authorsName,
  description,
  likesCount,
  index,
}: TypeCardSetProps) => {
  const shadowColor = SHADOW_COLORS[index % SHADOW_COLORS.length];
  const squareColor = CARD_SQUARE_COLORS[index % CARD_SQUARE_COLORS.length];

  return (
    <Link
      id={`unit-set-cover-${unitSetId}`}
      href={`/card-set/${unitSetId}`}
      className="group relative max-w-[371px] hover:shadow-2xl hover:scale-105 hover:text-white h-[210px] rounded-default w-full flex flex-col justify-between bg-fg border-3 border-transparent p-[16px] text-[14px] overflow-hidden transition-all duration-300"
    >
      <CursorFollower unitSetId={unitSetId} color={shadowColor} />

      <AccentSquare color={squareColor} />

      <div className="flex flex-col gap-[16px] z-10">
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
