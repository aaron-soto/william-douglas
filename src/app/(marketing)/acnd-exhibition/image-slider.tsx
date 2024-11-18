"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";

const IMAGES = [
  { src: "/images/placeholder.webp" },
  { src: "/images/placeholder.webp" },
  { src: "/images/placeholder.webp" },
  { src: "/images/placeholder.webp" },
  { src: "/images/placeholder.webp" },
  { src: "/images/placeholder.webp" },
];

export const ImageSlider = ({ className }: { className?: string }) => {
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
