import Link from "next/link";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

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

const SectionHeading = ({
  children,
  href,
  idx,
}: {
  children: React.ReactNode;
  href?: string;
  idx: number;
}) => {
  return (
    <h2
      className={cn(
        "uppercase pt-2 font-normal hover:text-red-700 cursor-pointer w-fit text-2xl",
        firaSans.className
      )}
    >
      {children}
    </h2>
  );
};

const Item = ({ label, idx }: { label: string; idx: number }) => {
  return (
    <Link
      href="/"
      className={cn(
        "pl-4 py-0.5 block w-fit hover:text-red-700 uppercase text-lg font-light",
        firaSans.className,
        `[--slidein-delay:${idx * 100}ms]`
      )}
    >
      {label}
    </Link>
  );
};

export const SideNav = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <div
      className={cn("absolute w-full h-full z-[1100]", isOpen && "bg-black")}
    >
      <Link
        href="/"
        className={cn(
          "text-white inline-block text-4xl pl-4 pt-8 font-normal font-sans uppercase",
          firaSans.className
        )}
      >
        William <br></br> Douglas
      </Link>

      <div className="text-white font-thin font-sans text-3xl gap-x-6 mt-8 px-4 flex flex-col">
        <SectionHeading idx={1} href="/studio">
          Studio
        </SectionHeading>
        <Item label="Art for sale" idx={2} />
        <Item label="Portfolio" idx={3} />

        <SectionHeading idx={2} href="/work">
          Work
        </SectionHeading>
        <Item label="Case Study Coffee Lounge" idx={5} />
        <Item label="ACND Exhibition" idx={6} />
        <Item label="Our Block Co" idx={7} />

        <SectionHeading idx={8} href="/productions">
          Productions
        </SectionHeading>
        <Item label="WDC Productions" idx={9} />
        <Item label="William Douglas Co. Youtube" idx={10} />

        <SectionHeading idx={11} href="/press-awards">
          Press/Awards
        </SectionHeading>
        <Item label="Best of the Valley 2024" idx={12} />
        <Item label="Fine Woodworking Magazine 2023" idx={13} />

        <SectionHeading idx={14}>Contact</SectionHeading>
      </div>
    </div>
  );
};
