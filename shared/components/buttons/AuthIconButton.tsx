import { ReactNode } from "react";

const AuthIconButton = ({ icon }: { icon: ReactNode }) => {
  return (
    <button
      type="submit"
      className="z-10 cursor-pointer w-805:max-w-[272px] h-[36px] w-full text-accent-text text-[18px] py-2 bg-button flex items-center justify-center rounded-default hover:bg-button-accent-2 hover:text-text-2 transition-colors ease-out duration-150"
    >
      {icon}
    </button>
  );
};

export default AuthIconButton;
