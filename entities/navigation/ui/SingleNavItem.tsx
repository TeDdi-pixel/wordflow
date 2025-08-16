"use client";

import { ReactNode } from "react";
import { NavigationItemOption } from "../../../widgets/navigation/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  item: {
    id: number;
    icon: ReactNode;
    name: string;
    path?: string;
    options?: NavigationItemOption[];
  };
};

export const SingleNavItem = ({ item }: Props) => {
  const pathname = usePathname();

  const isActive = item.path === pathname;

  return (
    <>
      <div className="flex gap-1 items-center transition-all px-[8px] py-[4px] cursor-pointer text-text group-hover:scale-25 group-hover:opacity-25 duration-300 opacity-100 scale-100 h-[33px]">
        <span className="text-[20px]">{item.icon}</span>
        <span className="font-medium">{item.name}</span>
      </div>
      <Link
        href={item.path!}
        className={`absolute flex gap-1 items-center z-10 rounded-4xl px-[8px] py-[4px] transition-all duration-300 group-hover:-translate-y-[33px] h-[33px] group-hover:scale-90 ${
          isActive
            ? "-translate-y-[33px] rounded-default bg-active-nav-item text-active-nav-text"
            : "translate-y-0 bg-hover-nav-item text-hover-nav-text scale-100"
        }`}
      >
        <span className="text-[20px]">{item.icon}</span>
        <span className="font-medium">{item.name}</span>
      </Link>
    </>
  );
};
