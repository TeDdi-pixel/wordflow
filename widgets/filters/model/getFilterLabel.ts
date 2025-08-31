import { TypeSort } from "../../../shared/model/types/types";

export const getFilterLabel = (sort: TypeSort) => {
  switch (sort) {
    case "createdDesc":
      return "Спочатку нові";
    case "createdDesc":
      return "Спочатку старі";
    case "likesDesc":
      return "Найпопулярніші";
    case "termsDesc":
      return "Більше термінів";
    case "termsAsc":
      return "Меньше термінів";

    default:
      return "Спочатку старі";
  }
};
