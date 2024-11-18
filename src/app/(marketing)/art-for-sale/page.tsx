import Image from "next/image";
import { PageHeader } from "@/app/(marketing)/(components)/page-header";

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab
        blanditiis non doloribus cupiditate esse officia eaque! Omnis explicabo
        dolorum, temporibus molestias id quos reprehenderit officiis eaque
        molestiae assumenda minima ipsam magnam fuga? Aut itaque consequuntur
        dolore commodi error eius quod earum assumenda praesentium voluptatem?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <div className="col-span-1 h-[300px] overflow-hidden flex items-center justify-center">
          <Image
            src="/images/art/art.jpg"
            width={500}
            height={500}
            alt="img"
            className="object-cover hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="col-span-1 h-[300px] overflow-hidden flex items-center justify-center">
          <Image
            src="/images/art/bed.jpg"
            width={500}
            height={500}
            alt="img"
            className="object-cover hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="col-span-1 h-[300px] overflow-hidden flex items-center justify-center">
          <Image
            src="/images/art/desk.jpg"
            width={500}
            height={500}
            alt="img"
            className="object-cover hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="col-span-1 h-[300px] overflow-hidden flex items-center justify-center">
          <Image
            src="/images/art/valet.jpg"
            width={500}
            height={500}
            alt="img"
            className="object-cover hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
