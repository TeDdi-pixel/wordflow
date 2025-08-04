"use client";

import { usePasswordStore } from "@/store/usePasswordStore";

type Props = {
  name: "password" | "verifyPassword" | "loginPassword";
};

export const Tip = ({ name }: Props) => {
  const fields = usePasswordStore((state) => state.fields);

  const tipMessage = fields[name].tipMessage;
  const tipVisible = fields[name].tipVisible;
  return (
    <div
      className={`absolute top-1/2 right-[32px] py-1 px-4 pointer-events-none select-none bg-popup w-[305px] -translate-y-1/2 rounded-default transition-opacity ease-linear duration-150 z-50 ${
        tipVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        visibility: tipVisible ? "visible" : "hidden",
      }}
    >
      {tipMessage}
    </div>
  );
};
