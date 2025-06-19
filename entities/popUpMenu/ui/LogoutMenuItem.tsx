"use client";
import React from "react";
import { logout } from "../../../widgets/header/actions/logout";
import { IoExit } from "react-icons/io5";

const LogoutMenuItem = () => {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="flex items-center gap-2 cursor-pointer hover:bg-accent-text hover:text-foreground w-full px-4 py-2"
      >
        <span className="text-[14px]">
          <IoExit />
        </span>{" "}
        Вихід
      </button>
    </form>
  );
};

export default LogoutMenuItem;
