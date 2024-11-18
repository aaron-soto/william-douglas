import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/app/(marketing)/(components)/page-header";

export const metadata: Metadata = {
  title: "WDC Productions",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="text-3xl text-white">WDC Productions</h1>
      <div className="pt-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          natus omnis exercitationem iusto est consequatur, laudantium ipsam
          voluptates. Provident ex iste reprehenderit enim nobis laborum, totam
          officiis, vitae modi, beatae quisquam? Consequuntur ea dignissimos
          similique iusto quasi, quidem quae illo modi debitis et, veniam minus?
        </p>

        <div className="grid grid-cols-2 gap-8 mt-6">
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
    </div>
  );
}
