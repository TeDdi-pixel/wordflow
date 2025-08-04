import React, { memo } from "react";
import { NavigationItemOption } from "../../config";
import Link from "next/link";
import { DropdownListWrapper } from "./DropdownListWrapper";

type Props = {
  options?: NavigationItemOption[];
  id?: number;
};

export const DropdownList = memo(({ id, options }: Props) => {
  return (
    <DropdownListWrapper id={id}>
      {options?.map((option: NavigationItemOption) => (
        <li
          key={option.id}
          className="group px-4 py-2 hover:bg-background-accent hover:text-active-nav-text text-text cursor-pointer"
        >
          <Link
            href={option.path}
            className="flex gap-2.5 items-center group-hover:translate-x-2 translate-x-0 transition-transform duration-300"
          >
            <span className="text-[16px]">{option.icon}</span>
            <span className="text-[12px]">{option.name}</span>
          </Link>
        </li>
      ))}
    </DropdownListWrapper>
  );
});
