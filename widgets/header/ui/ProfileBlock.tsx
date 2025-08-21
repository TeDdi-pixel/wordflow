import { PopUpMenu } from "@/entities/pop-up-menu";
import { ProfileIcon } from "./ProfileIcon";
import { UserName } from "./UserName";
import { auth } from "@/auth";

export const ProfileBlock = async () => {
  const session = await auth();

  return (
    <div className="relative group w-max">
      <div
        className={`cursor-pointer hover:text-accent-text transition-colors flex items-center gap-2 ${
          session ? "text-accent-text" : "text-text"
        }`}
      >
        <ProfileIcon />

        <UserName />
      </div>

      <div className="absolute top-full left-0 w-full h-4" />

      <PopUpMenu />
    </div>
  );
};
