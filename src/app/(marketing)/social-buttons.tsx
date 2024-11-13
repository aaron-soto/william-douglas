import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

export const SocialButtons = () => {
  return (
    <div className="fixed right-4 z-[1001] bottom-4 flex flex-col">
      <Button
        variant="ghost"
        className="hover:bg-transparent text-white hover:text-red-700"
      >
        <FaFacebook className="!text-4xl" />
      </Button>
      <Button
        variant="ghost"
        className="hover:bg-transparent text-white hover:text-red-700"
      >
        <FaInstagram className="!text-4xl" />
      </Button>
      <Button
        variant="ghost"
        className="hover:bg-transparent text-white hover:text-red-700"
      >
        <FaYoutube className="!text-4xl" />
      </Button>
    </div>
  );
};
