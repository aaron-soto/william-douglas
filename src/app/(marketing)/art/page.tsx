import { Metadata } from "next";
import { PageHeader } from "@/app/(marketing)/(components)/page-header";

export const metadata: Metadata = {
  title: "Art",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="bg-black pt-[49px] h-screen w-screen">
      <div className="container pt-6">
        <PageHeader title="Art" />
      </div>
    </div>
  );
}
