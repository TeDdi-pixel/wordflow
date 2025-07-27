import { useNavStore } from "@/store/useNavStore";
import { useEffect, useRef } from "react";

const useClickOutside = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isVisibleIndex, setIsVisibleIndex } = useNavStore((state) => state);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsVisibleIndex(null);
      }
    };

    if (isVisibleIndex !== null) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisibleIndex, setIsVisibleIndex]);
  return dropdownRef;
};

export default useClickOutside;
