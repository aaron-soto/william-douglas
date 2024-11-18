import { ART_FOR_SALE } from "@/data/art-for-sale";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page({ params }: { params: { slug: string } }) {
  const artPiece = ART_FOR_SALE.filter((art) => art.slug === params.slug)[0];
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">{artPiece.title}</h1>
      <p className="text-muted-foreground mt-3">{artPiece.description}</p>
      <div className="w-full relative h-[400px] mt-6">
        <Image
          src={artPiece.image}
          alt="art"
          fill
          className="absolute inset-0 object-cover"
        />
      </div>

      <div className="mt-6">
        <h2 className="font-sans uppercase text-2xl">Details</h2>
        <ul className="mt-3 flex flex-col gap-2">
          <li>
            <span className="text-muted-foreground">Features:</span>{" "}
            {artPiece.features.map((feature, idx) => (
              <span key={idx}>
                {feature}
                {idx !== artPiece.features.length - 1 && ", "}
              </span>
            ))}
          </li>
          <li>
            <span className="text-muted-foreground">Size:</span>{" "}
            {artPiece.dimensions}
          </li>
          <li>
            <span className="text-muted-foreground">Price:</span> $
            {artPiece.price}
          </li>
        </ul>
      </div>

      <Button size="lg" className="mt-6 w-full md:w-fit">
        Contact For Details
      </Button>
    </div>
  );
}
