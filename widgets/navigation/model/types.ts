import { Route } from "next";
import { ReactNode } from "react";

export type NavItemWithOptionsProps = {
  item: {
    id: number;
    icon: ReactNode;
    name: string;
    path?: string;
    options?: NavItemOptions[];
  };
};

export type SingleNavItemProps = {
  item: {
    id: number;
    icon: ReactNode;
    name: string;
    path: Route;
    options?: NavItemOptions[];
  };
};

export type NavItemOptions = {
  id: number;
  icon: ReactNode;
  name: string;
  path: Route;
};

export type SingleNavItem = {
  id: number;
  icon: ReactNode;
  name: string;
  path: Route;
  options?: never;
};

export type NavItemWithOptions = {
  id: number;
  icon: ReactNode;
  name: string;
  path?: never;
  options: NavItemOptions[];
};

export type NavigationItem = SingleNavItem | NavItemWithOptions;
