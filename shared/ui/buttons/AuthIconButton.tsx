import { ReactNode } from "react";
import Spinner from "../Spinner";

type Props = {
  icon: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  pending?: boolean;
};

const AuthIconButton = ({ icon, onClick, type, pending }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={pending}
      className={`z-10 cursor-pointer w-805:max-w-[272px] h-[36px] w-full text-text text-[18px] py-2 bg-fg flex items-center justify-center rounded-default transition-colors ${
        pending ? "" : "hover:bg-bg-accent-2 hover:text-text-2 "
      }`}
    >
      {pending ? <Spinner /> : icon}
    </button>
  );
};

export default AuthIconButton;
