import { useCallback, useRef } from "react";

const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounce = useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => callback(...args), delay);
    },
    [delay, callback]
  );

  return debounce;
};

export default useDebounce;
