import LogoutMenuItem from "./LogoutMenuItem";
import { menuButtons, TypePopUpMenu } from "../config";
import { PopUpMenuWrapper } from "./PopUpMenuWrapper";
import { PopUpMenuItem } from "./PopUpMenuItem";
import { auth } from "@/auth";

export const PopUpMenu = async () => {
  const session = await auth();

  return (
    session && (
      <PopUpMenuWrapper>
        {menuButtons.map((item: TypePopUpMenu) => (
          <PopUpMenuItem
            key={item.id}
            id={item.id}
            path={item.path}
            name={item.name}
            icon={item.icon}
          />
        ))}
        <LogoutMenuItem />
      </PopUpMenuWrapper>
    )
  );
};
