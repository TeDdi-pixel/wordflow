"use client";

import { useFiltersStore } from "@/shared/store/useFiltersStore";
import { useEffect } from "react";
import { useNavigationStore } from "../store/useNavigationStore";

const useClickOutside = (isOpened: boolean) => {
  const closeFilters = useFiltersStore((state) => state.closeFilters);
  const closeOptions = useNavigationStore((state) => state.closeOptions);

  useEffect(() => {
    if (!isOpened) return;

    const handleClickOutside = () => {
      closeFilters();
      closeOptions();
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpened, closeFilters, closeOptions]);
};

export default useClickOutside;
