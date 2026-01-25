"use client";

import { UserName } from "@/entities/user";
import { useBurgerMenuStore } from "@/shared/store/useBurgerMenuStore";
import { navigation } from "@/widgets/navigation/model/config";
import { IoMenu, IoClose, IoExit } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { signOutUser } from "@/widgets/pop-up-menu/model/signOutUser";
import Form from "next/form";
import CardsIcon from "@/shared/icons/unit/CardsIcon";
import useCancelScroll from "@/shared/hooks/useCancelScroll";
import { useState } from "react";

export const BurgerMenu = ({
  displayName,
  isUserLoggedIn,
}: {
  displayName: string;
  isUserLoggedIn: boolean;
}) => {
  const [openedGameId, setOpenedGameId] = useState<number | null>(null);

  const toggleGame = (id: number | null) => {
    setOpenedGameId((prev) => (prev === id ? null : id));
  };

  const isOpened = useBurgerMenuStore((state) => state.isOpened);
  const openBurgerMenu = useBurgerMenuStore((state) => state.openBurgerMenu);
  const closeBurgerMenu = useBurgerMenuStore((state) => state.closeBurgerMenu);

  useCancelScroll();

  return (
    <>
      {!isOpened ? (
        <IoMenu
          className={`block sm:hidden w-[30px] h-[30px] transition-all ${!isOpened ? "text-text opacity-100" : "text-text-2 opacity-0"}`}
          onClick={openBurgerMenu}
        />
      ) : (
        <IoClose
          className={`block sm:hidden w-[30px] h-[30px] transition-all ${isOpened ? "z-[9999] text-text-2" : "pointer-events-none"}`}
          onClick={closeBurgerMenu}
        />
      )}

      <div
        className={`w-full h-full fixed flex items-center inset-0 bg-bg-accent-2 text-text-2 z-[9998] duration-500 transition-all opacity-0 px-[64px] py-[100px] ${
          isOpened
            ? `scale-100 opacity-100 rounded-0`
            : "scale-99 pointer-events-none rounded-4xl"
        }`}
      >
        <ul className="flex flex-col gap-5 w-full">
          {navigation.regularPages.map((route) => (
            <li key={route.id} onClick={closeBurgerMenu}>
              <Link
                href={route.path}
                className="flex items-center text-[16px] gap-2.5"
              >
                <span className="scale-150 text-[20px]">{route.icon}</span>
                {route.name}
              </Link>
            </li>
          ))}

          {navigation.games.map((route) => {
            const isOpen = openedGameId === route.id;

            return (
              <li key={route.id} className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => toggleGame(route.id)}
                  className="flex items-center text-[16px] gap-2.5 w-full"
                >
                  <span className="scale-110">
                    <CardsIcon />
                  </span>

                  <span className="text-left">{route.name}</span>

                  <span
                    className={`text-[16px] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {route.icon}
                  </span>
                </button>

                <ul
                  className={`overflow-hidden pl-6 flex flex-col gap-2 w-full bg-bg-accent rounded-default text-accent transition-all ${isOpen ? "max-h-[500px] opacity-100 py-3.5" : "max-h-0 opacity-0 py-0"}`}
                >
                  {route.options.map((option) => (
                    <li key={option.id} onClick={closeBurgerMenu}>
                      <Link
                        href={option.path}
                        className="flex items-center gap-2 text-[14px]"
                      >
                        <span className="scale-110 text-[16px]">
                          {option.icon}
                        </span>
                        {option.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}

          <li>
            {isUserLoggedIn ? (
              <Form action={signOutUser}>
                <button
                  type="submit"
                  className="flex items-center gap-2.5 text-exit"
                  onClick={closeBurgerMenu}
                >
                  <IoExit className="text-[27px]" />
                  <UserName displayName={displayName} />
                </button>
              </Form>
            ) : (
              <Link href="/login" className="flex items-center gap-2.5 mt-2.5">
                <FaUser className="text-[22px]" />
                Увійти
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
