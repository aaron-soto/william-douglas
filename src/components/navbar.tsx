"use client";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { NAV_LINKS, NavLink, SOCIALS } from "@/data/nav-links";
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
  const pathname = usePathname();

  if (href == "") {
    return (
      <h2
        className={cn(
          "uppercase pt-2 flex items-center w-fit text-2xl font-[500]",
          firaSans.className
        )}
      >
        {children}
      </h2>
    );
  }

  return (
    <Link
      href={href || "/"}
      className={cn(
        "uppercase pt-2 flex items-center hover:text-[#c12535] cursor-pointer w-fit text-2xl font-[500]",
        firaSans.className,
        pathname === href && "text-[#c12535]"
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
            {
              // Loop through each section in the nav links
              NAV_LINKS.map((section) => (
                <div key={section.label}>
                  <SectionHeading href={section.href ? section.href : ""}>
                    {section.label}
                  </SectionHeading>
                  {section?.links?.map((link: NavLink) => (
                    <Item
                      key={link.label}
                      href={link.href ? link.href : ""}
                      label={link.label}
                    />
                  ))}
                </div>
              ))
            }
            <div className="flex mt-2">
              {
                // Loop through each social media link
                SOCIALS.map((social) => (
                  <Button
                    asChild
                    key={social.label}
                    variant="ghost"
                    className="hover:bg-transparent text-white hover:text-[#c12535]"
                  >
                    <Link href={social.href} target="_blank">
                      {social.icon}
                    </Link>
                  </Button>
                ))
              }
            </div>
          </div>
        </AnimateChangeInHeight>
        {/* <span className="text-sm hidden md:block text-[#282828] text-center mt-auto mb-4">
          Proudly made by{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://ayezeewebdesigns.com"
          >
            AyeZee Web Designs
          </Link>
        </span> */}
      </div>
    </nav>
  );
};
