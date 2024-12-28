import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 w-full md:h-screen">
      <div className="w-full h-[700px] md:h-full relative rounded-[35px] md:rounded-[15px] overflow-hidden">
        <Image
          src="/images/william-hero-min.jpg"
          alt="william"
          fill
          className="absolute inset-0 object-cover "
        />
        <div className="bg-black absolute inset-0 bg-opacity-40"></div>
      </div>
    </div>
  );
}
