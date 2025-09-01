import FilterNewIcon from "@/shared/icons/unit/FilterNewIcon";
import FilterOldIcon from "@/shared/icons/unit/FilterOldIcon";
import LikeSmallIcon from "@/shared/icons/unit/LikeSmallIcon";
import { Route } from "next";
import { FaSortNumericUp, FaSortNumericDownAlt } from "react-icons/fa";

export const filterOptions = [
  {
    id: 0,
    path: "/?sort=likesDesc" as Route,
    text: "Найпопулярніші",
    icon: <LikeSmallIcon />,
  },

  {
    id: 1,
    path: "/?sort=createdDesc" as Route,
    text: "Спочатку нові",
    icon: <FilterNewIcon />,
  },
  {
    id: 2,
    path: "/" as Route,
    text: "Спочатку старі",
    icon: <FilterOldIcon />,
  },
  {
    id: 3,
    path: "/?sort=termsDesc" as Route,
    text: "Більше термінів",
    icon: <FaSortNumericUp className="text-[16px]" />,
  },
  {
    id: 4,
    path: "/?sort=termsAsc" as Route,
    text: "Менше термінів",
    icon: <FaSortNumericDownAlt className="text-[16px]" />,
  },
];
