import { auth } from "@/auth";
import { Logo } from "./Logo";
import { ProfileBlock } from "./ProfileBlock";
import { getUserEmail, getUserName } from "@/shared/lib/session";
import { getDbUserName } from "@/shared/api/getUserName";

export const Header = async () => {
  const session = await auth();

  const email = await getUserEmail();
  const username = await getUserName();
  const displayName = username || (email ? await getDbUserName(email) : null);

  return (
    <header className="max-w-[1440px] w-full mx-auto max-h-[36px] flex items-center justify-between px-8 mb-[50px]">
      <nav className="flex items-center justify-between w-full">
        <Logo />

        <ProfileBlock displayName={displayName} session={session} />
      </nav>
    </header>
  );
};
