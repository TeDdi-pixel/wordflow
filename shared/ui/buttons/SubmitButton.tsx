"use client";

import AddCollectionIcon from "@/shared/icons/unit/AddCollectionIcon";
import { BsIncognito } from "react-icons/bs";

type Props = {
  pending: boolean;
  text: string;
  isPrivate?: boolean;
  setHiddenInputValue: (val: string) => void;
};

const SubmitButton = ({
  pending,
  text,
  isPrivate,
  setHiddenInputValue,
}: Props) => {
  return (
    <button
      type="submit"
      disabled={pending}
      onClick={() => setHiddenInputValue(String(isPrivate))}
      className="flex justify-center text-[14px] md:text-[16px] items-center gap-2 px-4 py-1.5 md:py-2 w-full w-648:max-w-[300px] transition-transform cursor-pointer bg-bg-accent-2 rounded-default text-text-2 hover:scale-95"
    >
      {isPrivate ? <BsIncognito className="w-6 h-6" /> : <AddCollectionIcon />}
      <span>{text}</span>
    </button>
  );
};

export default SubmitButton;
