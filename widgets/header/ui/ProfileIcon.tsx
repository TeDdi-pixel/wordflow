import Link from "next/link";
import { FaUser, FaRegUser } from "react-icons/fa";
import { checkForSession } from "@/shared/lib/session";

export const ProfileIcon = async () => {
  const isSession = await checkForSession();
  console.log(isSession);

  return (
    <Link href="/login">
      {isSession ? (
        <FaUser className="text-[17px] cursor-pointer group-hover:text-accent-text transition-colors" />
      ) : (
        <FaRegUser className="text-[17px]cursor-pointer group-hover:text-accent-text transition-colors" />
      )}
    </Link>
  );
};
