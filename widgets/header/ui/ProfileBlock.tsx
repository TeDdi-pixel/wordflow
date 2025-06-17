import PopUpMenu from "@/entities/popUpMenu/ui";
import { ProfileIcon } from "./ProfileIcon";
import { UserName } from "./UserName";

export const ProfileBlock = async () => {
  return (
    <div className="relative group cursor-pointer hover:text-accent-text transition-colors flex items-center gap-2">
      <ProfileIcon />
      <UserName />
      <PopUpMenu />
    </div>
  );
};
