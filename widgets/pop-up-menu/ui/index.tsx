import LogoutMenuItem from "./LogoutMenuItem";

import { MenuWrapper } from "./MenuWrapper";
import { MenuItem } from "./MenuItem";
import { menuButtons, TypePopUpMenu } from "../model/config";
import { Session } from "next-auth";

export const PopUpMenu = ({ session }: { session: Session | null }) => {
  return (
    session && (
      <MenuWrapper>
        {menuButtons.map((item: TypePopUpMenu) => (
          <MenuItem
            key={item.id}
            id={item.id}
            path={item.path}
            name={item.name}
            icon={item.icon}
          />
        ))}

        <LogoutMenuItem />
      </MenuWrapper>
    )
  );
};
