import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const VENTURES = [
  {
    title: "Case Study Coffee Lounge",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorum atque quibusdam qui vero distinctio debitis.",
  },
  {
    title: "Our Block Co.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis      tempora sint quas explicabo cumque doloribus, nisi laudantium unde?",
  },
];

interface VentureProps {
  title: string;
  idx: number;
  description: string;
}

export const Venture = ({ title, idx, description }: VentureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col pt-4 gap-4 animate-slidein opacity-0 [--slidein-delay:700ms]",
        idx != VENTURES.length - 1 && "border-b pb-6"
      )}
    >
      <h2 className="font-sans text-3xl font-thin">{title}</h2>
      <p className="text-xl font-thin font-sans">{description}</p>
      <div className="flex">
        <Button className="" variant="outline">
          Read More
        </Button>
      </div>
    </div>
  );
};

export const HomeVentures = () => {
  return (
    <div className="py-20 container grid grid-cols-1 md:grid-cols-4 border-b">
      <h2 className="text-3xl font-extralight col-span-1 animate-slidein opacity-0 [--slidein-delay:500ms]">
        Ventures
      </h2>
      <div className="flex flex-col col-span-3">
        {VENTURES.map((venture, index) => (
          <Venture key={index} idx={index} {...venture} />
        ))}
      </div>
    </div>
  );
};
