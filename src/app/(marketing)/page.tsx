import { HomeAbout } from "@/components/home-about";
import { HomeArt } from "@/components/home-art";
import { HomeFaq } from "@/components/home-faq";
import { HomeVentures } from "@/components/home-ventures";
import { ScrollingHero } from "@/components/scrolling-hero";

export default function Home() {
  return (
    <>
      <ScrollingHero />

      <HomeAbout />

      <HomeVentures />

      <HomeArt />

      <HomeFaq />
    </>
  );
}
