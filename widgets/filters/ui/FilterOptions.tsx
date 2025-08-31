import React from "react";
import { Option } from "./Option";
import { filterOptions } from "../model/filterOptions";

export const FilterOptions = () => {
  return (
    <div className="absolute pt-2 -right-4 w-[200px] group-hover:scale-100 scale-80 transition-all group-hover:pointer-events-auto group-hover:opacity-100 opacity-0 z-[9999] pointer-events-none">
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
