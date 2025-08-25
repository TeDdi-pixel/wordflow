"use client";

import ShowMoreIcon from "@/shared/icons/unit/ShowMoreIcon";

export const ShowMoreButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="cursor-pointer text-text-2 bg-bg-accent-2 py-2 px-4 rounded-default flex items-center justify-center gap-2 hover:scale-95 transition-transform"
    >
      <span>Показати ще</span>
      <ShowMoreIcon />
    </button>
  );
};
