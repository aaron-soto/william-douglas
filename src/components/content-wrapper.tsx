"use client";

import { Navbar } from "@/components/navbar";
import { useState } from "react";

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  const [offset, setOffset] = useState(0);

  const handleHeightChange = (height: number) => {
    setOffset(height);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};
