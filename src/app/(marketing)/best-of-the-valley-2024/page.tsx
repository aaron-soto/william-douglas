import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/app/(marketing)/(components)/page-header";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">BEST OF THE VALLEY 2024</h1>
      <p className="text-muted-foreground mt-3">
        Williams main venture of 2024 was featured in the Best of the Valley
        2024 for coffee shop. His coffee shop was featured in the magazine and
        he was interviewed about his process and inspiration.
      </p>
    </div>
  );
}
