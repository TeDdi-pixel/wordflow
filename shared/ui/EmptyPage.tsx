import { Route } from "next";
import Link from "next/link";
import { IoOpen } from "react-icons/io5";

type Props = {
  text: string;
  path: Route;
  buttonText: string;
  textIcon?: string;
};

const EmptyPage = ({ text, path, buttonText, textIcon }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center gap-4 px-4 text-center">
      <p>
        {text} <span className="flex justify-center">{textIcon}</span>
      </p>

      <Link
        href={path}
        className="inline-flex items-center gap-2 px-4 py-2 transition-transform bg-bg-accent-2 rounded-default text-text-2 hover:scale-95"
      >
        <span>{buttonText}</span>
        <IoOpen className="w-[24px] h-[24px]" />
      </Link>
    </main>
  );
};

export default EmptyPage;
