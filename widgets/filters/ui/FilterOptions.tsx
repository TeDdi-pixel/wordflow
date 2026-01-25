"use client";

import { Option } from "./Option";
import { filterOptions } from "../model/filterOptions";
import { useFiltersStore } from "@/shared/store/useFiltersStore";
import useClickOutside from "@/shared/hooks/useClickOutside";

export const FilterOptions = () => {
  const isOpened = useFiltersStore((state) => state.isOpened);
  const closeFilters = useFiltersStore((state) => state.closeFilters);

  useClickOutside(isOpened);

  return (
    <div
      className={`absolute pt-2 -right-4 w-[200px] transition-all opacity-0 z-[9998] group-hover:opacity-100 group-hover:scale-100  group-hover:pointer-events-auto ${
        isOpened
          ? `scale-100 pointer-events-auto opacity-100`
          : "pointer-events-none scale-80 opacity-0"
      }`}
      onClick={closeFilters}
    >
      <ul className="text-[12px] whitespace-nowrap bg-fg border-6 border-bg rounded-2xl overflow-hidden">
        {filterOptions.map((item) => (
          <Option
            key={item.id}
            path={item.path}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </ul>
    </div>
  );
};
