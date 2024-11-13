"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useScroll } from "framer-motion";

export const Navbar = () => {
  const pathName = usePathname();

  const isBaseUrl = pathName === "/";

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((currentScrollY) => {
      setIsScrolled(currentScrollY > 0);
    });
  }, [scrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 z-[1000] w-full h-[49px] text-gray-50 transition-colors duration-300",
        isScrolled ? "bg-black" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link href="/" className="flex items-center gap-4">
          <img src="/images/colored-logo.svg" alt="logo" className="h-8 w-8" />
          <h1 className="text-2xl font-thin font-sans hidden md:block">
            William Douglas Co.
          </h1>
        </Link>
        {!isBaseUrl && (
          <div className="flex items-center gap-4">
            <Button
              className="text-base hover px-2 text-white hover:text-primary animate-scalein opacity-0 scale-0 [--scalein-delay:100ms]"
              variant="link"
            >
              About
            </Button>
            <Button
              className="text-base hover px-2 text-white hover:text-primary animate-scalein opacity-0 scale-0 [--scalein-delay:200ms]"
              variant="link"
            >
              Consulting
            </Button>
            <Button
              className="text-base hover px-2 text-white hover:text-primary animate-scalein opacity-0 scale-0 [--scalein-delay:300ms]"
              variant="link"
            >
              ACND
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
