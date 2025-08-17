import { Suspense } from "react";
import { Navigation } from "@/widgets/navigation";
import Loading from "@/app/loading";

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loading />}>
        <main className="flex max-w-[1440px] w-full h-full flex-col items-center grow mb-[100px]">
          {children}
        </main>
      </Suspense>
    </>
  );
}
