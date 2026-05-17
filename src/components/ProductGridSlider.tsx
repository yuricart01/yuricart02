"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGridSliderProps {
  products: any[];
  title: string;
  hideTitle?: boolean;
}

export default function ProductGridSlider({ products, title, hideTitle = false }: ProductGridSliderProps) {
  return (
    <div className="px-3 md:px-5 mb-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        {!hideTitle && (
          <div className="text-xl p-4 w-full font-bold text-black border-b flex items-center justify-between">
            <h1>{title}</h1>
          </div>
        )}

        <div className="p-2 relative group">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={8}
            slidesPerView={2.2}
            navigation={{
              prevEl: ".swiper-button-prev-custom-grid",
              nextEl: ".swiper-button-next-custom-grid",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3.2 },
              768: { slidesPerView: 4.2 },
              1024: { slidesPerView: 5.5 },
              1280: { slidesPerView: 6 },
            }}
            className="mySwiper !pb-2"
          >
            {products.map((product) => {
              const mainImage = product.media?.items?.[0]?.image?.url || "/placeholder.png";
              const price = product.price?.formatted?.price || "N/A";
              
              return (
                <SwiperSlide key={product._id}>
                  <div className="group relative border rounded-lg bg-white overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <Link href={`/products/${product.slug}`} className="block">
                      <div className="flex flex-col items-center md:items-start w-full">
                        {/* Image Container */}
                        <div className="w-full relative h-48 md:h-60 p-4 flex items-center justify-center bg-gray-50/30">
                          <Image
                            src={mainImage}
                            alt={product.name || "Product"}
                            width={300}
                            height={300}
                            className="h-full w-auto object-contain cursor-pointer group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Badges */}
                          <div className="absolute bottom-3 right-3 flex flex-col items-end gap-2">
                            {product.discount && (
                              <span className="w-fit px-2 py-1 text-[10px] uppercase tracking-wider text-white bg-red-600 font-bold rounded-sm shadow-sm">
                                Sale
                              </span>
                            )}
                            <span className="w-fit px-2 py-1 text-xs bg-white/90 backdrop-blur-sm font-bold text-gray-900 border border-gray-200 rounded-sm shadow-sm">
                              {price.replace(/Kes/gi, "").replace(/Ksh/gi, "Ksh ").trim()}
                            </span>
                          </div>
                        </div>
                        
                        {/* Text Detail */}
                        <div className="w-full p-4 flex flex-col items-start space-y-2">
                          <h3 className="text-md font-bold leading-tight line-clamp-2 h-12 text-black group-hover:text-blue-700 transition-colors">
                            {product.name?.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "").trim()}
                          </h3>
                          <div className="text-xs text-black/80 line-clamp-2 h-8 leading-relaxed">
                            {product.description?.replace(/<[^>]*>?/gm, '').trim() || "Premium quality product with reliable performance and sleek design."}
                          </div>
                          <div className="pt-2">
                            <strong className="text-black font-extrabold text-xl">
                              {price.replace(/Kes/gi, "").replace(/Ksh/gi, "Ksh ").trim()}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom-grid absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm shadow-md border border-gray-100 hover:bg-white hover:scale-105 text-gray-800 w-10 h-10 flex items-center justify-center rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 disabled:scale-100 disabled:cursor-not-allowed">
            <ChevronLeft size={24} className="mr-0.5" />
          </button>
          <button className="swiper-button-next-custom-grid absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm shadow-md border border-gray-100 hover:bg-white hover:scale-105 text-gray-800 w-10 h-10 flex items-center justify-center rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 disabled:scale-100 disabled:cursor-not-allowed">
            <ChevronRight size={24} className="ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
