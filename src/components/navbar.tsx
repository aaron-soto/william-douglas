"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useScroll } from "framer-motion";

// import Image from "next/image";
// import Link from "next/link";

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
        {/* <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/colored-logo.svg"
            alt="logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-thin font-sans hidden md:block">
            William Douglas Co.
          </h1>
        </Link> */}
        {!isBaseUrl && (
          <div className="flex items-center gap-4">
            <Button
              className="text-base hover px-2 text-white hover:text-primary animate-scalein opacity-0 scale-0 [--scalein-delay:100ms]"
              variant="link"
            >
              Contact
            </Button>
            <Button
              className="text-base hover px-2 text-white hover:text-primary animate-scalein opacity-0 scale-0 [--scalein-delay:200ms]"
              variant="link"
            >
              Consulting
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
