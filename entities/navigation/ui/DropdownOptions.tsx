import Link from "next/link";
import { NavigationItemOption } from "../../../widgets/navigation/config";

export const DropdownOptions = ({
  options,
}: {
  options: NavigationItemOption[];
}) => (
  <div className="relative">
    <div className="absolute left-0 top-0 pt-[7px] pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:visible opacity-0 scale-80 group-hover:scale-100 invisible transition-all ease-out duration-150 z-50">
      <ul className="rounded-2xl min-w-[185px] w-full bg-foreground overflow-hidden border-6 border-border">
        {options.map((option: NavigationItemOption) => (
          <Link
            key={option.id}
            href={option.path}
            className="group/item px-4 py-2 block hover:bg-active-nav-item hover:text-active-nav-text text-text cursor-pointer"
          >
            <li className="flex gap-2.5 h-[20px] items-center group-hover/item:translate-x-2 translate-x-0 transition-transform duration-150 ease-out">
              <span className="text-[16px]">{option.icon}</span>
              <span className="text-[12px]">{option.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </div>
);
