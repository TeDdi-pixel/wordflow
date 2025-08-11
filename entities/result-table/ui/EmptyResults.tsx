import Link from "next/link";
import { IoOpen } from "react-icons/io5";

export const EmptyResults = ({ id }: { id: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span>У вас поки немає результатів за цією карткою</span>
      <Link
        href={`/card-set/${id}`}
        className="bg-background-accent-2 py-2 px-4 rounded-default inline-flex items-center gap-2 text-text-2"
      >
        <span>Перейти до практики</span>
        <IoOpen className="w-[24px] h-[24px]" />
      </Link>
    </div>
  );
};
