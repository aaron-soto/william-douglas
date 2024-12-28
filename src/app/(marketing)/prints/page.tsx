import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prints",
  description: "Some of the prints that will has created.",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white">
      <h1 className="font-sans uppercase text-3xl">Prints</h1>
      <p className="text-muted-foreground mt-3">
        Some of the prints that William has created will be added here.
      </p>
    </div>
  );
}
