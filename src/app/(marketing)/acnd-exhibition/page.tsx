import { ImageSlider } from "@/app/(marketing)/acnd-exhibition/image-slider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACND Exhibition",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white flex flex-col">
      <h1 className="text-3xl text-white">ACND Exhibition</h1>
      <p className="text-muted-foreground mt-3">
        William Douglas proudly presents ACND: A Craftsman Never Dies, an
        extraordinary exhibition gathering master artisans from around the globe
        to showcase their finest works. This event celebrates the enduring
        spirit of craftsmanship, blending tradition with innovation. Hosted at
        the iconic Case Study Coffee Lounge, visitors can experience stunning
        displays of skill and artistry in a setting that embodies William's
        passion for design and community.
      </p>
      <p className="text-muted-foreground mt-3">
        ACND aims to inspire a deeper appreciation for handmade excellence,
        fostering connections between creators and admirers. It&apos;s more than
        an exhibition—it's a tribute to the legacy of craftsmanship that
        transcends generations.
      </p>

      <h2 className="mt-6 text-xl font-sans uppercase">Past Events</h2>

      <ImageSlider className="w-full mt-4" />
    </div>
  );
}
