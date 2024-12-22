"use client";
// Components
import ReserveCard from "./ReserveCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Types
import type { InfoCardsProps } from "@/types/components";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CardsSwiper({
  infoCards,
  salonCategory,
}: InfoCardsProps) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 xl:hidden">
        <Swiper
          id="swiper_videos"
          slidesPerView={1}
          spaceBetween={15}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
              centeredSlides: false,
            },
          }}
        >
          {infoCards.map((card, index) => (
            <SwiperSlide key={index} className="px-[30px] sm:px-[20px]">
              <ReserveCard
                key={index}
                image={card.image}
                altImage={card.altImage}
                title={card.title}
                capacity={card.capacity}
                include={card.include}
                salonCategory={salonCategory}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden xl:grid xl:grid-cols-3 xl:gap-x-[90px] xl:gap-y-[40px] xl:justify-items-center">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-[316px] px-[30px] sm:px-[20px] xl:px-0"
          >
            <ReserveCard
              key={index}
              image={card.image}
              altImage={card.altImage}
              title={card.title}
              capacity={card.capacity}
              include={card.include}
              salonCategory={salonCategory}
            />
          </div>
        ))}
      </div>
    </>
  );
}
