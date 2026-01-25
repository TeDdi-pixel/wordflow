"use client";

import { useEffect } from "react";
import { useBurgerMenuStore } from "../store/useBurgerMenuStore";

const useCancelScroll = () => {
  const isOpened = useBurgerMenuStore((state) => state.isOpened);

  useEffect(() => {
    if (!isOpened) return;

    const originalOverflowBody = document.body.style.overflow;
    const originalOverflowHtml = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflowBody;
      document.documentElement.style.overflow = originalOverflowHtml;
    };
  }, [isOpened]);
};

export default useCancelScroll;
