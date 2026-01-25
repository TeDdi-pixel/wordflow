"use client";

import LogoIcon from "@/shared/icons/navigation/LogoIcon";
import { useBurgerMenuStore } from "@/shared/store/useBurgerMenuStore";
import Link from "next/link";

export const Logo = () => {
  const isOpened = useBurgerMenuStore((state) => state.isOpened);

  return (
    <Link
      href="/"
      className={`flex items-center gap-2 z-[9999] transition-colors ${isOpened ? "text-text-2" : "text-text"}`}
    >
      <LogoIcon />

      <span className="text-2xl md:text-4xl align-middle leading-[110%] font-medium">
        WordFlow
      </span>
    </Link>
  );
};
