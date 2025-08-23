"use client";

import HomeFocused from "./HomeFocused";
// import HomeUnfocused from "./HomeUnfocused";

// const HomeIcon = () => {
//   const pathname = usePathname();
//   return <>{pathname === "/" ? <HomeFocused /> : <HomeUnfocused />}</>;
// };

const HomeIcon = () => {
  return <HomeFocused />;
};

export default HomeIcon;
