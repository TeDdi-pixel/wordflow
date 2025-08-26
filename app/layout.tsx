import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./(css)/globals.css";
import { Header } from "@/widgets/header";
import { IoMdInfinite } from "react-icons/io";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Loading from "./loading";
import ToasterProvider from "@/shared/providers/ToasterProvider";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WordFlow",
  description: "Site for learning english words",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${robotoMono.variable} selection:bg-[#eb69aa] antialiased bg-bg pt-8 flex flex-col items-center justify-between min-h-screen overflow-x-hidden`}
      >
        <ToasterProvider />

        <Header />

        <main className="flex max-w-[1440px] w-full h-full items-center flex-col grow justify-start">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>

        <footer className="mb-4 flex text-[12px] items-center">
          2025 — <IoMdInfinite className="ml-2 text-[24px]" />. All bugs are
          features, some just undocumented. Proudly made with 1% inspiration and
          99% StackOverflow.
        </footer>

        <SpeedInsights />

        <Analytics />
      </body>
    </html>
  );
}
