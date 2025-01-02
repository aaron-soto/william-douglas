"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Emily R.",
    testimonial: "ACND gave me the opportunity to showcase my work to serious buyers who truly value craftsmanship. It was a game-changer for my career as a professional maker.",
  },
  {
    name: "Michael T.",
    testimonial: "Finally, an exhibition that connects artists with real customers, not just other creators. ACND provided exactly the kind of exposure I needed for my handmade furniture pieces.",
  },
  {
    name: "Sophia L.",
    testimonial: "The ACND Art Exhibition was everything I hoped for—professional, inspiring, and filled with clients who understood the value of my work. I’ll be back next year!",
  },
  {
    name: "David K.",
    testimonial: "I’ve never been to an event so focused on helping artists succeed. ACND truly bridges the gap between creators and clients who value high-quality craftsmanship.",
  },
  {
    name: "Jessica P.",
    testimonial: "ACND’s focus on connecting makers with genuine buyers made it a standout event for me. I was finally able to sell my art to people who truly appreciated it.",
  },
  {
    name: "Henry W.",
    testimonial: "This exhibition offered a unique chance to connect with serious buyers who respected the time and skill that went into my work. Highly recommend ACND for emerging artists!",
  },
  {
    name: "Clara M.",
    testimonial: "ACND gave me more exposure in one weekend than other events have in years. The buyers were engaged, and I felt my work was genuinely appreciated.",
  },
  {
    name: "Oliver H.",
    testimonial: "ACND is exactly what the art community needed—an event for professionals who are ready to take their craft to the next level. I made valuable connections here.",
  },
];

export const ACNDTestimonialSlider = ({ className }: { className?: string }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
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
          slidesPerView: 1,
          spaceBetween: 15,
        },
        "@1.50": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}
      className={cn("relative", className)}
      style={{
        "--swiper-pagination-bullet-border-radius": "0",
        "--swiper-pagination-bullet-height": "4px",
        "--swiper-pagination-bullet-width": "20px",
        paddingBottom: "35px",
      } as React.CSSProperties}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="flex pt-4 items-center justify-center h-full">
            <div className="py-6 text-neutral-400 bg-neutral-950 rounded-lg shadow-lg w-full">
              <p className="text-lg px-4 max-w-2xl mx-auto font-medium mb-4">
                {testimonial.testimonial}
              </p>
              <p className="text-md px-4 max-w-2xl mx-auto font-semibold text-white">
                - {testimonial.name}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
