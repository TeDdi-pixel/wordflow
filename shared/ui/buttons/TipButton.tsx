import { ReactNode } from "react";

type Props = {
  tipText: string;
  onClick?: () => void;
  icon: ReactNode;
  side: "left" | "right";
  type?: "button" | "link";
  path?: string;
  isDisabled?: boolean;
};

const TipButton = ({
  tipText,
  onClick,
  icon,
  side,
  type = "button",
  path = "/",
  isDisabled = false,
}: Props) => {
  const tooltipClasses = `pointer-events-none absolute top-1/2 -translate-y-1/2 bg-bg-accent-2 text-text-2 text-sm px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all whitespace-nowrap z-10 ${
    side === "right" ? "right-full mr-3" : "left-full ml-3"
  }`;
  if (type === "link") {
    return (
      <a
        href={path}
        className="group relative max-w-[44px] w-full h-[44px] bg-fg hover:bg-bg-accent hover:text-accent flex items-center justify-center rounded-default transition-all ease-in-out unit-button-shadow cursor-pointer"
        aria-label={tipText}
      >
        {icon}
        <span className={tooltipClasses}>{tipText}</span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      disabled={isDisabled}
      className="group relative w-[44px] h-[44px] bg-fg hover:bg-bg-accent hover:text-accent flex items-center justify-center rounded-default transition-all ease-in-out unit-button-shadow cursor-pointer"
      aria-label={tipText}
    >
      {icon}
      <span className={tooltipClasses}>{tipText}</span>
    </button>
  );
};

export default TipButton;
