import { getUserName } from "@/shared/lib/user/getUserName";
import { auth } from "@/auth";

export const UserName = async () => {
  const session = await auth();

  const dbUserName = await getUserName(session?.user?.email ?? null);
  const userName = dbUserName || session?.user?.name;

  return (
    <p className="flex group-hover:text-accent-text transition-colors">
      {userName}
    </p>
  );
};
