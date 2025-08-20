"use client";

import AddCollectionIcon from "@/shared/icons/unit/AddCollectionIcon";
import { useTempStore } from "@/store/useTempStore";
import { useEffect, useRef } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { redirect } from "next/navigation";

type Props = {
  pending: boolean;
  text: string;
  error: string;
  pendingText: string;
};

const SubmitButton = ({ pending, text, error, pendingText }: Props) => {
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
      className="relative group cursor-pointer bg-foreground hover:bg-background-accent w-[300px] py-[16px] px-[32px] rounded-default flex justify-center items-center overflow-hidden unit-button-shadow transition-all duration-150 ease-out"
    >
      <div className="z-10 flex items-center justify-center gap-2 transition-all duration-150 ease-out group-hover:text-accent">
        <div className="w-[24px] h-[24px] flex">
          <>
            <span className="transition-all duration-150 ease-out translate-x-0 group-hover:translate-x-[24px] opacity-100 group-hover:opacity-0">
              <AddCollectionIcon />
            </span>
            <span className="transition-all duration-150 ease-out translate-x-0 group-hover:-translate-x-[24px] opacity-0 group-hover:opacity-100">
              <RiUploadCloud2Fill className="w-[24px] h-[24px] text-accent" />
            </span>
          </>
        </div>
        {pending ? <span>{pendingText}</span> : <span>{text}</span>}
      </div>
    </button>
  );
};

export default SubmitButton;
