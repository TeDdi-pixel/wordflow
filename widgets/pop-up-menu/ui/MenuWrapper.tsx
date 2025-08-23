import { ReactNode } from "react";

export const MenuWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="absolute right-0 top-[calc(100%+8px)] min-w-[185px] bg-fg rounded-2xl text-[12px] text-text opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden border-6 border-bg z-50 group-hover:scale-100 scale-80">
      {children}
    </ul>
  );
};
