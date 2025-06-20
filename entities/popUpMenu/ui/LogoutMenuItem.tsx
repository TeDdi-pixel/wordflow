"use client";

import { IoExit } from "react-icons/io5";
import { logOutUser } from "../actions/logout";
import { useRouter } from "next/navigation";

const LogoutMenuItem = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await logOutUser();
    router.push("/login");
  };
  return (
    <button
      type="button"
      className="flex items-center gap-2 cursor-pointer hover:bg-accent-text hover:text-foreground w-full px-4 py-2"
      onClick={handleLogout}
    >
      <span className="text-[14px]">
        <IoExit />
      </span>{" "}
      Вихід
    </button>
  );
};

export default LogoutMenuItem;
