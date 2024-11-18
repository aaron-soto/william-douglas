import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">Portfolio</h1>
      <p className="text-muted-foreground mt-3"></p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative h-[400px] mt-6 overflow-hidden">
          <Image
            src="/images/placeholder.webp"
            alt="prints"
            fill
            className="object-cover absolute inset-0 w-full hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
