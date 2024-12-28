"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const IMAGES = [
  { src: "/images/acnd/acnd-1.webp" },
  { src: "/images/acnd/acnd-2.webp" },
  { src: "/images/acnd/acnd-3.webp" },
  { src: "/images/acnd/acnd-4.webp" },
  { src: "/images/acnd/acnd-5.webp" },
  { src: "/images/acnd/acnd-6.webp" },
  { src: "/images/acnd/acnd-7.webp" },
  { src: "/images/acnd/acnd-8.webp" },
  { src: "/images/acnd/acnd-9.webp" },
  { src: "/images/acnd/acnd-10.webp" },
  { src: "/images/acnd/acnd-11.webp" },
  { src: "/images/acnd/acnd-12.webp" },
  { src: "/images/acnd/acnd-13.webp" },
  { src: "/images/acnd/acnd-14.webp" },
  { src: "/images/acnd/acnd-15.webp" },
  { src: "/images/acnd/acnd-16.webp" },
];

// Preload images
const preloadImages = (images: { src: string }[]) => {
  images.forEach((image) => {
    const img = new window.Image();
    img.src = image.src;
  });
};

export const ImageSlider = ({ className }: { className?: string }) => {
  useEffect(() => {
    preloadImages(IMAGES); // Preload all images on component mount
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      modules={[Pagination]}
      className={cn("", className)}
      style={
        {
          "--swiper-pagination-color": "#b91d2d",
        } as React.CSSProperties
      }
    >
      {IMAGES.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[350px]">
            <Image
              src={image.src}
              className="relative object-cover inset-0"
              fill
              alt="placeholder"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
