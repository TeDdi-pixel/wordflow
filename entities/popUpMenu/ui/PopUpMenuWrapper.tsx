import { ReactNode } from "react";

export const PopUpMenuWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ul
      className="absolute right-0 top-[calc(100%+8px)] min-w-[185px] bg-popup rounded-2xl text-[12px] text-accent-text
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden
              border-6 border-border z-50"
    >
      {children}
    </ul>
  );
};
