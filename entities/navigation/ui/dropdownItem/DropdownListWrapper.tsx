import { memo, ReactNode } from "react";
import { useNavStore } from "../../../../store/useNavStore";

type Props = {
  id?: number;
  children: ReactNode;
};

export const DropdownListWrapper = memo(({ id, children }: Props) => {
  const isDropdownActive = useNavStore((state) => state.isVisibleIndex === id);
  return (
    <ul
      className={`absolute top-[40px] -left-[6px] rounded-2xl transition-all duration-300 z-10 min-w-[185px] w-full bg-foreground overflow-hidden border-6 border-border
      ${
        isDropdownActive
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      {children}
    </ul>
  );
});
