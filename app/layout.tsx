import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/header";

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
        className={`${robotoMono.variable} selection:bg-selection antialiased bg-background pt-8 flex flex-col items-center justify-between min-h-[100vh] gap-y-8`}
      >
        <Header />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
