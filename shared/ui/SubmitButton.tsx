import React, { ReactNode } from "react";

type TypeProps = {
  icon?: ReactNode;
  text: string;
  className?: string;
};

const SubmitButton = ({ icon, text, className }: TypeProps) => {
  return (
    <button
      type="submit"
      className={
        className ??
        "w-full bg-button cursor-pointer py-1.5 rounded-[8px] text-accent-text flex gap-2 justify-center items-center hover:bg-button-accent hover:text-background transition-colors duration-150"
      }
    >
      {icon}
      {text}
    </button>
  );
};

export default SubmitButton;
