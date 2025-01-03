import { ART_FOR_SALE } from "@/app/(marketing)/art-for-sale/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page({ params }: { params: { slug: string } }) {
  const artPiece = ART_FOR_SALE.filter((art) => art.slug === params.slug)[0];
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">{artPiece.name}</h1>
      <p className="text-muted-foreground mt-3">{artPiece.description}</p>
      <div className=" mt-6">
        <Image
          src={artPiece.image}
          alt="art"
          width={500}
          height={600}
          className="object-cover"
        />
      </div>

      <div className="mt-6">
        <h2 className="font-sans uppercase text-2xl">Details</h2>
        <ul className="mt-3 flex flex-col gap-2">
          <li>
            Features:
            <span className="ml-2">
              {artPiece.features.map((feature, idx) => (
                <span key={idx} className="text-muted-foreground">
                  {feature}
                  {idx !== artPiece.features.length - 1 && ", "}
                </span>
              ))}
            </span>
          </li>
          <li>
            Dimensions:
            <span className="text-muted-foreground"> {artPiece.dimensions}</span>
          </li>
          <li>
            Artist:{' '}
            <Link href={artPiece.artistLink} className="underline text-primary">{artPiece.artist}</Link>
          </li>
          <li>
            Price:
            <span className="text-muted-foreground"> ${artPiece.price}</span>
          </li>
        </ul>
      </div>

      <Button size="lg" className="mt-6 w-full md:w-fit" asChild>
        <Link href="mailto:william@williamdouglasco.com">
          Contact For Details
        </Link>
      </Button>

      {/* Other art pieces */}
      <div className="mt-[100px]">
        <h2 className="font-sans uppercase text-2xl">Other Art Pieces</h2>
        <div className="flex flex-col gap-10 mt-6">
          {ART_FOR_SALE.map((art, idx) => {
            if (art.slug === params.slug) return null;

            return (
              <div
                key={idx}
                className=" overflow-hidden flex md: items-center flex-col md:flex-row gap-6"
              >
                <div className="overflow-hidden">
                  <Image
                    src={art.image}
                    width={300}
                    height={500}
                    alt="img"
                    className="object-cover mx-auto"
                  />
                </div>
                <div className="flex flex-col md:flex-1 max-w-[300px]">
                  <p>
                    <span className="text-muted-foreground">Name:</span> {art.name}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Artist:</span> {art.artist}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Price:</span> ${art.price}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Dimensions:</span> {art.dimensions}
                  </p>
                  <Button className="mt-4 w-full" asChild>
                    <Link href={`/art-for-sale/${art.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
