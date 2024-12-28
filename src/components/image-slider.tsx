"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

// Preload images
const preloadImages = (images: { src: string }[]) => {
  images?.forEach((image) => {
    const img = new window.Image();
    img.src = image.src;
  });
};

export const ImageSlider = ({ className, images }: { className?: string, images: any[] }) => {
  useEffect(() => {
    preloadImages(images); // Preload all images on component mount
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
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
      modules={[Pagination, Autoplay]}
      className={cn("relative", className)}
      style={{
        "--swiper-pagination-bullet-border-radius": "0",
        "--swiper-pagination-bullet-height": "4px",
        "--swiper-pagination-bullet-width": "20px",
        paddingBottom: "35px",
      } as React.CSSProperties}
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[300px]">
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

