import NavItem from "@/widgets/navigation/ui/NavItem";
import { navigation } from "../model/config";

export const Navigation = () => {
  return (
    <nav className="mb-[100px] w-fit">
      <ul className="bg-fg rounded-default py-3 px-6 text-text flex gap-1 items-center text-[14px]">
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
