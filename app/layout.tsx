import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";
import { Navigation } from "@/entities/navigation";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenWord",
  description: "Site for learning english words",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} antialiased bg-background pt-8 flex flex-col items-center justify-between min-h-[100vh] gap-y-8`}
      >
        <Header />
        <main className="flex flex-1 max-w-[1440px] w-full h-full flex-col items-center">
          <Navigation />
          {children}
        </main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
