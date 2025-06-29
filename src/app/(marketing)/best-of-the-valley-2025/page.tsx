import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">BEST OF THE VALLEY 2025</h1>
      <Image
        src="/images/BOV_2025.jpg"
        alt="Best of the Valley 2024"
        width={200}
        height={200}
        className="object-cover mt-6"
      />
      <p className="text-muted-foreground mt-3 max-w-prose">
        Case Study Coffee Lounge has officially been named a 2025 PHOENIX magazine Best of the
        Valley winner—for the second year in a row. Under William Douglas’s direction, the shop has
        become more than just a local spot for great coffee. It’s a creative hub, a community
        staple, and a reflection of the care and craft he puts into everything he builds. This
        recognition speaks to the loyalty of its customers and the standard of excellence the team
        brings every day. The award badge might be new, but the vision behind it has been years in
        the making.
      </p>
    </div>
  );
}
