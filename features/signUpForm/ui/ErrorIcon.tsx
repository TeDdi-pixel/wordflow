import { Tip } from "@/entities/tip";
import React from "react";

type Props = {
  tipDisplay: boolean;
  tipVisible: boolean;
  tipMessage: string;
  setTip: (tip: boolean) => void;
};

const ErrorIcon = ({ setTip, tipMessage, tipDisplay, tipVisible }: Props) => {
  return (
    <div className="absolute top-1/2 right-[8px] -translate-y-1/2 w-4 h-4 z-10">
      <Tip
        tipMessage={tipMessage}
        tipDisplay={tipDisplay}
        tipVisible={tipVisible}
      />
      <span
        className=""
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
      >
        <span className="absolute left-1/2 top-1/2 w-4 h-[3px] bg-error rotate-45 -translate-x-1/2 -translate-y-1/2 rounded" />
        <span className="absolute left-1/2 top-1/2 w-4 h-[3px] bg-error -rotate-45 -translate-x-1/2 -translate-y-1/2 rounded" />
      </span>
    </div>
  );
};

export default ErrorIcon;
