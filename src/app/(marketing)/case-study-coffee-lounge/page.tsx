import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">Case Study Coffee Lounge</h1>
      <p className="text-muted-foreground mt-3">
        William Douglas, a Phoenix native and accomplished furniture designer,
        craftsman, and entrepreneur, established Case Study Coffee Lounge as an
        extension of his woodworking enterprise. Initially, the space functioned
        as a showroom where clients could experience his handcrafted furniture
        firsthand, rather than viewing it online. This approach allowed visitors
        to appreciate the quality and craftsmanship of his pieces in a tangible
        setting.
      </p>
      <p className="text-muted-foreground mt-3">
        Over time, the showroom attracted local community members who were not
        only impressed by the furniture but also enjoyed the specialty coffee
        offered during their visits. The positive response led to the
        transformation of the showroom into a public coffee lounge, blending
        Douglas&apos;s passion for woodworking with a welcoming café
        environment.
      </p>
      <p className="text-muted-foreground mt-3">
        This evolution was partly influenced by Douglas&apos;s personal health
        challenges. After developing an allergy to wood, he had to reduce his
        woodworking activities. This circumstance prompted him to focus more on
        the coffee lounge, allowing him to continue sharing his craftsmanship
        through the furniture displayed in the café while fostering community
        engagement over quality coffee.
      </p>
      <p className="text-muted-foreground mt-3">
        Case Study Coffee Lounge now serves as a unique space where patrons can
        enjoy specialty coffee amidst Douglas&apos;s custom furniture,
        reflecting his dedication to craftsmanship and community connection.
      </p>
      <div className="w-full relative h-[400px] mt-6 overflow-hidden rounded-[12px]">
        <Image
          src="/images/case-study-coffee-lounge.jpeg"
          alt="case study"
          fill
          className="object-cover absolute inset-0 w-full hover:scale-110 transition-all duration-300"
        />
      </div>
    </div>
  );
}
