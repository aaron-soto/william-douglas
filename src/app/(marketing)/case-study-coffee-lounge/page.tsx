import Image from "next/image";
import Link from "next/link";
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
        <Link className="hover:text-red-700 underline text-white" href="https://casestudycoffeelounge.com">Visit the Case Study Coffee Lounge Website</Link>
        <Link className="hover:text-red-700 underline text-white" href="https://instagram.com">Follow Case Study Coffee Lounge on Instagram</Link>
      </div>

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
