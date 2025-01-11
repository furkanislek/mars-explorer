"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const PhotoSlider = () => {
  return (
    <div className="py-0 md:py-1 xl:pt-8">
      <div
        style={{ width: "80%", margin: "4rem auto 20px" }}
        className="hidden md:block"
      >
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          navigation={true} // Navigasyon oklarını etkinleştirir
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3} // Aynı anda kaç slayt görünecek
          loop={true} // Döngü yapmasını sağlar
        >
          {/* Slaytlar */}
          <SwiperSlide>
            <img
              src="/sl1.svg" // Resim URL'si
              alt="Mars 1"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/sl2.svg"
              alt="Mars 2"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/sl3.svg"
              alt="Mars 3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/sl4.svg"
              alt="Mars 3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/sl5.svg"
              alt="Mars 3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        style={{ width: "80%", margin: "4rem auto 20px" }}
        className="block md:hidden"
      >
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          navigation={true} // Navigasyon oklarını etkinleştirir
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1} // Aynı anda kaç slayt görünecek
          loop={true} // Döngü yapmasını sağlar
        >
          {/* Slaytlar */}
          <SwiperSlide>
            <img
              src="/sl1.svg" // Resim URL'si
              alt="Mars 1"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/sl2.svg"
              alt="Mars 2"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/sl3.svg"
              alt="Mars 3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/sl4.svg"
              alt="Mars 3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/sl5.svg"
              alt="Mars 3"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoSlider;
