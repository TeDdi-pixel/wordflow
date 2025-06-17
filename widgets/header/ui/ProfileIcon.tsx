import Link from "next/link";
import { FaUser, FaRegUser } from "react-icons/fa";
import { getSession } from "@/shared/model/session";

export const ProfileIcon = async () => {
  const session = await getSession();
  return (
    <Link href="/login">
      {session ? (
        <FaUser className="text-[17px] text-text cursor-pointer group-hover:text-accent-text transition-colors" />
      ) : (
        <FaRegUser className="text-[17px] text-text cursor-pointer group-hover:text-accent-text transition-colors" />
      )}
    </Link>
  );
};
