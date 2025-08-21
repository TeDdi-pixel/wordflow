import {
  DropdownOptions,
  NavItemWithOptions,
  SingleNavItem,
} from "@/entities/navigation";
import { NavigationItem } from "@/widgets/navigation/config";

type Props = {
  item: NavigationItem;
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
