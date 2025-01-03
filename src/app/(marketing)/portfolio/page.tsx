import Image from "next/image";
import { Metadata } from "next";
import { PORTFOLIO_ITEMS } from "@/app/(marketing)/portfolio/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {

  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">Portfolio</h1>
      <p className="text-muted-foreground mt-3">
        Since 2012, William Douglas has been crafting unique pieces across a variety of mediums. This portfolio showcases his work over the years, including GFRC concrete, mold making, casting, metal fabrication, interior design, fine art, and heirloom-quality furniture with a focus on hardwoods.
      </p>

      <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 [&>img:not(:first-child)]:mt-8 mt-8">
        {PORTFOLIO_ITEMS.map((item: any, idx: number) => {
          return (
            <Image
              key={idx}
              src={item.src}
              alt={item.name}
              width={500}
              height={375}
              style={{
                aspectRatio: "4/3", // Ensures consistent ratio across items
              }}
              className="object-cover cursor-pointer hover:scale-110 transition-all duration-300"
            />
          );
        })}
      </div>
    </div>
  );
}
