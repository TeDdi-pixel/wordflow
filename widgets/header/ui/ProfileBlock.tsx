import { PopUpMenu } from "@/widgets/pop-up-menu";
import { ProfileIcon } from "../../../entities/user/ui/ProfileIcon";
import { UserName } from "../../../entities/user/ui/UserName";

export const ProfileBlock = () => {
  return (
    <div className="relative group w-max">
      <div className="cursor-pointer hover:text-text transition-colors flex items-center gap-2">
        <ProfileIcon />

        <UserName />
      </div>

      <PopUpMenu />
    </div>
  );
};
