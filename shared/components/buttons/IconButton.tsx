"use client";

import { ReactNode, memo } from "react";

type Props = {
  icon: ReactNode;
  handleClick?: () => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
};

const IconButton = memo(({ handleClick, icon, type, disabled }: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="cursor-pointer transition-all duration-200 hover:scale-110 text-accent"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
});

export default IconButton;
