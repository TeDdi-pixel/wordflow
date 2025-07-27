"use client";

import { memo, ReactNode } from "react";
import { NavigationItemOption } from "@/entities/navigation/config";
import { DropdownTrigger } from "./DropdownTrigger";
import useClickOutside from "@/shared/hooks/useClickOutside";
import { DropdownList } from "./DropdownList";
import { useNavStore } from "../../../../store/useNavStore";

type Props = {
  icon: ReactNode;
  name: string;
  options?: NavigationItemOption[];
  id?: number;
};

export const DropdownItem = memo(({ id, icon, name, options }: Props) => {
  const dropdownRef = useClickOutside();
  const isActive = useNavStore(
    (state) => state.activeItemId === id && state.isVisibleIndex === id
  );
  return (
    <div ref={dropdownRef} className="relative">
      <DropdownTrigger id={id} icon={icon} name={name} />
      {isActive && <DropdownList id={id} options={options} />}
    </div>
  );
});
