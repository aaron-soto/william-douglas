import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">Consulting</h1>
      <p className="text-muted-foreground mt-3">
        William Douglas has a proven track record of helping business owners overcome challenges and achieve meaningful results. By offering practical advice and actionable solutions, he’s helped businesses grow, streamline operations, and reach their full potential.
      </p>

      <p className="text-muted-foreground mt-3">
        Whether you’re looking to increase your revenue, improve your marketing strategy, or enhance your customer experience, William can provide the guidance you need to succeed.
      </p>

      <p className="text-muted-foreground mt-3">
        Reach out to William Douglas Co. today to learn more about how consulting services can help your business thrive.
      </p>

      <Button size="lg" className="mt-6 w-full md:w-fit" asChild>
        <Link href="mailto:william@williamdouglasco.com">
          Contact For Details
        </Link>
      </Button>

    </div>
  );
}
