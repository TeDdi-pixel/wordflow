"use client";

import { usePathname } from "next/navigation";
import { NavItemWithOptionsProps } from "../model/types";

export const NavItemWithOptions = ({ item }: NavItemWithOptionsProps) => {
  const pathname = usePathname();

  const isActive = item.options?.some(
    (option) =>
      pathname === option.path || pathname.startsWith(option.path + "/")
  );
  return (
    <>
      <div className="px-[12px] py-[6px] flex gap-1 items-center font-medium hover:text-text transition-all text-text duration-300 h-[33px] group-hover:scale-50 group-hover:opacity-50 scale-100 opacity-100">
        {item.name}
        <span className="inline-block transition-transform group-hover:rotate-180 rotate-0">
          {item.icon}
        </span>
      </div>

      <div
        className={`absolute flex gap-1 items-center z-10 rounded-4xl px-[12px] py-[6px] font-medium duration-300 transition-all group-hover:scale-90 ${
          isActive
            ? "-translate-y-[33px] rounded-default text-bg-accent bg-bg-accent-2"
            : "translate-y-0 group-hover:-translate-y-[33px] bg-bg-accent-2 text-fg scale-100"
        }`}
      >
        <span>{item.name}</span>

        <span className="inline-block transition-transform group-hover:rotate-180 rotate-0">
          {item.icon}
        </span>
      </div>
    </>
  );
};
