"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  products: any[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="px-3 md:px-5 mb-4">
      <div className="bg-white rounded-xl overflow-hidden relative group shadow-sm border">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={2.5}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            640: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={products.length >= 6}
          className="w-full p-2"
        >
          {products.map((product) => {
            const mainImage = product.media?.mainMedia?.image?.url || "/images/placeholder.png";
            return (
              <SwiperSlide key={product._id} className="h-full">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex flex-col items-center group/card transition-all duration-300"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border border-gray-200 bg-white group-hover/card:border-blue-500 transition-all shadow-sm">
                    <Image
                      src={mainImage}
                      alt={product.name || "Product"}
                      fill
                      className="object-contain hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-3 text-center w-full px-1">
                    <p className="text-[11px] md:text-xs font-semibold text-gray-800 line-clamp-2 group-hover/card:text-blue-600">
                      {product.name?.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "").trim()}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm shadow-md border border-gray-100 hover:bg-white hover:scale-105 text-gray-800 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 opacity-100 md:opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:scale-100 disabled:cursor-not-allowed">
          <ChevronLeft size={24} className="mr-0.5" />
        </button>
        <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm shadow-md border border-gray-100 hover:bg-white hover:scale-105 text-gray-800 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 opacity-100 md:opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:scale-100 disabled:cursor-not-allowed">
          <ChevronRight size={24} className="ml-0.5" />
        </button>
      </div>
    </div>
  );
}
