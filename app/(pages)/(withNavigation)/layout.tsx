import { Navigation } from "@/widgets/navigation";
import { IoMdInfinite } from "react-icons/io";

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="flex max-w-[1440px] w-full h-full flex-col items-center grow mb-[100px]">
        {children}
      </main>
    </>
  );
}
