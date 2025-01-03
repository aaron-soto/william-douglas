"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";

// Preload images
const preloadImages = (images: { src: string }[]) => {
  images?.forEach((image) => {
    const img = new window.Image();
    img.src = image.src;
  });
};

export const ImageSlider = ({ className, images }: { className?: string, images: any[] }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    preloadImages(images); // Preload all images on component mount
    const timer = setTimeout(() => {
      setShowAnimation(false); // Disable animation after 3 seconds
    }, 3000);
    return () => clearTimeout(timer); // Cleanup timer
  }, [images]);

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
      className={cn("relative", className, "", {
        "animate-swipe": showAnimation,
      })}
      style={{
        "--swiper-pagination-bullet-border-radius": "0",
        "--swiper-pagination-bullet-height": "4px",
        "--swiper-pagination-bullet-width": "20px",
        paddingBottom: "35px",
      } as React.CSSProperties}
    >
      {images?.map((image, index) => (
        <SwiperSlide
          key={index}
          className={cn("relative w-full aspect-[2450/3673]")}
        >
          <div className="relative w-full aspect-[2450/3673]">
            <Image
              src={image.src}
              className="relative object-contain inset-0"
              fill
              alt="placeholder"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
