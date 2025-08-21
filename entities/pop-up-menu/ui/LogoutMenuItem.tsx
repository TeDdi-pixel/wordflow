import { IoExit } from "react-icons/io5";
import { signOutUser } from "../actions/sign-out";

const LogoutMenuItem = async () => {
  return (
    <form action={signOutUser} className="w-full">
      <button
        type="submit"
        className="w-full pl-5 pr-4 py-2 text-left cursor-pointer group/item hover:bg-background-accent hover:text-accent"
      >
        <div className="flex items-center gap-2 transition-transform duration-150 ease-out translate-x-0 group-hover/item:translate-x-2">
          <span className="text-[16px]">
            <IoExit />
          </span>{" "}
          Вихід
        </div>
      </button>
    </form>
  );
};

export default LogoutMenuItem;
