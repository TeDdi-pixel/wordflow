import React from "react";
import { NavigationItemOption } from "../../config";
import Link from "next/link";
import DropdownListWrapper from "./DropdownListWrapper";

type Props = {
  options?: NavigationItemOption[];
  id?: number;
};

export const DropdownList = ({ id, options }: Props) => {
  return (
    <DropdownListWrapper id={id}>
      {options?.map((option: NavigationItemOption) => (
        <li
          key={option.id}
          className="px-4 py-2 hover:bg-accent-text hover:text-foreground text-accent-text cursor-pointer"
        >
          <Link href={option.path!} className="flex gap-2.5 items-center">
            <span className="text-[16px]">{option.icon}</span>
            <span className="text-[12px]">{option.name}</span>
          </Link>
        </li>
      ))}
    </DropdownListWrapper>
  );
};
