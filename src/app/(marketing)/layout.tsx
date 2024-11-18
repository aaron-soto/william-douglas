import "../globals.css";

import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

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
        className={`antialiased bg-black text-white relative flex flex-col md:flex-row`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
