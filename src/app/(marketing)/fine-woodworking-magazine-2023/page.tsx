import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PageHeader } from "@/app/(marketing)/(components)/page-header";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">
        Fine Woodworking Magazine 2023
      </h1>
      <p className="text-muted-foreground mt-3">
        William was featured in Fine Woodworking magazine in their 2023 edition.
        His custom valet piece was featured in the magazine and he was
        interviewed about his process and inspiration.
      </p>
      <Link href="/fine-woodworking-magazine-2023"></Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative h-[400px] mt-6 overflow-hidden">
          <Image
            src="/images/prints/print-01.jpg"
            alt="prints"
            fill
            className="object-cover absolute inset-0 w-full hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
