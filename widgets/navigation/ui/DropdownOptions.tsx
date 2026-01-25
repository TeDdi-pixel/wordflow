"use client";

import Link from "next/link";
import { NavItemOptions } from "../model/types";
import { useNavigationStore } from "@/shared/store/useNavigationStore";
import useClickOutside from "@/shared/hooks/useClickOutside";

export const DropdownOptions = ({ options }: { options: NavItemOptions[] }) => {
  const isOpened = useNavigationStore((state) => state.isOpened);

  useClickOutside(isOpened);

  return (
    <div className="relative z-[9998]">
      <div
        className={`absolute -right-[20px] w-699:left-0 top-0 pt-[7px] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:visible opacity-0 scale-80 group-hover:scale-100 invisible transition-all ${
          isOpened
            ? "opacity-100 pointer-events-auto visible scale-100"
            : "pointer-events-none opacity-0 scale-80 invisible"
        }`}
      >
        <ul
          className={`rounded-2xl min-w-[185px] w-full bg-fg overflow-hidden border-6 border-bg ${isOpened ? "z-[9998]" : ""}`}
        >
          {options.map((option: NavItemOptions) => (
            <Link
              key={option.id}
              href={option.path}
              className="block px-4 py-2 cursor-pointer group/item hover:bg-bg-accent-2 hover:text-bg-accent text-text"
            >
              <li className="flex gap-2.5 h-[20px] items-center group-hover/item:translate-x-2 translate-x-0 transition-transform">
                <span className="text-[16px]">{option.icon}</span>

                <span className="text-[12px]">{option.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
