import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  isDisabled: boolean;
  icon: ReactNode;
  animationKey: string;
};

const SendButton = ({ onClick, isDisabled, icon, animationKey }: Props) => {
  return (
    <button
      key={animationKey}
      className={`absolute top-1/2 right-0 -translate-y-1/2 text-[20px] transition-transform animate-appear-from-right ${
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
