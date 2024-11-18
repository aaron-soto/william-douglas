"use client";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { AnimateChangeInHeight } from "@/components/animate-change-in-height";
import { Button } from "@/components/ui/button";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const firaSans = localFont({
  src: [
    {
      path: "../app/fonts/FiraSansExtraCondensed-Black.ttf",
      weight: "900",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-Bold.ttf",
      weight: "700",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-Medium.ttf",
      weight: "500",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-Regular.ttf",
      weight: "400",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-Light.ttf",
      weight: "300",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../app/fonts/FiraSansExtraCondensed-Thin.ttf",
      weight: "100",
    },
  ],
  variable: "--font-fira-sans",
});

const SectionHeading = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <Link
      href={href || "/"}
      className={cn(
        "uppercase pt-2 flex items-center hover:text-[#c12535] cursor-pointer w-fit text-2xl font-[500]",
        firaSans.className
      )}
    >
      {children}
    </Link>
  );
};

const Item = ({ label, href }: { label: string; href?: string }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href || "/"}
      className={cn(
        "pl-4 py-0.5 block w-fit hover:text-[#c12535] uppercase text-lg font-[200]",
        firaSans.className,
        pathname === href && "text-[#c12535]"
      )}
    >
      {label}
    </Link>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Close the menu whenever the URL path changes
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav>
      <div className="flex flex-col h-full w-full md:w-[300px]">
        <div className="flex justify-between items-center mx-4 mt-4">
          <Link
            href="/"
            className={cn(
              "text-white text-4xl font-[500] font-sans uppercase",
              firaSans.className
            )}
          >
            William <br></br> Douglas
          </Link>

          <div onClick={toggleMenu} className="text-white md:hidden z-[2000]">
            {isOpen ? (
              <motion.div
                animate={{ rotate: 180, scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <IoMdClose className="text-4xl" />
              </motion.div>
            ) : (
              <motion.div
                animate={{ rotate: 0, scale: 1 }}
                initial={{ rotate: -180, scale: 0.8 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <RiMenu3Fill className="text-4xl" />
              </motion.div>
            )}
          </div>
        </div>
        <AnimateChangeInHeight>
          <div
            className={cn(
              "text-white flex font-thin font-sans text-3xl gap-x-6 mt-4 px-4 flex-col animate-scalein pb-6",
              isOpen || "hidden md:block"
            )}
          >
            <SectionHeading href="/studio/art-for-sale">Studio</SectionHeading>
            <Item href="/studio/art-for-sale" label="Art for sale" />
            <Item label="Portfolio" />

            <SectionHeading href="/work">Work</SectionHeading>
            <Item
              href="/work/case-study-coffee-lounge"
              label="Case Study Coffee Lounge"
            />
            <Item label="ACND Exhibition" />
            <Item label="Our Block Co" />

            <SectionHeading href="/productions">Productions</SectionHeading>
            <Item label="WDC Productions" />
            <Item label="William Douglas Co. Youtube" />

            <SectionHeading href="/awards">Press/Awards</SectionHeading>
            <Item label="Best of the Valley 2024" />
            <Item label="Fine Woodworking Magazine 2023" />

            <SectionHeading href="/contact">Contact</SectionHeading>
            <Item label="Consulting" />
            <div className="flex mt-2">
              <Button
                variant="ghost"
                className="hover:bg-transparent text-white hover:text-[#c12535]"
              >
                <FaFacebook className="!text-4xl" />
              </Button>
              <Button
                variant="ghost"
                className="hover:bg-transparent text-white hover:text-[#c12535]"
              >
                <FaInstagram className="!text-4xl" />
              </Button>
              <Button
                variant="ghost"
                className="hover:bg-transparent text-white hover:text-[#c12535]"
              >
                <FaYoutube className="!text-4xl" />
              </Button>
            </div>
          </div>
        </AnimateChangeInHeight>
      </div>
    </nav>
  );
};
