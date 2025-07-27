import { checkForSession } from "@/shared/lib/session";
import LogoutMenuItem from "./LogoutMenuItem";
import { menuButtons, TypePopUpMenu } from "../config";
import { PopUpMenuWrapper } from "./PopUpMenuWrapper";
import { PopUpMenuItem } from "./PopUpMenuItem";

export const PopUpMenu = async () => {
  const isSession = await checkForSession();

  return (
    isSession && (
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
