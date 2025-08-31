import { IoFilter } from "react-icons/io5";
import { FilterOptions } from "./FilterOptions";

export const Filter = ({ filterLabel }: { filterLabel: string }) => {
  return (
    <div className="relative mr-8 group">
      <div className="flex items-center w-full gap-3">
        <span className="flex justify-end">
          <IoFilter className="text-[24px]" />
        </span>

        <span className="w-full whitespace-nowrap text-[14px]">
          {filterLabel}
        </span>
      </div>

      <FilterOptions />
    </div>
  );
};
