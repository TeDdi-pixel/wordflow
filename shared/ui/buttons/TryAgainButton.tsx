import Link from "next/link";

import { VscDebugRestart } from "react-icons/vsc";

const TryAgainButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/card-set/${id}`}
      className="bg-bg-accent-2 py-2 px-4 rounded-default group flex items-center justify-center gap-4 hover:scale-95 transition-transform"
    >
      <span className="text-text-2">Спробувати ще</span>
      <VscDebugRestart className="w-[24px] h-[24px] text-text-2 group-hover:-rotate-[360deg] transition-transform duration-300" />
    </Link>
  );
};

export default TryAgainButton;
