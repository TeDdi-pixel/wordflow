"use client";

import { IoFilter } from "react-icons/io5";
import { FilterOptions } from "./FilterOptions";
import { useFiltersStore } from "@/shared/store/useFiltersStore";

export const Filter = ({ filterLabel }: { filterLabel: string }) => {
  const toggleFilters = useFiltersStore((state) => state.toggleFilters);

  return (
    <div className="relative md:mr-8 group">
      <button
        onClick={toggleFilters}
        className="flex items-center w-full gap-1.5 sm:gap-3"
      >
        <span className="flex justify-end">
          <IoFilter className="text-[20px] sm:text-[24px]" />
        </span>

        <span className="w-full whitespace-nowrap text-[12px] sm:text-[14px] cursor-default">
          {filterLabel}
        </span>
      </button>

      <FilterOptions />
    </div>
  );
};
