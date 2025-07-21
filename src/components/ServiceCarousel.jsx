// src/sections/ServiceCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ServiceCard from "../components/ui/ServiceCard";

const services = [
  { title: "Play Sports", image: "/sports.png" },
  { title: "Gyms", image: "/Servicegym.png" },
  { title: "Live Workouts", image: "/Liveworkout.png" },
  { title: "Play Sports", image: "/sports.png" },
  { title: "Gyms", image: "/Servicegym.png" },
  { title: "Live Workouts", image: "/Liveworkout.png" },
];

const ServiceCarousel = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#010a04] to-[#07160b] text-white text-center font-lufga">
      <h2 className="text-4xl font-bold mb-12">
        Service{" "}
        <span className="italic relative inline-block px-1">
          <span className="relative z-10 px-3 py-1">Category</span>
          <span
            className="absolute inset-0 -inset-y-1 border border-green-500 -skew-x-6 z-0"
            aria-hidden="true"
          ></span>
        </span>
      </h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{
          el: ".swiper-custom-pagination",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <ServiceCard  image={service.image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-custom-pagination mt-10 flex justify-center gap-2"></div>
    </section>
  );
};

export default ServiceCarousel;
