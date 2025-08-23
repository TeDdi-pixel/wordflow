import CardsIcon from "@/shared/icons/navigation/CardsIcon";
import HistoryIcon from "@/shared/icons/navigation/HistoryIcon";
import LibraryIcon from "@/shared/icons/navigation/LibraryIcon";
import { Route } from "next";
import { ReactNode } from "react";

export type TypePopUpMenu = {
  id: number;
  name: string;
  icon: ReactNode;
  path: Route;
  apiCall?: string;
};

export const menuButtons: TypePopUpMenu[] = [
  // {
  //   id: 0,
  //   name: "Профіль",
  //   icon: <FaUser />,
  //   path: "/profile",
  // },
  {
    id: 0,
    name: "Мої юніти",
    icon: <CardsIcon />,
    path: "/history",
  },
  {
    id: 1,
    name: "Бібліотека",
    icon: <LibraryIcon />,
    path: "/library",
  },
  {
    id: 2,
    name: "Історія",
    icon: <HistoryIcon />,
    path: "/history",
  },
];
