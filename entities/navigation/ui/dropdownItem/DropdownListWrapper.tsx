import { ReactNode } from "react";
import { useDropdownStore } from "../../store";

type Props = {
  id?: number;
  children: ReactNode;
};

const DropdownListWrapper = ({ id, children }: Props) => {
  const { isVisibleIndex } = useDropdownStore((state) => state);
  const isDropdownActive = isVisibleIndex === id;

  return (
    <ul
      className={`absolute top-[40px] -left-[6px] rounded-2xl transition-all z-10 min-w-[185px] w-full bg-foreground overflow-hidden border-6 border-background
        ${
          isDropdownActive
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
    >
      {children}
    </ul>
  );
};

export default DropdownListWrapper;
