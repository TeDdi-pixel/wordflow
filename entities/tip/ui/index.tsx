type Props = {
  tipDisplay: boolean;
  tipVisible: boolean;
  tipMessage: string;
};

export const Tip = ({ tipVisible, tipDisplay, tipMessage }: Props) => {
  return (
    <div
      className={`absolute top-1/2 -left-[321px] py-1 px-4 select-none bg-popup w-[305px] -translate-y-1/2 rounded-default transition-opacity ease-linear duration-150 z-50 ${
        tipVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        visibility: tipDisplay ? "visible" : "hidden",
        pointerEvents: tipDisplay ? "auto" : "none",
      }}
    >
      {tipMessage}
    </div>
  );
};
