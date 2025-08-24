import { FiExternalLink } from "react-icons/fi";

export const AccentSquare = ({ color }: { color: string }) => {
  return (
    <span className="absolute top-0 right-0 w-fit h-fit p-1 flex items-center justify-center group-hover:translate-0 translate-x-[28px] -translate-y-[28px] rounded-[4px] transition-transform duration-300 scale-0 group-hover:scale-100">
      <span
        className="absolute inset-0 rounded-[4px]"
        style={{
          backgroundColor: color,
          filter: "brightness(70%)",
        }}
      />

      <FiExternalLink className="relative cursor-pointer w-[18px] h-[18px]" />
    </span>
  );
};
