import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  isDisabled: boolean;
  icon: ReactNode;
};

const SendButton = ({ onClick, isDisabled, icon }: Props) => {
  return (
    <button
      className={`absolute top-1/2 right-0 -translate-y-1/2 text-[20px] ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer "
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon}
    </button>
  );
};

export default SendButton;
