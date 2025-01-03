export interface ArtForSale {
  id: string;
  name: string;
  slug?: string;
  artist: string;
  artistLink: string;
  description?: string;
  image: string;
  features: string[];
  dimensions: string;
  price: number;
}

export const ART_FOR_SALE: ArtForSale[] = [
  {
    id: "c5d58e3d-fe5f-4790-ad61-0753727d02df",
    name: "Always On Time",
    slug: "always-on-time",
    artist: "Jeddadiah Emanuel",
    artistLink: "https://www.instagram.com/jeddadiah_emanuel/",
    description: "We followed a bird to get here",
    image: "/images/art/always-on-time.jpg",
    features: ["Hand Carved", "Bass Wood", "Walnut", "Wenge", "India ink"],
    dimensions: `42" wide x 37.5" tall`,
    price: 6000,
  },
  {
    id: "500e6bf6-826c-4b9b-abf4-fc5f6c5bfc92",
    name: "Una Bench",
    slug: "una-bench",
    artist: "William Douglas",
    artistLink: "https://www.instagram.com/williamdouglas.co/",
    description: "Timeless handcrafted bench blending style and comfort",
    image: "/images/art/una-bench.jpg",
    features: ["White Oak", "Walnut", "Danish Cord"],
    dimensions: `60" x 16" x 18"`,
    price: 4600,
  },
  {
    id: "ee17afa8-5fc0-4056-a19d-f5877b3e913a",
    name: "Valet",
    slug: "valet",
    artist: "William Douglas",
    artistLink: "https://www.instagram.com/williamdouglas.co/",
    description: "A place for everything and everything in its place",
    image: "/images/art/valet.jpg",
    features: ["Walnut", "White Oak", "Brass"],
    dimensions: `69" x 19" x 85.5"`,
    price: 8000,
  },
  {
    id: "2969507b-7d4d-4613-b88e-27ce1fa61248",
    name: `"The great reveal" in Stockholm`,
    slug: "the-great-reveal",
    artist: "William Douglas",
    artistLink: "https://www.instagram.com/williamdouglas.co/",
    description: "The great reveal in Stockholm",
    image: "/images/art/the-great-reveal.jpg",
    features: ["Aluminum Dibond"],
    dimensions: `18.5" x 26.5"`,
    price: 600,
  },
  {
    id: "e89ee4d2-77f9-4531-b43a-3b33c27d93a3",
    name: `"Self reflection" in Orebro`,
    slug: "self-reflection",
    artist: "William Douglas",
    artistLink: "https://www.instagram.com/williamdouglas.co/",
    description: "Self reflection in Orebro",
    image: "/images/art/self-reflection.jpg",
    features: ["Aluminum Dibond"],
    dimensions: `18.5" x 26.5"`,
    price: 600,
  },
];
