"use client";

import { ReactNode } from "react";
import { NavigationItemOption } from "@/entities/navigation/config";
import { DropdownTrigger } from "./DropdownTrigger";
import useClickOutside from "@/shared/hooks/useClickOutside";
import { DropdownList } from "./DropdownList";

type Props = {
  icon: ReactNode;
  name: string;
  options?: NavigationItemOption[];
  id?: number;
};

export const DropdownItem = ({ id, icon, name, options }: Props) => {
  const dropdownRef = useClickOutside();
  return (
    <div ref={dropdownRef} className="relative">
      <DropdownTrigger id={id} icon={icon} name={name} />
      <DropdownList id={id} options={options} />
    </div>
  );
};
