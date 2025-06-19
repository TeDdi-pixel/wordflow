import { useDropdownStore } from "@/entities/navigation/store";
import { useEffect, useRef } from "react";

const useClickOutside = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isVisibleIndex, setIsVisibleIndex } = useDropdownStore(
    (state) => state
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !dropdownRef.current.children
      ) {
        setIsVisibleIndex(null);
      }
    };

    if (isVisibleIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisibleIndex, setIsVisibleIndex]);
  return dropdownRef;
};

export default useClickOutside;
