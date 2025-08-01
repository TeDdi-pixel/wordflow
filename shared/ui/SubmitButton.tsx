import { ReactNode } from "react";

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
        "w-full bg-button cursor-pointer py-1.5 rounded-default text-accent-text flex gap-2 justify-center items-center hover:bg-background-accent-2 hover:text-text-2 transition-colors duration-150"
      }
    >
      {icon}
      {text}
    </button>
  );
};

export default SubmitButton;
