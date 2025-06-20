import { PopUpMenu } from "@/entities/popUpMenu";
import { ProfileIcon } from "./ProfileIcon";
import { UserName } from "./UserName";
import { checkForSession } from "@/shared/lib/session";

export const ProfileBlock = async () => {
  const isSession = await checkForSession();

  return (
    <div className="relative group w-max">
      <div
        className={`cursor-pointer ${
          isSession ? "text-accent-text" : "text-text"
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
