import { Metadata } from "next";
import { PageHeader } from "@/app/(marketing)/(components)/page-header";

export const metadata: Metadata = {
  title: "ACND",
  description:
    "A Craftsman Never Dies is an event featuring some of the best creatives in the world.",
};

export default function Page() {
  return (
    <div className="bg-black pt-[49px] h-screen w-screen">
      <div className="container pt-6">
        <PageHeader title="ACND" />
      </div>
    </div>
  );
}
