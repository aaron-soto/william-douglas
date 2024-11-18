import Link from "next/link";
import { PageHeader } from "@/app/(marketing)/(components)/page-header";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const firaSans = localFont({
  src: [
    {
      path: "../../fonts/FiraSansExtraCondensed-Black.ttf",
      weight: "900",
    },
    {
      path: "../../fonts/FiraSansExtraCondensed-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../fonts/FiraSansExtraCondensed-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../fonts/FiraSansExtraCondensed-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../fonts/FiraSansExtraCondensed-Light.ttf",
      weight: "300",
    },
    {
      path: "../../fonts/FiraSansExtraCondensed-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../fonts/FiraSansExtraCondensed-Thin.ttf",
      weight: "100",
    },
  ],
  variable: "--font-fira-sans",
});

export default function Page() {
  return (
    <div className="py-6 px-4 text-white flex flex-col">
      <h2 className={cn(firaSans.className, "font-medium text-xl uppercase")}>
        AWARDS
      </h2>
    </div>
  );
}
