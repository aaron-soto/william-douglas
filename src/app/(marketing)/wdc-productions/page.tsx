import { Metadata } from "next";
import { PageHeader } from "@/app/(marketing)/(components)/page-header";

export const metadata: Metadata = {
  title: "WDC Productions",
};

export default function Page() {
  return (
    <div className="bg-black pt-[49px] h-screen w-screen">
      <div className="container pt-6">
        <PageHeader title="WDC Productions" />
      </div>
    </div>
  );
}
