import { SessionUser } from "@/shared/model/types/types";
import { getSession } from "@/shared/lib/session";

export const UserName = async () => {
  const session = (await getSession()) as SessionUser;

  return (
    <p className="flex group-hover:text-accent-text transition-colors">
      {session?.username}
    </p>
  );
};
