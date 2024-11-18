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
        William Douglas
      </h2>
      <Link href="/" className="text-red-700">
        williamdouglas@email.com
      </Link>
      <p className="mt-6">
        If you have any questions or would like to get in touch, please feel
        free to contact us at our emails or via the form.
      </p>

      <form className="mt-6 max-w-lg">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border-b border-white bg-transparent text-white"
        />
        <label htmlFor="email" className="block mt-4">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border-b border-white bg-transparent text-white"
        />
        <label htmlFor="message" className="block mt-4">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full border-b border-white bg-transparent text-white"
        />
        <button
          type="submit"
          className="mt-4 bg-red-700 text-white py-2 px-4 rounded-none w-[200px]"
        >
          Send
        </button>
      </form>
    </div>
  );
}
