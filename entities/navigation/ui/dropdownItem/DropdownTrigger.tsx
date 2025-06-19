import { ReactNode } from "react";
import { useDropdownStore } from "../../store";

type Props = {
  icon: ReactNode;
  name: string;
  id?: number;
};

export const DropdownTrigger = ({ id, icon, name }: Props) => {
  const { isVisibleIndex, setIsVisibleIndex } = useDropdownStore(
    (state) => state
  );
  const isDropdownActive = isVisibleIndex === id;

  return (
    <button
      onClick={() => setIsVisibleIndex(id ?? null)}
      className={`flex gap-1 items-center font-medium hover:text-accent-text duration-150 transition-colors cursor-pointer 
        ${isDropdownActive ? "text-accent-text" : ""}`}
    >
      {icon}
      {name}
    </button>
  );
};
