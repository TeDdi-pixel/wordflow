import { Route } from "next";
import Link from "next/link";
import { ReactNode } from "react";

export const Option = ({
  icon,
  text,
  path,
}: {
  icon: ReactNode;
  text: string;
  path: Route;
}) => {
  return (
    <li className="cursor-pointer group/item hover:bg-bg-accent-2 hover:text-text-2 min-w-[154px]">
      <Link
        href={path}
        className="flex items-center gap-2.5 group-hover/item:translate-x-2 transition-transform px-4 py-2"
      >
        <span>{icon}</span>
        <span className=" w-fit">{text}</span>
      </Link>{" "}
    </li>
  );
};
