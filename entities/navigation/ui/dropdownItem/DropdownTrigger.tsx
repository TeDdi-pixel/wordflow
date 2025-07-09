import { memo, ReactNode } from "react";
import { useNavStore } from "../../store";
import { LabelWithIcon } from "./LabelWithIcon";
import { FakeTextWithIcon } from "./FakeTextWithIcon";

type Props = {
  icon: ReactNode;
  name: string;
  id?: number;
};

export const DropdownTrigger = memo(({ id, icon, name }: Props) => {
  const setActiveItem = useNavStore((state) => state.setActiveItem);
  const setIsVisibleIndex = useNavStore((state) => state.setIsVisibleIndex);
  const isDropdownActive = useNavStore(
    (state) => state.isVisibleIndex === id && state.activeItemId === id
  );
  const handleItemClick = () => {
    setIsVisibleIndex(id ?? null);
    setActiveItem(id ?? null);
  };

  const styles = isDropdownActive
    ? "-translate-y-[33px] rounded-[8px] text-active-nav-text bg-active-nav-item"
    : "translate-y-0 group-hover:-translate-y-[33px] bg-hover-nav-item text-accent-text scale-100";

  return (
    <div className="relative group max-h-[33px] h-full overflow-hidden select-none">
      <FakeTextWithIcon icon={icon} name={name} />
      <button
        onClick={handleItemClick}
        className={`absolute flex gap-1 items-center z-10 rounded-4xl px-[12px] py-[6px] font-medium duration-300 transition-all cursor-pointer group-hover:scale-90
        ${styles}`}
      >
        <LabelWithIcon name={name} icon={icon} />
      </button>
    </div>
  );
});
