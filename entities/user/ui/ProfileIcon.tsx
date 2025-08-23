import Link from "next/link";
import { FaUser, FaRegUser } from "react-icons/fa";
import { auth } from "@/auth";

export const ProfileIcon = async () => {
  const session = await auth();

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
