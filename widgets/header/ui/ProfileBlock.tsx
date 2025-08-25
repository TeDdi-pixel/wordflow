import { PopUpMenu } from "@/widgets/pop-up-menu";
import { ProfileIcon } from "../../../entities/user/ui/ProfileIcon";
import { UserName } from "../../../entities/user/ui/UserName";
import { Session } from "next-auth";

export const ProfileBlock = ({
  session,
  displayName,
}: {
  session: Session | null;
  displayName: string;
}) => {
  return (
    <div className="relative group w-max">
      <div className="cursor-pointer hover:text-text transition-colors flex items-center gap-2">
        <ProfileIcon session={session} />

        <UserName displayName={displayName} />
      </div>

      <PopUpMenu session={session} />
    </div>
  );
};
