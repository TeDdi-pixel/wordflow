import {
  navigation,
  NavigationItem,
} from "@/entities/navigation/config/navigation";
import NavItem from "@/shared/ui/NavItem";

export const Navigation = () => {
  return (
    <nav className="mb-[100px]">
      <ul className="bg-foreground rounded-[8px] py-3 px-6 text-text flex gap-2 items-center">
        {navigation.games.map((item: NavigationItem) => (
          <NavItem
            key={item.id}
            name={item.name}
            icon={item.icon}
            path={item.path}
          />
        ))}
        <span className="block w-[5px] h-5 bg-background rounded-full"></span>
        {navigation.regularPages.map((item: NavigationItem) => (
          <NavItem
            key={item.id}
            name={item.name}
            icon={item.icon}
            path={item.path}
          />
        ))}
      </ul>
    </nav>
  );
};
