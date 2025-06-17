"use client";
import React from "react";
import { logout } from "../../../widgets/header/actions/logout";
import { IoExit } from "react-icons/io5";

const LogoutMenuItem = () => {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="flex items-center gap-2 cursor-pointer hover:bg-accent-text hover:text-text w-full mx-4"
      >
        <IoExit />
        Sign out
      </button>
    </form>
  );
};

export default LogoutMenuItem;
