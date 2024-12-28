import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { SOCIALS_MAP } from "@/data/nav-links";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">
        WILLIAM DOUGLAS CO. YOUTUBE
      </h1>
      <p className="text-muted-foreground mt-3">
        William Douglas Co.&apos;s YouTube channel offers woodworking
        enthusiasts a blend of educational content and entertainment. With over
        47,000 subscribers and 72 videos, the channel features tutorials,
        project showcases, and comedic sketches that resonate with both novice
        and experienced woodworkers. Notable videos include{" "}
        <Link
          className="text-primary underline"
          href="https://www.youtube.com/watch?v=vWmQhFbgDrU"
        >
          My BEST build EVER and how I did it!
        </Link>{" "}
        and{" "}
        <Link
          className="text-primary underline"
          href="Sh*t People Say To Woodworkers (Comedy)"
        >
          Sh*t People Say To Woodworkers (Comedy)
        </Link>{" "}
        which highlight Douglas&apos;s craftsmanship and humor. The channel
        emphasizes high-quality production and innovative ideas, aiming to
        elevate woodworking content and inspire a broader audience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 my-8">
        <div className="col-span-1 aspect-video self-stretch w-full relative">
          <img
            src="https://img.youtube.com/vi/vWmQhFbgDrU/hqdefault.jpg"
            alt="Video placeholder"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/vWmQhFbgDrU"
            frameBorder="0"
            title="Product Overview Video"
            aria-hidden="true"
            loading="lazy"
            style={{ visibility: 'hidden' }}
            onLoad={(e) => {
              (e.target as HTMLIFrameElement).style.visibility = 'visible';
              ((e.target as HTMLIFrameElement).previousElementSibling as HTMLElement)!.style.display = 'none';
            }}
          />
        </div>
        <div className="col-span-1 aspect-video self-stretch w-full relative">
          <img
            src="https://img.youtube.com/vi/K9bVfkSgW0E/hqdefault.jpg"
            alt="Video placeholder"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/K9bVfkSgW0E"
            frameBorder="0"
            title="Product Overview Video"
            aria-hidden="true"
            loading="lazy"
            style={{ visibility: 'hidden' }}
            onLoad={(e) => {
              (e.target as HTMLIFrameElement).style.visibility = 'visible';
              ((e.target as HTMLIFrameElement).previousElementSibling as HTMLElement)!.style.display = 'none';
            }}
          />
        </div>
      </div>

      <Button size="lg" className="mt-3 w-full md:w-fit mb-12" asChild>
        <a target="_blank" href={SOCIALS_MAP.Youtube.href}>
          Check out the channel
        </a>
      </Button>
    </div>
  );
}
