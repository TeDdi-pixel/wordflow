"use client";

import AddCollectionIcon from "@/shared/icons/unit/AddCollectionIcon";
import { useTempStore } from "@/store/useTempStore";
import { useEffect, useRef, useState } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { redirect } from "next/navigation";

type Props = {
  pending: boolean;
  text: string;
  error: string;
};

const SubmitButton = ({ pending, text, error }: Props) => {
  const resetTempStore = useTempStore((state) => state.resetTempStore);
  const previousPending = useRef<boolean>(false);

  useEffect(() => {
    if (previousPending.current && !pending && !error) {
      resetTempStore();
      redirect("/");
    }

    previousPending.current = pending;
  }, [pending, error, resetTempStore]);

  return (
    <button
      type="submit"
      className="relative group cursor-pointer bg-foreground hover:bg-button-accent w-[300px] py-[16px] px-[32px] rounded-default flex justify-center items-center overflow-hidden unit-button-shadow transition-all duration-150 ease-out"
    >
      <div className="z-10 flex items-center justify-center gap-2 transition-all duration-150 ease-out group-hover:text-accent">
        <div className="w-[24px] h-[24px] flex">
          {pending && !error ? (
            <div className="w-[24px] h-[24px] border-4 border-t-transparent border-accent rounded-full animate-spin" />
          ) : (
            <>
              <span className="transition-all duration-150 ease-out translate-x-0 group-hover:translate-x-[24px] opacity-100 group-hover:opacity-0">
                <AddCollectionIcon />
              </span>
              <span className="transition-all duration-150 ease-out translate-x-0 group-hover:-translate-x-[24px] opacity-0 group-hover:opacity-100">
                <RiUploadCloud2Fill className="w-[24px] h-[24px] text-accent" />
              </span>
            </>
          )}
        </div>
        <span>{text}</span>
      </div>
    </button>
  );
};

export default SubmitButton;
