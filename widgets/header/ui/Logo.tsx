import LogoIcon from "@/shared/icons/navigation/LogoIcon";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoIcon />

      <span className="text-4xl align-middle leading-[110%] font-medium">
        WordFlow
      </span>
    </Link>
  );
};
