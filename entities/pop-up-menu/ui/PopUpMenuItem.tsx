import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  id: number;
  path: string;
  name: string;
  icon: ReactNode;
};

export const PopUpMenuItem = ({ id, path, name, icon }: Props) => {
  return (
    <li
      key={id}
      className="group/item hover:bg-active-nav-item hover:text-active-nav-text h-[34px] w-full cursor-pointer"
    >
      <Link
        href={path}
        className="flex items-center gap-2.5 group-hover/item:translate-x-2 translate-x-0 px-4 py-2 transition-transform ease-out duration-150"
      >
        <span className="text-[14px]">{icon}</span>
        {name}
      </Link>
    </li>
  );
};
