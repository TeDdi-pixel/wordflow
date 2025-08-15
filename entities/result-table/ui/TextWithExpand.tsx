"use client";
import { memo, useEffect, useRef, useState } from "react";

type Props = {
  text: string;
};

export const TextWithExpand = memo(({ text }: Props) => {
  const [active, setActive] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTextTruncated, setIsTextTruncated] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    let rafId: number | null = null;

    const checkTruncation = () => {
      setIsTextTruncated(element.scrollWidth > element.clientWidth);
    };

    checkTruncation();

    const observer = new ResizeObserver(() => {
      rafId = requestAnimationFrame(checkTruncation);
    });
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [text]);

  return (
    <div
      className="absolute flex items-center justify-center left-0 w-full"
      onMouseEnter={() => isTextTruncated && setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <p
        ref={textRef}
        className={`px-4 py-2 text-center w-full absolute rounded-default ease-out transition-all duration-150 ${
          active
            ? "whitespace-normal text-clip text-start z-10 bg-background-accent-2 text-text-2 px-[8px] scale-110 shadow-md"
            : "truncate bg-transparent"
        }`}
      >
        {text}
      </p>
    </div>
  );
});
