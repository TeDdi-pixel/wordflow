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
      className="hover:bg-background-accent hover:text-accent px-4 py-2"
    >
      <Link href={path} className="flex items-center gap-2.5">
        <span className="text-[14px]">{icon}</span>
        {name}
      </Link>
    </li>
  );
};
