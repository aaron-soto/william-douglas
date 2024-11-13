import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/case-study", label: "Case Study" },
  { href: "/obc", label: "OBC" },
  { href: "/acnd", label: "ACND" },
  { href: "/art", label: "Art" },
  { href: "/wdc-productions", label: "WDC Productions" },
  { href: "/design", label: "Design" },
];

export default function Home() {
  return (
    <div className="w-screen h-dvh relative">
      <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-center flex-col gap-4 z-[110]">
        <h1 className="text-white text-6xl font-extralight font-sans animate-slidein opacity-0 [--slidein-delay:50ms]">
          William Douglas
        </h1>

        <div className="text-white font-thin font-sans text-3xl flex flex-col md:flex-row gap-x-6 mt-8 w-full px-4 justify-center">
          {LINKS.map(({ href, label }, index) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "uppercase flex py-2 hover:text-red-700 cursor-pointer items-center justify-center animate-slidein opacity-0 scale-0",
                `[--slidein-delay:${100 + 50 * index}ms]`
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <Image
        src="/images/william.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="z-[100]"
      />

      <div className="absolute right-4 z-[110] bottom-4 flex flex-col">
        <Button
          variant="ghost"
          className="hover:bg-transparent text-white hover:text-red-700"
        >
          <FaFacebook className="!text-4xl" />
        </Button>
        <Button
          variant="ghost"
          className="hover:bg-transparent text-white hover:text-red-700"
        >
          <FaInstagram className="!text-4xl" />
        </Button>
        <Button
          variant="ghost"
          className="hover:bg-transparent text-white hover:text-red-700"
        >
          <FaYoutube className="!text-4xl" />
        </Button>
      </div>
    </div>
  );
}
