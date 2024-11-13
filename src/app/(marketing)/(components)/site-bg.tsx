"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export const SiteBG = () => {
  const pathName = usePathname();
  const isBaseUrl = pathName === "/";

  if (!isBaseUrl) {
    return <div className="fixed inset-0 bg-black"></div>;
  }

  return <></>;
};
