import { memo } from "react";
import { useNavStore } from "../../../../store/useNavStore";
import { Props } from "../types";

export const LabelWithIcon = memo(({ id, name, icon }: Props) => {
  const isDropdownActive = useNavStore(
    (state) => state.isVisibleIndex === id && state.activeItemId === id
  );

  return (
    <>
      {name}
      <span
        className={`inline-block transition-transform duration-150 ${
          isDropdownActive ? "rotate-180" : "rotate-0"
        }`}
      >
        {icon}
      </span>
    </>
  );
});
