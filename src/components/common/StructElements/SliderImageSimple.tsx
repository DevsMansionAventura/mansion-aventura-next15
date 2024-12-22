"use client";
// Next - React
import Image from "next/image";
// Models
import { SliderImages } from "@/models/SliderImages";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SliderImageSimple() {
  return (
    <div>
      <Swiper
        id="slider_images"
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        speed={800}
        className="rounded-lg"
      >
        {SliderImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex overflow-hidden rounded-lg max-h-[350px] md:max-h-[450px] lg:max-h-[641px]">
              <div className="w-full h-full absolute inset-0 bg-purple-950/20" />
              <Image
                src={slide.img}
                alt={slide.alt}
                width={1140}
                height={641}
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
