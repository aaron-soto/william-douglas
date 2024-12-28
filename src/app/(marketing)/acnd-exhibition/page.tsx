import Image from "next/image";
import { ImageSlider } from "@/app/(marketing)/acnd-exhibition/image-slider";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACND Exhibition",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white flex flex-col">
      <h1 className="text-3xl text-white">ACND Exhibition</h1>

      <Image src="/images/acnd/acnd-color-logo.png" height={50} width={200} alt="acnd-logo" className="my-4" />

      <p className="text-muted-foreground mt-3">
        The ACND Art Exhibition was created to bridge the gap between serious artists, makers, and craftspeople and their ideal clients and customers. What sets this exhibition apart is its focus on connecting creators with genuine buyers rather than other creators, ensuring a more meaningful and lucrative experience for participants.
      </p>
      <p className="text-muted-foreground mt-3">
        The concept for ACND began with William Douglas’s own journey as a maker. Early on, he participated in events to gain exposure, but his high-end, art exhibition furniture often stood out in the wrong way. Many attendees were there for affordable holiday trinkets, not investment pieces. Realizing he needed a different platform but unable to afford the $15,000 cost to join the &quot;right&quot; shows in LA, William decided to create his own opportunity.
      </p>
      <p className="text-muted-foreground mt-3">
        Hosted at Case Study Coffee Lounge, ACND is designed to provide serious artists and makers with the kind of support William didn’t have early in his career—a professional space that connects them with buyers who value and appreciate their work.
      </p>
      <p className="text-muted-foreground mt-3">
        This event is not for hobbyists, as there are already many avenues for them to showcase their creations. Instead, ACND is dedicated to supporting emerging professionals who are serious about their craft and ready to grow their business.
      </p>

      <div className="flex flex-col my-4">
        <Link className="hover:text-red-700 underline text-white" href="/acnd-exhibition/apply">Apply for a booth at the next ACND Exhibition</Link>
        <Link className="hover:text-red-700 underline text-white" href="">Follow ACND on Instagram</Link>
      </div>

      <h2 className="mt-6 text-xl font-sans uppercase">ACND 2024</h2>

      <ImageSlider className="w-full mt-4" />



    </div>
  );
}
