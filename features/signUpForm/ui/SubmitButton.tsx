import React, { ReactNode } from "react";

type TypeProps = {
  icon?: ReactNode;
  text: string;
  className?: string;
  isPasswordSafe?: boolean;
};

const SubmitButton = ({ icon, text, className, isPasswordSafe }: TypeProps) => {
  return (
    <button
      type="submit"
      disabled={!isPasswordSafe}
      className={
        className ??
        `w-full bg-button cursor-pointer py-1.5 rounded-[8px] flex gap-2 justify-center items-center ${
          isPasswordSafe
            ? "hover:bg-button-accent hover:text-background transition-colors duration-150 text-accent-text"
            : "text-darker-text"
        }`
      }
    >
      {icon}
      {text}
    </button>
  );
};

export default SubmitButton;
