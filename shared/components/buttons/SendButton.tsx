import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  isDisabled: boolean;
  icon: ReactNode;
};

const SendButton = ({ onClick, isDisabled, icon }: Props) => {
  return (
    <button
      className={`absolute top-1/2 right-0 -translate-y-1/2 text-[20px] transition-transform duration-150 ease-out ${
        isDisabled
          ? "cursor-not-allowed scale-110"
          : "cursor-pointer scale-100 hover:scale-110"
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
};

export default SendButton;
