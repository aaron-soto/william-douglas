import { Button } from "@/components/ui/button";

export const HomeAbout = () => {
  return (
    <div className="py-20 container grid grid-cols-1 md:grid-cols-4 border-b">
      <h2 className="text-3xl font-extralight col-span-1 animate-slidein opacity-0 [--slidein-delay:300ms]">
        About
      </h2>
      <div className="col-span-3 flex flex-col gap-4 items-start w-full">
        <p className="text-2xl font-thin font-sans animate-slidein opacity-0 [--slidein-delay:500ms]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex autem
          laborum, magni neque quaerat laboriosam quae numquam! Incidunt autem,
          architecto nostrum numquam, facere tenetur itaque nisi soluta ipsum
          aliquam, velit maiores explicabo voluptas laboriosam assumenda aut
          libero perspiciatis harum vero. Soluta illo id, molestias quod
          distinctio rerum sed commodi eligendi.
        </p>

        <Button>Learn More</Button>
      </div>
    </div>
  );
};
