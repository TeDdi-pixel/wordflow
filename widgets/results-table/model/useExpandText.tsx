import { useEffect, useRef, useState } from "react";

const useExpandText = (text: string) => {
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

  return { textRef, active, isTextTruncated, setActive };
};

export default useExpandText;
