"use client";

import IconButton from "@/shared/ui/buttons/IconButton";
import BookmarkIcon from "@/shared/icons/unit/BookmarkIcon";
import BookmarkActiveIcon from "@/shared/icons/unit/BookmarkActiveIcon";
import useBookmark from "../model/useBookmark";

type Props = {
  unitSetId: string;
  unitId?: string;
};

export const BookmarkButton = ({ unitSetId, unitId }: Props) => {
  const { handleSave, isSaved } = useBookmark(unitSetId, unitId);

  return (
    <IconButton
      icon={isSaved ? <BookmarkActiveIcon /> : <BookmarkIcon />}
      handleClick={handleSave}
    />
  );
};
