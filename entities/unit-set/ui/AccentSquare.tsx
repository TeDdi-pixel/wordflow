import { FiExternalLink } from "react-icons/fi";

export const AccentSquare = () => {
  return (
    <span className="absolute top-0 right-0 w-fit h-fit p-1 flex items-center justify-center group-hover:translate-0 translate-x-[28px] -translate-y-[28px] rounded-[4px] transition-transform duration-[215ms] scale-0 group-hover:scale-100 bg-bg-accent shadow-2xl">
      <FiExternalLink className="relative cursor-pointer w-[18px] h-[18px]" />
    </span>
  );
};
