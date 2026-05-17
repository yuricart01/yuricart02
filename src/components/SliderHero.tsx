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
              "--swiper-navigation-color": "#1f2937",
              "--swiper-navigation-size": "18px",
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
          className="mySwiper h-full w-full [&_.swiper-button-next]:bg-white/95 [&_.swiper-button-prev]:bg-white/95 [&_.swiper-button-next]:backdrop-blur-sm [&_.swiper-button-prev]:backdrop-blur-sm [&_.swiper-button-next]:w-10 [&_.swiper-button-prev]:w-10 [&_.swiper-button-next]:h-10 [&_.swiper-button-prev]:h-10 [&_.swiper-button-next]:after:text-[18px] [&_.swiper-button-prev]:after:text-[18px] [&_.swiper-button-next]:after:font-bold [&_.swiper-button-prev]:after:font-bold [&_.swiper-button-next]:opacity-100 [&_.swiper-button-prev]:opacity-100 md:[&_.swiper-button-next]:opacity-0 md:[&_.swiper-button-prev]:opacity-0 group-hover:[&_.swiper-button-next]:opacity-100 group-hover:[&_.swiper-button-prev]:opacity-100 [&_.swiper-button-next]:transition-all [&_.swiper-button-prev]:transition-all [&_.swiper-button-next]:duration-300 [&_.swiper-button-prev]:duration-300 [&_.swiper-button-next]:right-4 [&_.swiper-button-prev]:left-4 [&_.swiper-button-next]:rounded-full [&_.swiper-button-prev]:rounded-full hover:[&_.swiper-button-next]:bg-white hover:[&_.swiper-button-prev]:bg-white hover:[&_.swiper-button-next]:scale-110 hover:[&_.swiper-button-prev]:scale-110 [&_.swiper-button-next]:shadow-md [&_.swiper-button-prev]:shadow-md"
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
