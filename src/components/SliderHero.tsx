"use client";

import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full aspect-[2/1] md:aspect-[3.5/1] mt-5 px-3 md:px-5 relative group">
      <div className="w-full h-full rounded-xl overflow-hidden shadow-sm bg-white">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "20px",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper h-full w-full [&_.swiper-button-next]:bg-black/40 [&_.swiper-button-prev]:bg-black/40 [&_.swiper-button-next]:w-8 [&_.swiper-button-prev]:w-8 [&_.swiper-button-next]:h-12 [&_.swiper-button-prev]:h-12 [&_.swiper-button-next]:after:text-[15px] [&_.swiper-button-prev]:after:text-[15px] [&_.swiper-button-next]:opacity-0 [&_.swiper-button-prev]:opacity-0 group-hover:[&_.swiper-button-next]:opacity-100 group-hover:[&_.swiper-button-prev]:opacity-100 [&_.swiper-button-next]:transition-opacity [&_.swiper-button-prev]:transition-opacity [&_.swiper-button-next]:right-0 [&_.swiper-button-prev]:left-0 [&_.swiper-button-next]:rounded-l-md [&_.swiper-button-prev]:rounded-r-md"
        >
          <SwiperSlide className="relative w-full h-full cursor-grab active:cursor-grabbing">
            <Image
              src="/images/banner1.png"
              alt="Promotion 1"
              fill
              className="object-cover hover:scale-[1.01] transition-all duration-500"
              priority
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full cursor-grab active:cursor-grabbing">
            <Image
              src="/images/banner2.png"
              alt="Promotion 2"
              fill
              className="object-cover hover:scale-[1.01] transition-all duration-500"
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full cursor-grab active:cursor-grabbing">
            <Image
              src="/images/banner3.png"
              alt="Promotion 3"
              fill
              className="object-cover hover:scale-[1.01] transition-all duration-500"
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full cursor-grab active:cursor-grabbing">
            <Image
              src="/images/banner4.png"
              alt="Promotion 4"
              fill
              className="object-cover hover:scale-[1.01] transition-all duration-500"
            />
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full cursor-grab active:cursor-grabbing">
            <Image
              src="/images/banner5.png"
              alt="Promotion 5"
              fill
              className="object-cover hover:scale-[1.01] transition-all duration-500"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
