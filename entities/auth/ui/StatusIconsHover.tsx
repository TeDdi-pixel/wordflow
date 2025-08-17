import { MouseEventHandler, ReactNode } from "react";

type StatusIconHoverProps = {
  isPasswordSafe: boolean;
  handleMouseEnter: MouseEventHandler<HTMLDivElement>;
  handleMouseLeave: MouseEventHandler<HTMLDivElement>;
  successIcon: ReactNode;
  errorIcon: ReactNode;
  tipMessage: boolean;
};

export const StatusIconsHover = ({
  isPasswordSafe,
  handleMouseEnter,
  handleMouseLeave,
  successIcon,
  errorIcon,
  tipMessage,
}: StatusIconHoverProps) => {
  return (
    <div
      className={`absolute top-1/2 right-[0px] -translate-y-1/2 z-10 transition-all duration-150 ease-out scale-80 ${
        tipMessage
          ? "opacity-100 translate-x-0 scale-100"
          : "opacity-0 translate-x-[26px] pointer-events-none"
      }`}
    >
      <div
        className={`flex items-center justify-center absolute top-1/2 -right-[17px] -translate-y-1/2 w-[36px] h-[36px] cursor-pointer transition-transform duration-150
          ${
            isPasswordSafe
              ? "scale-100 -translate-x-1/2"
              : "scale-0 pointer-events-none translate-x-0"
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {successIcon}
      </div>

      <div
        className={`flex items-center justify-center absolute top-1/2 -right-[17px] -translate-y-1/2 w-[36px] h-[36px] cursor-pointer transition-transform duration-150
        ${
          !isPasswordSafe
            ? "scale-100 -translate-x-1/2"
            : "scale-0 pointer-events-none translate-x-0"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {errorIcon}
      </div>
    </div>
  );
};
