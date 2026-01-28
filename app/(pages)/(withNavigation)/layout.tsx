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

      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
