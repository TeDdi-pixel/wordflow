import { Route } from "next";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  id: number;
  path: Route;
  name: string;
  icon: ReactNode;
};

export const MenuItem = ({ id, path, name, icon }: Props) => {
  return (
    <li
      key={id}
      className="group/item hover:bg-bg-accent-2 hover:text-bg-accent h-[34px] w-full cursor-pointer"
    >
      <Link
        href={path}
        className="flex items-center gap-2.5 group-hover/item:translate-x-2 translate-x-0 px-4 py-2 transition-transform"
      >
        <span className="text-[14px]">{icon}</span>
        {name}
      </Link>
    </li>
  );
};
