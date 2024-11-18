import { ART_FOR_SALE } from "@/data/art-for-sale";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art For Sale",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab
        blanditiis non doloribus cupiditate esse officia eaque! Omnis explicabo
        dolorum, temporibus molestias id quos reprehenderit officiis eaque
        molestiae assumenda minima ipsam magnam fuga? Aut itaque consequuntur
        dolore commodi error eius quod earum assumenda praesentium voluptatem?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {ART_FOR_SALE.map((art, idx) => {
          return (
            <Link
              href={`/art-for-sale/${art.slug}`}
              key={idx}
              className="col-span-1 h-[300px] overflow-hidden flex items-center justify-center"
            >
              <Image
                src={art.image}
                width={500}
                height={500}
                alt="img"
                className="object-cover cursor-pointer hover:scale-110 transition-all duration-300"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
