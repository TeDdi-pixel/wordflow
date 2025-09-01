import LibraryIcon from "@/shared/icons/navigation/LibraryIcon";
import HistoryIcon from "@/shared/icons/navigation/HistoryIcon";
import HomeIcon from "@/shared/icons/navigation/HomeIcon";
import CardsIcon from "@/shared/icons/navigation/CardsIcon";
import { HiSquaresPlus } from "react-icons/hi2";
import CommunityIcon from "@/shared/icons/navigation/CommunityIcon";
import { FaAngleDown } from "react-icons/fa";
import { NavItemWithOptions, SingleNavItem } from "./types";

export const navigation = {
  regularPages: [
    {
      id: 0,
      icon: <HomeIcon />,
      name: "Головна",
      path: "/",
    },
    {
      id: 1,
      icon: <LibraryIcon />,
      name: "Бібліотека",
      path: "/library",
    },
    {
      id: 2,
      icon: <HistoryIcon />,
      name: "Історія",
      path: "/history",
    },
  ] as SingleNavItem[],
  games: [
    {
      id: 3,
      icon: <FaAngleDown />,
      name: "Картки",
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
    // {
    //   id: 4,
    //   icon: <FaAngleDown />,
    //   name: "Завчати",
    //   options: [
    //     {
    //       id: 0,
    //       icon: <HiSquaresPlus />,
    //       name: "Створити",
    //       path: "/create-memorize-set",
    //     },
    //     {
    //       id: 1,
    //       icon: <MemorizeIcon />,
    //       name: "Мої мемокартки",
    //       path: "/my-memorize-sets",
    //     },
    //     {
    //       id: 2,
    //       icon: <CommunityIcon />,
    //       name: "Ком'юніті",
    //       path: "/memorize-sets-community",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   icon: <FaAngleDown />,
    //   name: "Підбір",
    //   options: [
    //     {
    //       id: 0,
    //       icon: <HiSquaresPlus />,
    //       name: "Створити",
    //       path: "/create-selection-set",
    //     },
    //     {
    //       id: 1,
    //       icon: <SelectionIcon />,
    //       name: "Мої підбори",
    //       path: "/my-selection-sets",
    //     },
    //     {
    //       id: 2,
    //       icon: <CommunityIcon />,
    //       name: "Ком'юніті",
    //       path: "/selection-sets-community",
    //     },
    //   ],
    // },
    // {
    //   id: 6,
    //   icon: <FaAngleDown />,
    //   name: "Тест",
    //   options: [
    //     {
    //       id: 0,
    //       icon: <HiSquaresPlus />,
    //       name: "Створити",
    //       path: "/create-test",
    //     },
    //     {
    //       id: 1,
    //       icon: <TestIcon />,
    //       name: "Мої тести",
    //       path: "/my-tests",
    //     },
    //     {
    //       id: 2,
    //       icon: <CommunityIcon />,
    //       name: "Ком'юніті",
    //       path: "/tests-community",
    //     },
    //   ],
    // },
  ] as NavItemWithOptions[],
};
