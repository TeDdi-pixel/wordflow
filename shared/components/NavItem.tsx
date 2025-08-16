import {
  DropdownOptions,
  NavItemWithOptions,
  SingleNavItem,
} from "@/entities/navigation";
import { NavigationItemOption } from "@/widgets/navigation/config";
import { ReactNode } from "react";

type Props = {
  item: {
    id: number;
    icon: ReactNode;
    name: string;
    path?: string;
    options?: NavigationItemOption[];
  };
};

const NavItem = ({ item }: Props) => {
  return (
    <li className="group">
      <div className="relative max-h-[33px] h-full overflow-hidden select-none">
        {!item.options && item.path ? (
          <SingleNavItem item={item} />
        ) : (
          <NavItemWithOptions item={item} />
        )}
      </div>
      {item.options && <DropdownOptions options={item.options} />}
    </li>
  );
};

export default NavItem;
