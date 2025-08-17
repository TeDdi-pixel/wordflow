import Link from "next/link";
import { IoOpen } from "react-icons/io5";

export const EmptyPage = ({
  text,
  path,
  buttonText,
}: {
  text: string;
  path: string;
  buttonText: string;
}) => {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <p>{text}</p>
      <Link
        href={path}
        className="bg-background-accent-2 py-2 px-4 rounded-default inline-flex items-center gap-2 text-text-2"
      >
        <span>{buttonText}</span>
        <IoOpen className="w-[24px] h-[24px]" />
      </Link>
    </main>
  );
};
