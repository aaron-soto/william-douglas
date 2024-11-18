import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study",
  description: "About Will's journey to start Case Study Coffee Lounge.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">Case Study Coffee Lounge</h1>
      <p className="text-muted-foreground mt-3"></p>
    </div>
  );
}
