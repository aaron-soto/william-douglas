import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/app/(marketing)/(components)/page-header";

export const metadata: Metadata = {
  title: "WDC Productions",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white flex flex-col">
      <h1 className="text-3xl text-white">WDC Productions.</h1>
      <p className="text-muted-foreground mt-3">
        Content creation has always been at the heart of William Douglas Co. As a seasoned “woodworking influencer,” William Douglas spent over a decade mastering the art of marketing and building meaningful connections with audiences.
      </p>
      <p className="text-muted-foreground mt-3">
        WDC Productions was born when William began crafting marketing campaigns for companies beyond his own, leveraging his expertise in storytelling and audience engagement.
      </p>
      <p className="text-muted-foreground mt-3">
        Looking to connect with your clients through intentional and impactful marketing? Reach out to WDC Productions and let an experienced influencer help you achieve your goals.
      </p>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="h-[300px] relative col-span-1 overflow-hidden flex items-center justify-center">
          <Image
            src="/images/garage-will-shooting.jpg"
            fill
            alt="Will shooting Chevy Silverado for a social media activation for chevy"
            className="object-cover inset-0 absolute hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="col-span-1 text-muted-foreground">
          Pictured: William photographing a Chevy Silverado for a social media
          activation event.
        </div>
      </div>
    </div>
  );
}
