import "../globals.css";

import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const montserrat = localFont({
  src: [
    {
      path: "../fonts/Montserrat-Variable.ttf",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    absolute: "William Douglas Co.",
    template: "%s | William Douglas Co.",
  },
  description:
    "William Douglas is a creator, artist, and craftsman. He has a passion for creating beautiful things and sharing them with the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-black min-h-screen text-white relative flex flex-col md:flex-row",
          montserrat.className
        )}
      >
        <Navbar />
        <div className="md:flex md:flex-col w-full overflow-x-hidden">
          {children}

        </div>
      </body>
    </html>
  );
}
















{/* <span className="text-sm block md:hidden text-[#3e3e3e] text-center mt-auto mb-12 md:mb-4">
            Proudly made by{" "}
            <Link
              className="underline"
              target="_blank"
              href="https://ayezeewebdesigns.com"
            >
              AyeZee Web Designs
            </Link>
          </span> */}