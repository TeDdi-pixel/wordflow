import { DropdownOptions } from "@/widgets/navigation/ui/DropdownOptions";
import { NavItemWithOptions } from "@/widgets/navigation/ui/NavItemWithOptions";
import { SingleNavItem } from "@/widgets/navigation/ui/SingleNavItem";
import { NavigationItem } from "../model/types";

const NavItem = ({ item }: { item: NavigationItem }) => {
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
