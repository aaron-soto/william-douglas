import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

export interface NavLink {
  label: string;
  links?: NavLink[];
  href?: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Studio",
    links: [
      {
        label: "Art for sale",
        href: "/art-for-sale",
      },
      {
        label: "Portfolio",
        href: "/portfolio",
      },
    ],
  },
  {
    label: "Work",
    links: [
      {
        label: "Case Study Coffee Lounge",
        href: "/case-study-coffee-lounge",
      },
      {
        label: "ACND Exhibition",
        href: "/acnd-exhibition",
      },
      {
        label: "Our Block Co",
        href: "/our-block-co",
      },
    ],
  },
  {
    label: "Productions",
    links: [
      {
        label: "WDC Productions",
        href: "/wdc-productions",
      },
      {
        label: "William Douglas Co. Youtube",
        href: "/william-douglas-co-youtube",
      },
    ],
  },
  {
    label: "Press/Awards",
    links: [
      {
        label: "Best of the Valley 2024",
        href: "/best-of-the-valley-2024",
      },
      {
        label: "Fine Woodworking Magazine 2023",
        href: "/fine-woodworking-magazine-2023",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    links: [
      {
        label: "Consulting",
        href: "/consulting",
      },
    ],
  },
];

type Social = {
  label: string;
  href: string;
  icon: JSX.Element;
};

export const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/williamdouglas.co/?hl=en",
    icon: <FaInstagram className="!text-4xl" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/William-Douglas-Co-100063790443309/",
    icon: <FaFacebook className="!text-4xl" />,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@WilliamDouglasCo",
    icon: <FaYoutube className="!text-4xl" />,
  },
];

export const SOCIALS_MAP = SOCIALS.reduce<Record<string, Social>>(
  (map, social) => {
    map[social.label] = social;
    return map;
  },
  {}
);
