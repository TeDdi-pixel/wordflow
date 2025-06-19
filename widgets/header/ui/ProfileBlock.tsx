import { PopUpMenu } from "@/entities/popUpMenu";
import { ProfileIcon } from "./ProfileIcon";
import { UserName } from "./UserName";
import { getSession } from "@/shared/model/session";

export const ProfileBlock = async () => {
  const session = await getSession();

  return (
    <div className="relative group w-max">
      <div
        className={`cursor-pointer ${
          session ? "text-accent-text" : "text-text"
        } hover:text-accent-text transition-colors flex items-center gap-2`}
      >
        <ProfileIcon />
        <UserName />
      </div>
      <div className="absolute top-full left-0 w-full h-4" />
      <PopUpMenu />
    </div>
  );
};
