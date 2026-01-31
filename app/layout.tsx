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
  title: "WordFlow — Вивчайте англійську лексику ефективно та зручно",
  description:
    "WordFlow — інтерактивна платформа для вивчення англійської методом інтервальних повторень. Швидко розширюйте свій словниковий запас та впевнено вживайте нові слова!",

  openGraph: {
    title: "WordFlow — Вивчайте англійську лексику ефективно та зручно",
    description:
      "Інтерактивна платформа для вивчення англійської мови. Швидко розширюйте свій словниковий запас та запам'ятовуйте нові слова назавжди завдяки розумним карткам.",
    url: "https://trywordflow.vercel.app/",
    siteName: "WordFlow",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WordFlow — Ефективне розширення словникового запасу",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordFlow — Твій шлях до багатого словникового запасу 🚀",
    description:
      "Збільшуй свій вокабуляр швидше за допомогою методу інтервальних повторень. Твоя англійська стане багатшою вже сьогодні!",
    images: ["/og-image.jpg"],
  },
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

        <main className="flex max-w-[1440px] w-full h-full items-center flex-col grow justify-start mb-[50px] md:mb-[100px]">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>

        <footer className="mb-4 flex text-[12px] text-center items-center justify-center px-4 flex-wrap">
          <span className="flex">
            <span className="flex items-center"> 2025 —</span>{" "}
            <IoMdInfinite className="ml-2 text-[24px]" />.
          </span>{" "}
          All bugs are features, some just undocumented. Proudly made with 1%
          inspiration and 99% StackOverflow.
        </footer>

        <SpeedInsights />

        <Analytics />
      </body>
    </html>
  );
}
