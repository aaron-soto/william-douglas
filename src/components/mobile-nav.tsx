"use client";

import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { SideNav } from "@/components/side-nav";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { useState } from "react";

const firaSans = localFont({
  src: [
    {
      path: "../app/fonts/FiraSansExtraCondensed-black.ttf",
      weight: "900",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-bold.ttf",
      weight: "700",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-medium.ttf",
      weight: "500",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-regular.ttf",
      weight: "400",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-light.ttf",
      weight: "300",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-extralight.ttf",
      weight: "200",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-thin.ttf",
      weight: "100",
    },
  ],
  variable: "--font-fira-sans",
});

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className="text-white block md:hidden absolute right-6 top-6 z-[2000]"
      >
        {isOpen ? (
          <motion.div
            animate={{ rotate: 180, scale: 1.2 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <IoMdClose className="text-3xl" />
          </motion.div>
        ) : (
          <motion.div
            animate={{ rotate: 0, scale: 1 }}
            initial={{ rotate: -180, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <RiMenu3Fill className="text-3xl" />
          </motion.div>
        )}
        <Link
          href="/"
          className={cn(
            "text-white inline-block text-4xl pl-4 pt-8 font-normal font-sans fixed top-0 left-0 uppercase",
            firaSans.className
          )}
        >
          William <br></br> Douglas
        </Link>
      </div>
      {isOpen && <SideNav isOpen={isOpen} />}
    </>
  );
};
