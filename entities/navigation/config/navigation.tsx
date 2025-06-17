import { ReactNode } from "react";
import MemorizeIcon from "@/shared/icons/navigation/MemorizeIcon";
import SelectionIcon from "@/shared/icons/navigation/SelectionIcon";
import TestIcon from "@/shared/icons/navigation/TestIcon";
import LibraryIcon from "@/shared/icons/navigation/LibraryIcon";
import HistoryIcon from "@/shared/icons/navigation/HistoryIcon";
import HomeIcon from "@/shared/icons/navigation/HomeIcon";
import CardsIcon from "@/shared/icons/navigation/CardsIcon";

export type NavigationItem = {
  id: number;
  icon: ReactNode;
  name: string;
  path: string;
};

export const navigation = {
  games: [
    {
      id: 0,
      icon: <CardsIcon />,
      name: "Картки",
      path: "/cards",
    },
    {
      id: 1,
      icon: <MemorizeIcon />,
      name: "Завчати",
      path: "/memorize",
    },
    {
      id: 2,
      icon: <SelectionIcon />,
      name: "Підбір",
      path: "/selection",
    },
    {
      id: 3,
      icon: <TestIcon />,
      name: "Тест",
      path: "/test",
    },
  ],
  regularPages: [
    {
      id: 4,
      icon: <HomeIcon />,
      name: "Головна",
      path: "/",
    },
    {
      id: 5,
      icon: <LibraryIcon />,
      name: "Бібліотека",
      path: "/library",
    },
    {
      id: 6,
      icon: <HistoryIcon />,
      name: "Історія",
      path: "/history",
    },
  ],
};
