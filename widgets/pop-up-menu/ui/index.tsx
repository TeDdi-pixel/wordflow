import LogoutMenuItem from "./LogoutMenuItem";

import { MenuWrapper } from "./MenuWrapper";
import { MenuItem } from "./MenuItem";
import { auth } from "@/auth";
import { menuButtons, TypePopUpMenu } from "../model/config";

export const PopUpMenu = async () => {
  const session = await auth();

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
