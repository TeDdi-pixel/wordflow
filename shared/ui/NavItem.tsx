import Link from "next/link";
import { NavigationItemOption } from "@/entities/navigation/config";
import { ReactNode } from "react";
import { DropdownItem } from "@/entities/navigation";

type Props = {
  item: {
    id?: number;
    icon: ReactNode;
    name: string;
    path?: string;
    options?: NavigationItemOption[];
  };
};

const NavItem = ({ item }: Props) => {
  return (
    <li className="relative">
      {!item.options && item.path ? (
        <Link
          href={item.path}
          className="flex gap-1 items-center hover:text-accent-text transition-colors"
        >
          <span className="text-[20px]">{item.icon}</span>
          <span className="font-medium">{item.name}</span>
        </Link>
      ) : (
        <DropdownItem
          id={item.id}
          icon={item.icon}
          name={item.name}
          options={item.options}
        />
      )}
    </li>
  );
};

export default NavItem;
