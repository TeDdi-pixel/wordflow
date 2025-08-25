import { Session } from "next-auth";
import Link from "next/link";
import { FaUser, FaRegUser } from "react-icons/fa";

export const ProfileIcon = ({ session }: { session: Session | null }) => {
  return (
    <Link href="/login">
      {session ? (
        <FaUser className="text-[17px] cursor-pointer group-hover:text-text transition-colors" />
      ) : (
        <FaRegUser className="text-[17px]cursor-pointer group-hover:text-text transition-colors" />
      )}
    </Link>
  );
};
