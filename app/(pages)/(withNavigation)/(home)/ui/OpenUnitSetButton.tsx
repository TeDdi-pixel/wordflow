import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const OpenUnitSetButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/card-set/${id}`}
      type="button"
      className="cursor-pointer w-[24px] h-[24px] hover:text-button-default group-hover:translate-x-0 translate-x-[38px] transition-all ease-out duration-150"
    >
      <FiExternalLink className="w-[24px] h-[24px]" />
    </Link>
  );
};

export default OpenUnitSetButton;
