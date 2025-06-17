import { NavigationItem } from "@/entities/navigation/config/navigation";
import Link from "next/link";

const NavItem = ({ name, icon, path }: Omit<NavigationItem, "id">) => {
  return (
    <li>
      <Link
        href={path}
        className="flex gap-1 items-center hover:text-accent-text duration-150 transition-colors"
      >
        <span className="text-[20px]">{icon}</span>
        <span className="font-medium">{name}</span>
      </Link>
    </li>
  );
};

export default NavItem;
