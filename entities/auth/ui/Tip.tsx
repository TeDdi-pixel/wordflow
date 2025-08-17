"use client";

import { usePasswordStore } from "@/store/usePasswordStore";
import { memo } from "react";

type Props = {
  name: "password" | "verifyPassword" | "loginPassword";
};

export const Tip = memo(({ name }: Props) => {
  const tipMessage = usePasswordStore((state) => state.fields[name].tipMessage);
  const tipVisible = usePasswordStore((state) => state.fields[name].tipVisible);

  return (
    <div
      className={`absolute top-1/2 right-[40px] px-4 py-2.5 select-none shadow-md bg-tip text-text-2 w-[305px] -translate-y-1/2 rounded-default transition-all ease-out duration-150 z-50 ${
        tipVisible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-80 pointer-events-none"
      } `}
    >
      {tipMessage}
    </div>
  );
});
