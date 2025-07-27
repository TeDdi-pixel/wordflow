import HistoryIcon from "@/shared/icons/navigation/HistoryIcon";
import LibraryIcon from "@/shared/icons/navigation/LibraryIcon";
import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";

export type TypePopUpMenu = {
  id: number;
  name: string;
  icon: ReactNode;
  path: string;
  apiCall?: string;
};

export const menuButtons: TypePopUpMenu[] = [
  {
    id: 0,
    name: "Профіль",
    icon: <FaUser />,
    path: "/profile",
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
  {
    id: 3,
    name: "Налаштування",
    icon: <RiSettings4Fill />,
    path: "/settings",
  },
];
