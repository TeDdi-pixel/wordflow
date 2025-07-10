import React, { memo } from "react";
import { Props } from "../types";
import { LabelWithIcon } from "./LabelWithIcon";
import { useNavStore } from "../../store";

export const FakeTextWithIcon = memo(({ id, name, icon }: Props) => {
  const isDropdownActive = useNavStore(
    (state) => state.isVisibleIndex === id && state.activeItemId === id
  );
  return (
    <div
      className={`px-[12px] py-[6px] flex gap-1 items-center font-medium hover:text-accent-text transition-all cursor-pointer text-text duration-300 h-[33px] group-hover:opacity-25 group-hover:scale-50
        ${isDropdownActive ? "scale-50 opacity-50" : "scale-100 opacity-100"}`}
    >
      <LabelWithIcon id={id} name={name} icon={icon} />
    </div>
  );
});
