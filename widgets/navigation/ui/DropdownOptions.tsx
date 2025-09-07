import Link from "next/link";
import { NavItemOptions } from "../model/types";

export const DropdownOptions = ({ options }: { options: NavItemOptions[] }) => (
  <div className="relative">
    <div className="absolute left-0 top-0 pt-[7px] pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:visible opacity-0 scale-80 group-hover:scale-100 invisible transition-all z-50">
      <ul className="rounded-2xl min-w-[185px] w-full bg-fg overflow-hidden border-6 border-bg">
        {options.map((option: NavItemOptions) => (
          <Link
            key={option.id}
            href={option.path}
            className="block px-4 py-2 cursor-pointer group/item hover:bg-bg-accent-2 hover:text-bg-accent text-text"
          >
            <li className="flex gap-2.5 h-[20px] items-center group-hover/item:translate-x-2 translate-x-0 transition-transform">
              <span className="text-[16px]">{option.icon}</span>

              <span className="text-[12px]">{option.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </div>
);
