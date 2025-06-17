"use client";
import React from "react";
import HomeUnfocused from "./HomeUnfocused";
import HomeFocused from "./HomeFocused";
import { usePathname } from "next/navigation";

const HomeIcon = () => {
  const pathname = usePathname();
  return <>{pathname === "/" ? <HomeFocused /> : <HomeUnfocused />}</>;
};

export default HomeIcon;
