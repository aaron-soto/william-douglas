import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";
import { SideNav } from "@/components/side-nav";
import { SocialButtons } from "@/app/(marketing)/social-buttons";

export default function Home() {
  return (
    <div className="w-screen h-dvh relative">
      <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-80 z-[1000]"></div>
      <Image
        src="/images/william-hero.jpg"
        alt="hero"
        fill
        className="z-[100] object-cover"
      />
    </div>
  );
}
