import { navigation, NavigationItem } from "@/entities/navigation/config";
import NavItem from "@/shared/ui/NavItem";

export const Navigation = () => {
  return (
    <nav className="mb-[100px]">
      <ul className="bg-foreground rounded-default py-3 px-6 text-text flex gap-1 items-center text-[14px]">
        {navigation.regularPages.map((item: NavigationItem) => (
          <NavItem key={item.id} item={item} />
        ))}

        <span className="block w-[5px] h-5 bg-background rounded-full"></span>

        {navigation.games.map((item: NavigationItem) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};
