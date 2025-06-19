import { SessionUser } from "@/shared/lib/types/types";
import { getSession } from "@/shared/model/session";

export const UserName = async () => {
  const session = (await getSession()) as SessionUser;

  return (
    <p className="flex group-hover:text-accent-text transition-colors">
      {session?.username}
    </p>
  );
};
