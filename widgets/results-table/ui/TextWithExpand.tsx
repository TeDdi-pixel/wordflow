"use client";

import { memo } from "react";
import useExpandText from "../model/useExpandText";

export const TextWithExpand = memo(({ text }: { text: string }) => {
  const { textRef, active, isTextTruncated, setActive } = useExpandText(text);

  return (
    <div
      className="absolute left-0 flex items-center justify-center w-full"
      onMouseEnter={() => isTextTruncated && setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <p
        ref={textRef}
        className={`px-4 py-2 text-center absolute w-full rounded-default transition-all ${
          active
            ? "whitespace-normal z-10 bg-bg-accent-2 text-text-2 scale-110 shadow-md"
            : "truncate bg-transparent"
        }`}
      >
        {text}
      </p>
    </div>
  );
});
