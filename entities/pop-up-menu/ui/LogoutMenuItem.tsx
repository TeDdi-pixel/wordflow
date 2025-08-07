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
      className="group/item cursor-pointer hover:bg-background-accent hover:text-accent w-full px-4 py-2"
      onClick={handleLogout}
    >
      <div className="flex items-center gap-2  group-hover/item:translate-x-2 translate-x-0 transition-transform ease-out duration-150">
        <span className="text-[14px]">
          <IoExit />
        </span>{" "}
        Вихід
      </div>
    </button>
  );
};

export default LogoutMenuItem;
