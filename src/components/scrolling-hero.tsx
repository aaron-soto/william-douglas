"use client";

import { useEffect, useState } from "react";

import { useScroll } from "framer-motion";

export const ScrollingHero = () => {
  const { scrollY } = useScroll();
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollOffset(latest * 0.5); // Adjust multiplier to control scroll speed
    });
  }, [scrollY]);

  return (
    <div className="h-[60dvh] w-full overflow-hidden bg-black relative">
      <h1
        className="text-[80px] md:text-[200px] opacity-30 z-20 px-8 font-medium font-sans whitespace-nowrap absolute bottom-0 text-gray-50"
        style={{
          transform: `translateX(-${scrollOffset * 2}px)`,
        }}
      >
        Craftsman / Creator
      </h1>

      <div className="absolute h-full w-full">
        <div className="absolute bg-black/[.80] inset-0"></div>

        <h1 className="absolute md:hidden text-3xl font-thin font-sans w-full text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          William Douglas Co.
        </h1>
        <img
          src="/images/william.jpg"
          alt="wood"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};
