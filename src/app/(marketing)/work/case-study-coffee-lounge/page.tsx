import Image from "next/image";

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-serif text-3xl">Case Study Coffee Lounge</h1>
      <p className="text-muted-foreground mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab
        blanditiis non doloribus cupiditate esse officia eaque! Omnis explicabo
        dolorum, temporibus molestias id quos reprehenderit officiis eaque
        molestiae assumenda minima ipsam magnam fuga? Aut itaque consequuntur
        dolore commodi error eius quod earum assumenda praesentium voluptatem?
      </p>
      <div className="w-full md:w-[500px] h-[300px] mt-6 overflow-hidden rounded-[12px]">
        <Image
          src="/images/case-study-coffee-lounge.jpeg"
          alt="case study"
          width={500}
          height={300}
          className="object-cover"
        />
      </div>
    </div>
  );
}
