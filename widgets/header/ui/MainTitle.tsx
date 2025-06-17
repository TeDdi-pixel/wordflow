import LogoIcon from "@/shared/icons/navigation/LogoIcon";
import Link from "next/link";
import React from "react";

export const MainTitle = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoIcon />
      <h1 className="text-4xl align-middle leading-[110%] font-medium">
        Openword
      </h1>
    </Link>
  );
};
