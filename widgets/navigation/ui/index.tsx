import NavItem from "@/widgets/navigation/ui/NavItem";
import { navigation } from "../model/config";

export const Navigation = () => {
  return (
    <nav className="mb-[50px] md:mb-[100px] w-fit hidden sm:block">
      <ul className="bg-fg rounded-default px-4 py-3 md:px-6 text-text flex items-center text-[14px]">
        {navigation.regularPages.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}

        <span className="block w-[5px] h-5 bg-bg rounded-full"></span>

        {navigation.games.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};
