import { ReactNode } from "react";
import MemorizeIcon from "@/shared/icons/navigation/MemorizeIcon";
import SelectionIcon from "@/shared/icons/navigation/SelectionIcon";
import TestIcon from "@/shared/icons/navigation/TestIcon";
import LibraryIcon from "@/shared/icons/navigation/LibraryIcon";
import HistoryIcon from "@/shared/icons/navigation/HistoryIcon";
import HomeIcon from "@/shared/icons/navigation/HomeIcon";
import CardsIcon from "@/shared/icons/navigation/CardsIcon";
import { HiSquaresPlus } from "react-icons/hi2";
import CommunityIcon from "@/shared/icons/navigation/community";
import { FaAngleDown } from "react-icons/fa";

export type NavigationItemOption = {
  id: number;
  icon: ReactNode;
  name: string;
  path?: string;
};

export type NavigationItem = {
  id: number;
  icon: ReactNode;
  name: string;
  path?: string;
  options?: NavigationItemOption[];
};

export const navigation = {
  games: [
    {
      id: 0,
      icon: <FaAngleDown />,
      name: "Картки",
      path: "/cards",
      options: [
        {
          id: 0,
          icon: <HiSquaresPlus />,
          name: "Створити",
          path: "/create-card-set",
        },
        {
          id: 1,
          icon: <CardsIcon />,
          name: "Мої картки",
          path: "/my-card-sets",
        },
        {
          id: 2,
          icon: <CommunityIcon />,
          name: "Ком'юніті",
          path: "/card-sets-community",
        },
      ],
    },
    {
      id: 1,
      icon: <FaAngleDown />,
      name: "Завчати",
      options: [
        {
          id: 0,
          icon: <HiSquaresPlus />,
          name: "Створити",
          path: "/create-memorize-set",
        },
        {
          id: 1,
          icon: <MemorizeIcon />,
          name: "Мої мемокартки",
          path: "/my-memorize-sets",
        },
        {
          id: 2,
          icon: <CommunityIcon />,
          name: "Ком'юніті",
          path: "/memorize-sets-community",
        },
      ],
    },
    {
      id: 2,
      icon: <FaAngleDown />,
      name: "Підбір",
      options: [
        {
          id: 0,
          icon: <HiSquaresPlus />,
          name: "Створити",
          path: "/create-selection-set",
        },
        {
          id: 1,
          icon: <SelectionIcon />,
          name: "Мої підбори",
          path: "/my-selection-sets",
        },
        {
          id: 2,
          icon: <CommunityIcon />,
          name: "Ком'юніті",
          path: "/selection-sets-community",
        },
      ],
    },
    {
      id: 3,
      icon: <FaAngleDown />,
      name: "Тест",

      options: [
        {
          id: 0,
          icon: <HiSquaresPlus />,
          name: "Створити",
          path: "/create-test",
        },
        {
          id: 1,
          icon: <TestIcon />,
          name: "Мої тести",
          path: "/my-tests",
        },
        {
          id: 2,
          icon: <CommunityIcon />,
          name: "Ком'юніті",
          path: "/test-community",
        },
      ],
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
