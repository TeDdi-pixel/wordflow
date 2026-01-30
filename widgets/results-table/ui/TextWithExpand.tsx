"use client";

import { memo } from "react";
import useExpandText from "../model/useExpandText";

export const TextWithExpand = memo(({ text }: { text: string }) => {
  const { textRef, active, isTextTruncated, setActive } = useExpandText(text);

  return (
    <div
      className="md:absolute md:left-0 md:flex md:items-center md:justify-center md:w-full"
      onMouseEnter={() => isTextTruncated && setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <p
        ref={textRef}
        className={`text-accent text-[14px] sm:text-[16px] md:px-4 md:py-2 md:text-center md:absolute md:w-full md:rounded-default md:transition-all ${
          active
            ? "md:whitespace-normal md:z-10 md:bg-bg-accent-2 md:text-text-2 md:scale-110 md:shadow-md"
            : "md:truncate md:bg-transparent"
        }`}
      >
        {text}
      </p>
    </div>
  );
});
