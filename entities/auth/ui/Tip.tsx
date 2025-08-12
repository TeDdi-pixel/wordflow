"use client";

import { usePasswordStore } from "@/store/usePasswordStore";
import { memo } from "react";

type Props = {
  name: "password" | "verifyPassword" | "loginPassword";
};

export const Tip = memo(({ name }: Props) => {
  const isPasswordSafe = usePasswordStore(
    (state) => state.fields[name].isPasswordSafe
  );
  const tipMessage = usePasswordStore((state) => state.fields[name].tipMessage);
  const tipVisible = usePasswordStore((state) => state.fields[name].tipVisible);

  return (
    <div
      className={`absolute top-1/2 right-[32px] px-4 pointer-events-none select-none shadow-md bg-tip text-text-2 w-[305px] -translate-y-1/2 rounded-default transition-opacity ease-out duration-150 z-50 ${
        tipVisible ? "opacity-100" : "opacity-0"
      } ${isPasswordSafe ? "py-2.5" : "py-1"}`}
      style={{
        visibility: tipVisible ? "visible" : "hidden",
      }}
    >
      {tipMessage}
    </div>
  );
});
