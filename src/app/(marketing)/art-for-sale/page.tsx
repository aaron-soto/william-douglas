import { ART_FOR_SALE } from "./data";
import { Button } from "@/components/ui/button";
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
        These are current pieces in stock and available for purchase. Some of
        the pieces are created by W. Douglas, and some are from our art
        exhibition ACND.
      </p>

      <p className="text-muted-foreground mt-3">
        Local Pickup only, please contact us for more information.
      </p>

      <div className="flex flex-col gap-24 md:gap-8 mt-12">
        {ART_FOR_SALE.map((art, idx) => {
          return (
            <div
              key={idx}
              className="overflow-hidden flex flex-col md:flex-row gap-6"
            >
              <div className="overflow-hidden relative">
                {art.sold && (
                  <div className="absolute">
                    <span className="bg-primary  text-white px-4 py-2 text-center font-semibold absolute top-8 z-50">
                      SOLD
                    </span>
                  </div>
                )}
                <Link href={`/art-for-sale/${art.slug}`}>
                  <Image
                    src={art.image}
                    width={300}
                    height={500}
                    alt="img"
                    className="object-cover cursor-pointer hover:scale-110 transition-all duration-300 mx-auto"
                  />
                </Link>
              </div>
              <div className="flex flex-col flex-1">
                <p>
                  <span className="text-muted-foreground">Name:</span>{" "}
                  {art.name}
                </p>
                <p>
                  <span className="text-muted-foreground">Artist:</span>
                  <Link
                    href={art.artistLink}
                    target="_blank"
                    className="underline text-primary"
                  >
                    {art.artist}
                  </Link>
                </p>
                <p>
                  <span className="text-muted-foreground">Price:</span> $
                  {art.price}
                </p>

                <p>
                  <span className="text-muted-foreground">Dimensions:</span>{" "}
                  {art.dimensions}
                </p>

                <p>
                  <span className="text-muted-foreground">Features:</span>{" "}
                  {art.features.map((feature, idx) => (
                    <span key={idx}>
                      {feature}
                      {idx !== art.features.length - 1 && ", "}
                    </span>
                  ))}
                </p>

                <p>
                  <span className="text-muted-foreground">Description:</span>{" "}
                  {art.description}
                </p>

                <div className="mt-6">
                  <Button size="lg" className="w-full md:w-fit" asChild>
                    <Link href={`/art-for-sale/${art.slug}`}>
                      Contact For Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
