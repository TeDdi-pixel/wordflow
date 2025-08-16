import { MainTitle } from "./MainTitle";
import { ProfileBlock } from "./ProfileBlock";

export const Header = () => {
  return (
    <header className="max-w-[1440px] w-full mx-auto max-h-[36px] flex items-center justify-between px-8 mb-[50px]">
      <nav className="flex items-center justify-between w-full">
        <MainTitle />
        <ProfileBlock />
      </nav>
    </header>
  );
};
