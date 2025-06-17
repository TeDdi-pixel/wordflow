import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";

export type TypePopUpMenu = {
  id: number;
  name: string;
  icon: ReactNode;
  href: string;
  apiCall?: string;
};

export const menuConfig: TypePopUpMenu[] = [
  { id: 0, name: "Profile", icon: <FaUser />, href: "/profile" },
];
