import { getUserEmail, getUserName } from "@/shared/lib/session";
import { getDbUserName } from "@/shared/api/getUserName";

export const UserName = async () => {
  const email = await getUserEmail();
  const username = await getUserName();

  const displayName = username || (email ? await getDbUserName(email) : null);

  return (
    <p className="flex group-hover:text-text transition-colors">
      {displayName}
    </p>
  );
};
