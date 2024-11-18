import { ImageSlider } from "@/app/(marketing)/acnd-exhibition/image-slider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACND Exhibition",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white flex flex-col">
      <h1 className="text-3xl text-white">Our Block Co.</h1>
      <p className="text-muted-foreground mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus
        maxime alias esse in optio exercitationem enim deleniti laboriosam
        nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis ipsam error esse est enim.
      </p>
      <p className="text-muted-foreground mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
        consequatur eveniet, id ipsa ea architecto laudantium asperiores iste
        delectus aliquam commodi. Molestiae recusandae aliquid reprehenderit
        dolorum vel animi fugit consequuntur, adipisci facilis! Quibusdam
        laboriosam laudantium at ut ipsa modi ducimus.
      </p>
    </div>
  );
}
