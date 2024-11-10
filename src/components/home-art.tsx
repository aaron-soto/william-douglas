import Image from "next/image";

interface ArtItemProps {
  src: string;
  alt: string;
}

const ArtItem = ({ src, alt }: ArtItemProps) => {
  return (
    <div className="relative min-w-[300px] h-[400px] group overflow-hidden">
      <Image
        src={src}
        className="object-cover absolute w-full h-full transform group-hover:scale-110 transition-all duration-300"
        height={400}
        width={300}
        alt={alt}
      />
    </div>
  );
};

export const HomeArt = () => {
  return (
    <div className="py-20 container grid grid-cols-1 md:grid-cols-4 border-b">
      <h2 className="text-3xl font-extralight col-span-1">Art</h2>
      <div className="flex flex-col col-span-3">
        <div className="flex gap-8 overflow-auto clean-scrollbar pb-2">
          <ArtItem src="/images/art/art.jpg" alt="art" />
          <ArtItem src="/images/art/bed.jpg" alt="art" />
          <ArtItem src="/images/art/desk.jpg" alt="art" />
          <ArtItem src="/images/art/valet.jpg" alt="art" />
        </div>
      </div>
    </div>
  );
};
