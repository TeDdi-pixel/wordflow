"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SingleNavItemProps } from "../model/types";

export const SingleNavItem = ({ item }: SingleNavItemProps) => {
  const pathname = usePathname();

  const isActive = item.path === pathname;

  return (
    <>
      <div className="flex gap-1 items-center transition-all px-[8px] py-[4px] cursor-pointer text-text group-hover:scale-25 group-hover:opacity-25 duration-300 opacity-100 scale-100 h-[33px]">
        <span className="text-[20px]">{item.icon}</span>
        <span className="font-medium">{item.name}</span>
      </div>
      <Link
        href={item.path}
        className={`absolute flex gap-1 items-center z-10 rounded-4xl px-[8px] py-[4px] transition-all duration-300 group-hover:-translate-y-[33px] h-[33px] group-hover:scale-90 ${
          isActive
            ? "-translate-y-[33px] rounded-default bg-bg-accent-2 text-bg-accent"
            : "translate-y-0 bg-bg-accent-2 text-fg scale-100"
        }`}
      >
        <span className="text-[20px]">{item.icon}</span>
        <span className="font-medium">{item.name}</span>
      </Link>
    </>
  );
};
