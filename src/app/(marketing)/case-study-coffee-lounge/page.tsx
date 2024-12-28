import Image from "next/image";
import { ImageSlider } from "@/components/image-slider";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

const IMAGES = [
  { src: "/images/case-study/case-study-1.jpg" },
  { src: "/images/case-study/case-study-2.jpg" },
  { src: "/images/case-study/case-study-3.jpg" },
  { src: "/images/case-study/case-study-4.jpg" },
  { src: "/images/case-study/case-study-5.jpg" },
  { src: "/images/case-study/case-study-6.jpg" },
  { src: "/images/case-study/case-study-7.jpg" },
  { src: "/images/case-study/case-study-8.jpg" },
  { src: "/images/case-study/case-study-9.jpg" },
]

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">Case Study Coffee Lounge</h1>
      <p className="text-muted-foreground mt-3">
        Located in the heart of uptown Phoenix, AZ, Case Study Coffee Lounge is an award-winning coffee shop with a story as rich as its roasts. The lounge was born out of William Douglas’s pivot from woodworking to coffee after developing an allergy to wood.
      </p>
      <p className="text-muted-foreground mt-3">
        William’s former woodshop was a one-of-a-kind space where clients enjoyed coffee while sitting on handcrafted WDC furniture. Beyond glass walls, they could watch master craftsmen at work, building heirloom-quality pieces. When William had to close the shop, he faced three years left on his lease, an espresso machine, and a few pieces of furniture.
      </p>
      <p className="text-muted-foreground mt-3">
        Determined to turn a setback into an opportunity, William transformed the woodshop into Case Study Coffee Lounge. His commitment to precision and craftsmanship now shines in every cup of coffee. William roasts the beans himself, ensuring exceptional quality.
      </p>
      <p className="text-muted-foreground mt-3">
        Case Study Coffee Lounge is a haven for coffee lovers and students alike, offering a welcoming atmosphere, expertly brewed coffee, house-made syrups, a breakfast menu, and an in-house baking program. William dreams of expanding to a second location when the time is right.
      </p>

      <div className="flex flex-col my-4">
        <Link className="hover:text-red-700 underline text-white" href="https://casestudycoffeelounge.com" target="_blank">Visit the Case Study Coffee Lounge Website</Link>
        <Link className="hover:text-red-700 underline text-white" href="https://www.instagram.com/casestudycoffeelounge/" target="_blank">Follow Case Study Coffee Lounge on Instagram</Link>
      </div>

      <ImageSlider images={IMAGES} className="w-full mt-4" />
    </div>
  );
}
