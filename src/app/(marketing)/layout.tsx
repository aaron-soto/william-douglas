import "../globals.css";

import type { Metadata } from "next";
import { MobileNav } from "@/components/mobile-nav";
import { Navbar } from "@/components/navbar";
import { SideNav } from "@/components/side-nav";
import { SocialButtons } from "@/app/(marketing)/social-buttons";
import localFont from "next/font/local";

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
      <body className={`antialiased relative overflow-hidden`}>
        <MobileNav />
        <div className="hidden md:block">
          <SideNav />
        </div>
        {children}
        <SocialButtons />
      </body>
    </html>
  );
}
