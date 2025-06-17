import { getSession } from "@/shared/model/session";
import LogoutMenuItem from "./LogoutMenuItem";
import Link from "next/link";
import { menuConfig, TypePopUpMenu } from "../config";

const PopUpMenu = async () => {
  const session = await getSession();

  return (
    session && (
      <ul className="absolute right-0 top-[39px] min-w-[165px] w-full py-1 bg-popup rounded-2xl text-[12px] text-accent-text opacity-0 group-hover:opacity-100 transition-opacity border-6 border-border-dark">
        {menuConfig?.map((item: TypePopUpMenu) => (
          <li key={item.id} className="mx-4">
            <Link href={item.href} className="flex items-center gap-2">
              {item.icon} {item.name}{" "}
            </Link>
          </li>
        ))}
        <LogoutMenuItem />
      </ul>
    )
  );
};

export default PopUpMenu;
