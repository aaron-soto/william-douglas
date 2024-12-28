import { ImageSlider } from "@/components/image-slider";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACND Exhibition",
};

export default function Page() {
  return (
    <div className="py-6 px-4 text-white flex flex-col">
      <h1 className="text-3xl text-white">Our Block Co.</h1>
      <p className="text-muted-foreground mt-3">
        Our Block Co was founded by William Douglas, inspired by the mid-century modern architecture of Phoenix, AZ. The iconic breeze blocks, known for their ability to play with light and add texture and pattern to architectural designs, captivated William’s imagination.
      </p>
      <p className="text-muted-foreground mt-3">
        Determined to elevate the classic designs, William introduced a third dimension to the blocks, creating dynamic pieces that honor mid-century aesthetics while offering a bold, modern twist. These innovative blocks captured the spirit of the past with a fresh, eye-catching approach.
      </p>
      <p className="text-muted-foreground mt-3">
        The research and development of these unique designs were made possible through the support of two business partners who initially funded the project. Although William has since been bought out, the legacy of his designs lives on.
      </p>
      <p className="text-muted-foreground mt-3">
        Each block and tile is still handmade, one at a time, in Phoenix, AZ. These pieces remain available for purchase, providing a blend of craftsmanship and architectural history.
      </p>

      <div className="flex flex-col my-4">
        <Link className="hover:text-red-700 underline text-white" href="https://ourblockco.com/" target="_blank">Visit Our Block Co Website</Link>
        <Link className="hover:text-red-700 underline text-white" href="https://www.instagram.com/ourblockco/" target="_blank">Follow Our Block Co on Instagram</Link>
      </div>
    </div>
  );
}
