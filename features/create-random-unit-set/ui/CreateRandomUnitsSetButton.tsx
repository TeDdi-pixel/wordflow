"use client";

import { useState } from "react";
import { createRandomUnitsSet } from "../api/createRandomUnitsSet";
import { IoCreate } from "react-icons/io5";
export const CreateRandomUnitsSetButton = () => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleClick = async () => {
    setIsPending(true);

    const res = await createRandomUnitsSet();

    if (res) setIsPending(false);
  };

  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 transition-all cursor-pointer rounded-default ${
        isPending
          ? "bg-fg text-disabled"
          : "hover:scale-95 bg-bg-accent-2 text-text-2"
      }`}
      onClick={handleClick}
    >
      <span>Створити випадковий набір</span>
      <IoCreate className="text-[24px]" />
    </button>
  );
};
