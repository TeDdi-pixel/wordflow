import { ReactNode } from "react";

export type Props = {
  id?: number;
  name: string;
  icon: ReactNode;
  isDropdownActive?: boolean;
};
